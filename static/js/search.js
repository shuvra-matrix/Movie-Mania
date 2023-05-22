"use strict";

const inputButton = document.querySelector(".search-field");
const popularShow = document.querySelector(".popular-show");
const searchShow = document.querySelector(".search-show");
const resultFor = document.querySelector(".text-sub");

$(".script").empty();

inputButton.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    popularShow.classList.add("hidden");
    if (searchShow.classList.contains("hidden")) {
      searchShow.classList.toggle("hidden");
    }
    const inputValue = inputButton.value;

    resultFor.textContent = "Results";
    $(".search-show").empty();
    $(".popular-show").empty();
    $.ajax(searchPageApi(inputValue)).done(function (response) {
      console.log(response);
      $(".script").empty();

      response.result.forEach((res) => {
        const streamPlartformLength = Object.keys(res.streamingInfo).length;
        if (streamPlartformLength > 0) {
          $(".search-show").append(
            `<div class="movie-section">
        <img
          class="movie-image"
          src="${res.posterURLs.original}"
          alt="${res.imdbId}"
        />
        <h4 class="movie-title">${res.title}</h4>
        <img
          class="start"
          src="./static/images/star.png"
          alt=""
          width="20px"
          height="20px"
        /> <span class="rating">${res.imdbRating / 10}</span>
        <p class="year">${res.year}</p>
      </div>`
          );
        }
      });

      let movieSections = document.querySelectorAll(".movie-section");
      const texts = document.querySelector(".text");
      const searchPages = document.querySelector(".search-show");

      details(movieSections, texts, searchPages);
      detailsPage.style.display = "none";
      $(".details-page").empty();
    });
  }
});
