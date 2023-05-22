function details(movie, texts, search) {
  const detailsPage = document.querySelector(".details-page");
  detailsPage.style.display = "flex";

  let movieSection = movie;
  const text = texts;
  const searchPage = search;

  const logoDir = {
    prime: "./static/images/amazon-prime.jpg",
    netflix: "./static/images/netflix.png",
    apple: "./static/images/appletv.png",
    hotstar: "./static/images/hotstart.webp",
    zee5: "./static/images/zee5.jpeg",
  };

  movieSection.forEach((movies) => {
    movies.addEventListener("click", (e) => {
      console.log("ji");
      const inputValue = e.target.alt;
      popularShow.classList.add("hidden");
      text.classList.add("hidden");
      searchPage.classList.add("hidden");
      $(".details-page").empty();
      $(".logo-class").empty();
      $(".popular-show").empty();

      $.ajax(detailsPageApi(inputValue)).done(function (response) {
        console.log(response);
        const movieList = response.result;
        console.log(movieList);
        let cast = "";
        let dire = "";
        let genres = "";

        movieList.cast.forEach((c) => {
          cast += c + ", ";
        });

        movieList.directors.forEach((dir) => {
          dire += dir + ", ";
        });

        movieList.genres.forEach((gen) => {
          genres += gen["name"] + ", ";
        });

        const stream = [];
        const streamPlartformLength = Object.keys(
          movieList.streamingInfo
        ).length;
        if (streamPlartformLength > 0) {
          const streamPlartform = Object.keys(movieList.streamingInfo.in);
          streamPlartform.forEach((s) => {
            stream.push(
              `<a href="${movieList.streamingInfo.in[s][0].link}"><img src="${logoDir[s]}" alt=""/></a>`
            );
          });

          $(".details-page").append(`
      

              <div class="movie-image">
          <img
            src="${movieList.posterURLs.original}"
            alt="${movieList.title}"
          />
        </div>
        <div class="movie-other-details">
          <div class="movie-titles">
            <p class="movie-title-sub">${movieList.title}</p>
            <img class="movie-start" src="./static/images/star.png" alt="" />
            <p class="movie-rating">${movieList.imdbRating / 10}</p>
            <p class="runtime">${movieList.runtime}m</p>
            <p class="movie-year">${movieList.year}</p>
          </div>
          <div class="movie-geners"><p>${genres}</p></div>
          <div class="movie-overview">
            <p>
             ${movieList.overview}
            </p>
          </div>
          <div class="actor-class">
            <div class="cast"><p>Cast</p></div>
            <div class="cast-name">
              <p>
                ${cast}
              </p>
            </div>
          </div>
          <div class="dir-class">
            <div class="dir"><p>Director</p></div>
            <div class="dir-name">
              <p>${dire}</p>
            </div>
          </div>

          <div class="watch-on">
            <p>Watch Now On</p>
            <div class="logo-class">
              
            </div>
          </div>
          <div class="trailer">
            <p class="trailer-text">Trailer</p>
            <iframe
              src="https://www.youtube.com/embed/${
                movieList.youtubeTrailerVideoId
              }"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      
      
      `);
        } else {
          $(".details-page").append(` <div class="movie-titles">
            <p class="movie-title-sub">Not Available In India</p>`);
        }
        detailsPage.style.display = "flex";
        stream.forEach((s) => {
          $(".logo-class").append(s);
        });
      });
    });
  });
}
