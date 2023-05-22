"use strict";

const inputButton = document.querySelector(".search-field");
const popularShow = document.querySelector(".popular-show");

inputButton.addEventListener("keypress", (e) => {
  if (e.code == "Enter") {
    popularShow.classList.add("hidden");
    const inputValue = inputButton.value;
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://streaming-availability.p.rapidapi.com/v2/search/title?title=batman&country=us&show_type=movie&output_language=en",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "53db47703bmsh43337a6ff98140ep1d9019jsnfa4b3f6ce92b",
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      response.result.forEach((res) => {
        console.log(res);

        $(".search-show").append(
          `<div class="movie-section">
        <img
          class="movie-image"
          src="${res.posterURLs.original}"
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
      });
    });
  }
});
