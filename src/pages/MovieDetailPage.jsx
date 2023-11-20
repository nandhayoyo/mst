// import { useState, useEffect } from "react";
// import { getMovieById } from "../services/api";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MovieDetailPage = () => {
  const { id } = useParams();
  // const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     try {
  //       const movieData = await getMovieById(id);
  //       setMovie(movieData);
  //     } catch (error) {
  //       console.error(`Error fetching movie with id ${id}:`, error);
  //     }
  //   };

  //   fetchMovie();
  // }, [id]);

  return (
    <div>
      <Navbar />
      <MovieDetail id={id} />
      <Footer />
    </div>
  );
};

export default MovieDetailPage;
