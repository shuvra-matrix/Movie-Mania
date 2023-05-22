function indexPage() {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://imdb-top-100-movies.p.rapidapi.com/",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a1408669c6msh81873aaa94d74b0p1575dfjsn0bf62c16c6fa",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };
  return settings;
}

function searchPageApi(inputValue) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://streaming-availability.p.rapidapi.com/v2/search/title?title=${inputValue}&country=in&show_type=movie&output_language=en`,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a1408669c6msh81873aaa94d74b0p1575dfjsn0bf62c16c6fa",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };
  return settings;
}

function detailsPageApi(inputValue) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://streaming-availability.p.rapidapi.com/v2/get/basic?country=in&imdb_id=${inputValue}&output_language=en`,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a1408669c6msh81873aaa94d74b0p1575dfjsn0bf62c16c6fa",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };
  return settings;
}
