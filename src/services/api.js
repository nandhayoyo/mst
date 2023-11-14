import axios from "axios";

const apiKey = "22d5d48";
const apiUrl = "http://www.omdbapi.com/";

export const getLatestMovies = async () => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        apikey: apiKey,
        s: "new",
      },
    });
    return response.data.Search;
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
