"usar strict";

const searchBox = document.querySelector(".search-box");
console.log(searchBox);
const searchToggler = document.querySelectorAll(".search-btn");

for (tog of searchToggler) {
  console.log(tog);
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
      let titles = res.title.slice(0, 16) + "...";
      $(".popular-show").append(
        `<div class="image"> <img src="${res.image}" alt="${res.title}"> <div class="title"><h3>${titles}</h3></div>  </div>`
      );
    }
  });
});
