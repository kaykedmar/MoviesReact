import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

// URL base para a API de filmes obtida das variáveis de ambiente
const moviesURL = import.meta.env.VITE_API;

// Chave de API obtida das variáveis de ambiente
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  // Estado para armazenar os principais filmes
  const [topMovies, setTopMovies] = useState([]);

  // Função assíncrona para obter os filmes mais bem avaliados a partir da API
  const getTopRatedMovies = async (url) => {
    // Realiza uma requisição à API
    const response = await fetch(url);

    // Transforma a resposta em formato JSON
    const data = await response.json();

    // Atualiza o estado com os resultados dos filmes mais bem avaliados
    setTopMovies(data.results);
  };

  // Chamando a função ao carregar a página
  useEffect(() => {
    // Constrói a URL para obter os filmes mais bem avaliados
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    // Chama a função para obter os filmes mais bem avaliados
    getTopRatedMovies(topRatedUrl);
  }, []);

  // Componente renderizado
  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>

      <div className="movies-container">
        {/* Se topMovies nao tiver:*/}
        {topMovies.length === 0 && <p>Carregando...</p>}

        {/* se os topMovies estivem preenchidos. */}
        {topMovies.length &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
