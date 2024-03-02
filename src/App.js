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
    //homepage
    const shows1 = response.data[0].movies;
    const show2 = response.data[1].movies;
    const show3 = response.data[2].movies;
    const show4 = response.data[3].movies;
    const show5 = response.data[4].movies;
    const displayShow5 = document.getElementById("adrenaline");
    const displayShow4 = document.getElementById("family-time");
    const displayShow3 = document.getElementById("best-animation");
    const displayShow2 = document.getElementById("new-movies");
    const displayShow1 = document.getElementById("trending-show");

    show5.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.innerHTML = `<img src=${movie.backdrop_path}>`;

      displayShow5.appendChild(movieElement);
    });

    show4.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.innerHTML = `<img src=${movie.backdrop_path} >`;
      displayShow4.appendChild(movieElement);
    });

    show3.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.innerHTML = `<img src=${movie.backdrop_path} >`;
      displayShow3.appendChild(movieElement);
    });

    show2.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.innerHTML = `<img src=${movie.backdrop_path}>`;
      displayShow2.appendChild(movieElement);
    });

    shows1.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.innerHTML = `<img src=${movie.backdrop_path}>`;

      displayShow1.appendChild(movieElement);
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  displayFeed();
});
