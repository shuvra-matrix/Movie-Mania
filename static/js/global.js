"usar strict";
const detailsPage = document.querySelector(".details-page");
const searchBox = document.querySelector(".search-box");
const searchToggler = document.querySelectorAll(".search-btn");
$(".script").empty();
for (tog of searchToggler) {
  tog.addEventListener("click", () => {
    searchBox.classList.toggle("active");
  });
}

const settings = {
  async: true,
  crossDomain: true,
  url: "https://imdb-top-100-movies.p.rapidapi.com/",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "53db47703bmsh43337a6ff98140ep1d9019jsnfa4b3f6ce92b",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
  response.forEach((res) => {
    if (res.title !== "Come and See") {
      $(".popular-show").append(
        `<div class="movie-section">
        <img
          class="movie-image"
          src="${res.image}"
          alt="${res.title}"
        />
        <h4 class="movie-title">${res.title}</h4>
        <img
          class="start"
          src="./static/images/star.png"
          alt=""
          width="20px"
          height="20px"
        /> <span class="rating">${res.rating}</span>
        <p class="year">${res.year}</p>
      </div>`
      );
    }
  });
  $(".script").append(`<script src="./static/js/details.js"></script>`);
});

// for (let i = 0; i < 10; i++) {
//   $(".popular-show").append(` <div class="movie-section">
//         <img
//           class="movie-image"
//           src="https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
//           alt="rrr"
//         />
//         <h4>guardians of galaxy vol 3 4k poster</h4>
//         <img
//           class="start"
//           src="./static/images/star.png"
//           alt=""
//           width="20px"
//           height="20px"
//         />
//         <p class="year">2023</p>
//       </div>`);
// }
