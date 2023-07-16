"usar strict";
const detailsPage = document.querySelector(".details-page");
const searchBox = document.querySelector(".search-box");
const searchToggler = document.querySelectorAll(".search-btn");

$(".script").empty();
detailsPage.style.display = "none";

for (tog of searchToggler) {
  tog.addEventListener("click", () => {
    searchBox.classList.toggle("active");
  });
}

$.ajax(indexPage()).done(function (response) {
  response.forEach((res) => {
    console.log(res);

    if (res.title !== "Come and See") {
      $(".popular-show").append(
        `<div class="movie-section">
        <img
          class="movie-image"
          src="${res.image[1][1]}"
          alt="${res.imdbid}"
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
