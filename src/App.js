const options = {
  method: "GET",
  url: "https://movies-api14.p.rapidapi.com/home",
  headers: {
    "X-RapidAPI-Key": "d6482ef0c6msh1dcde0e06061022p148c2ejsn5f47ee4e3b61",
    "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
  },
};

async function displayFeed() {
  try {
    const response = await axios.request(options);
    const TvShowsTitle = response.data.movies;
    const TvShowsTitleDisplay = document.getElementById("tvShow-title");
    const tvShowsDisplay = document.getElementById("tv-shows-display");

    TvShows.forEach((show) => {
      const showElement = document.createElement("div");
      showElement.classList.add("show");
      showElement.innerHTML = `<img src='${show.backdrop_path}' alt='show-title'/>`;
      tvShowsDisplay.appendChild(showElement);
    });

    TvShowsTitle.forEach((title) => {
      const showElement = document.createElement("div");
      showElement.classList.add("title");
      showElement.innerHTML = `<h2>${title}</h2>`;
      TvShowsTitleDisplay.appendChild(showElement);
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

displayFeed();
