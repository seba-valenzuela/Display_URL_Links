// Function to retrieve JSON
async function getData(url) {
    const response = await fetch(url);
    return response.json()
  }

  async function main() {
    // use getData function to retrieve JSON file, save it to a variable 'data'
    const data = await getData('JSONfile_URL');

    // 'instrument' example: 'Bass'
    // "For every instrument (key) in this data dictionary..."
    for (var instrument in data) {

      // Create a title (ex. "Bass")
      var h = document.createElement("H3"); // Create the H1 element
      var t = document.createTextNode(instrument); // Create a text element
      h.appendChild(t); // Append the text node to the H1 element
      document.body.appendChild(h); // Append the H1 element to the document body

      // store the list of Bass songs in 'song_list' variable
      var song_list = data[instrument]
      // for each INSTRUMENT (key) in this list...
      for (var song_object of song_list) {
        // for each SONG associated with an instrument...
        for (var song_name in song_object) {

          // Create a var with the name and URL of the PDF song file
          var link_url = song_object[song_name];

          // Create link to appear on website
          const a = document.createElement("a");
          var lineBreak = document.createElement("br");
          a.href = link_url;

          // Replace "+" in filename with " " ("+" used to be in URL)
          a.innerText = song_name.split('+').join(' ');
          a.style.backgroundColor="rgba(255, 255, 255, 0.7)" //this is called "javascript syntax" on w3 schools
          
          // Add this to the body of the HTML page
          document.body.appendChild(a);
          document.body.append(lineBreak);
        }
      }
    }
  }
  main();
