import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG; 

const MovieCard = ({movie, showLink = true}) => { 
  return <div className="movie-card">

    {/*'movie.poster_path' é o caminho específico do poster do filme. */}
    <img src={imageUrl + movie.poster_path} alt={movie.title} />
    <h2>{movie.title}</h2>
    <p>
      {/* Avaliação do filme */}
      <FaStar /> {movie.vote_average}
    </p>

    {/* Verificando se showLink e verdadeira se for, executar o codigo, depois ir pra pagina */}
    {showLink && <Link to={`/movie/${movie.id}`}>Detalhes </Link>}
  </div>
}

export default MovieCard; 