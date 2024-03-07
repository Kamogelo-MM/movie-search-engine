function createMovieElement(movie) {
  const movieElement = document.createElement("div");
  movieElement.innerHTML = `
    
    <img src="${movie.poster_path}" alt="${movie.original_title}" />
    <h4><a>${movie.original_title}</a></h4>
    <h6>${movie.genres}</h6>
   <button class="accordian">+</button>
   
   `;
  return movieElement;
}

const options = {
  method: "GET",
  url: "https://movies-api14.p.rapidapi.com/home",
  headers: {
    "X-RapidAPI-Key": "d6482ef0c6msh1dcde0e06061022p148c2ejsn5f47ee4e3b61",
    "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
  },
};

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await axios.request(options);

    // Handle Trending Movies
    const trendingMovies = response.data[0];
    const trendingMoviesContainer = document.getElementById("trendingMovies");

    if (!trendingMoviesContainer) {
      console.error("Container for Trending Movies not found.");
    } else {
      trendingMovies.movies.forEach((movie) => {
        const movieElement = createMovieElement(movie);
        trendingMoviesContainer.appendChild(movieElement);
      });
    }

    // Handle New Movies
    const newMovies = response.data[1];
    const newMoviesContainer = document.getElementById("newMovies");

    if (!newMoviesContainer) {
      console.error("Container for New Movies not found.");
    } else {
      newMovies.movies.forEach((movie) => {
        const movieElement = createMovieElement(movie);
        newMoviesContainer.appendChild(movieElement);
      });
    }

    //Handle Animated movies
    const animatedMovies = response.data[2];
    const animatedMoviesContainer = document.getElementById("animationMovies");

    if (!animatedMoviesContainer) {
      console.error("Container for Animated movies not found.");
    } else {
      animatedMovies.movies.forEach((movie) => {
        const movieElement = createMovieElement(movie);
        animatedMoviesContainer.appendChild(movieElement);
      });
    }

    //Handle family movies
    const familyMovies = response.data[4];
    const familyMoviesContainer = document.getElementById("familyMovies");

    if (!familyMoviesContainer) {
      console.error("Container for family movies not found.");
    } else {
      familyMovies.movies.forEach((movie) => {
        const movieElement = createMovieElement(movie);
        familyMoviesContainer.appendChild(movieElement);
      });
    }

    //Handle adrenaline movies
    const adrenalineMovies = response.data[7];
    const adrenalineMoviesContainer =
      document.getElementById("adrenalineMovies");

    if (!adrenalineMoviesContainer) {
      console.error("Container for adrenaline movies not found.");
    } else {
      adrenalineMovies.movies.forEach((movie) => {
        const movieElement = createMovieElement(movie);
        adrenalineMoviesContainer.appendChild(movieElement);
      });
    }

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});

const accordian = document.getElementById("trendingMovies");

for (i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    this.classlist.toggle("active");
  });
}
