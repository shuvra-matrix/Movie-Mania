function details(movie, texts, search) {
  let movieSection = movie;
  const text = texts;
  const searchPage = search;

  const logoDir = {
    prime: "./static/images/amazon-prime.jpg",
    netflix: "./static/images/netflix.png",
    apple: "./static/images/appletv.png",
    hotstar: "./static/images/hotstart.webp",
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
      const settings = {
        async: true,
        crossDomain: true,
        url: `https://streaming-availability.p.rapidapi.com/v2/search/title?title=${inputValue}&country=in&show_type=movie&output_language=en`,
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "53db47703bmsh43337a6ff98140ep1d9019jsnfa4b3f6ce92b",
          "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
        },
      };

      $.ajax(settings).done(function (response) {
        console.log(response);
        const movieList = response.result[0];
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
        const streamPlartform = Object.keys(movieList.streamingInfo.in);
        streamPlartform.forEach((s) => {
          stream.push(
            `<a href="${movieList.streamingInfo.in[s][0].link}"><img src="${logoDir[s]}" alt=""/></a>`
          );
        });

        console.log(stream);

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
        stream.forEach((s) => {
          $(".logo-class").append(s);
        });
      });
    });
  });
}
