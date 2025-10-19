const apiUrl = 'https://api.chucknorris.io/jokes/random';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    console.log("Joke of Chuck Norris:");
    console.log(data.value);
  })
  .catch(error => console.error("Error fetching joke:", error));