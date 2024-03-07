const apiKey = "d6482ef0c6msh1dcde0e06061022p148c2ejsn5f47ee4e3b61";

async function searchMovies() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const query = urlParams.get("query");
  const options = {
    method: "GET",
    url: "https://movies-api14.p.rapidapi.com/search",
    params: {
      query: query,
      query: "Kill Bill",
    },
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    console.log(response.data);

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

  function showResults(data) {
    const searchResultsDiv = document.getElementById("search-results");
  }

  showResults();
}
searchMovies();
