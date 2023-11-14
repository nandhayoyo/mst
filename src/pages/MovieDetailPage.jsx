import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import { getMovieById } from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await getMovieById(id);
        setMovie(movieData);
      } catch (error) {
        console.error(`Error fetching movie with id ${id}:`, error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      <Navbar />
      <MovieDetail movie={movie} />
      <Footer />
    </div>
  );
};

export default MovieDetailPage;
