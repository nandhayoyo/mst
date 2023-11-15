import axios from "axios";

const apiKey = "22d5d48";
const apiUrl = "https://www.omdbapi.com/";

export const getLatestMovies = async () => {
  try {
    let allMovies = [];
    let currentPage = 1;

    while (allMovies.length < 50) {
      const response = await axios.get(apiUrl, {
        params: {
          apikey: apiKey,
          s: "new",
          y: 2023,
          page: currentPage,
        },
      });

      if (!response.data.Search || response.data.Search.length === 0) {
        break;
      }

      allMovies = [...allMovies, ...response.data.Search];
      currentPage++;
    }

    return allMovies.slice(0, 50);
  } catch (error) {
    console.error("Error fetching latest movies:", error);
    throw error;
  }
};

export const getMovieById = async (movieId) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        apikey: apiKey,
        i: movieId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie with id ${movieId}:`, error);
    throw error;
  }
};
