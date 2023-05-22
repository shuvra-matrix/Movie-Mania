function indexPage() {
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
  return settings;
}

function searchPageApi(inputValue) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://streaming-availability.p.rapidapi.com/v2/search/title?title=${inputValue}&country=in&show_type=movie&output_language=en`,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "560c4ba83emsh373aa6eae5f9a4cp1d9f47jsn945b444dcdb5",
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
      "X-RapidAPI-Key": "560c4ba83emsh373aa6eae5f9a4cp1d9f47jsn945b444dcdb5",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };
  return settings;
}
