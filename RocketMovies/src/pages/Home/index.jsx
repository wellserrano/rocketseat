import { Container, Content, TitleAndButton } from "./styles";

import { useState, useEffect } from "react"

import { api } from "../../services/api"

import { FiPlus } from 'react-icons/fi'

import { Movie } from "../../components/Movie";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function fetchMovies() {
      const response = await api.get("/movie");
      setMovies(response.data) 

    }

    fetchMovies();

  }, []);

  return (
    <Container>

      <Header />

      <TitleAndButton>
        <h1>Meus filmes</h1>
        <Button title="Adicionar filme" icon={ FiPlus } to="/new"/>
      </TitleAndButton>

      <Content>
       {
        movies &&
        movies.map((movie, key) => (
          <Movie key={key} data={{
            title: movie.title,
            rate: movie.rating,
            description: movie.description,
            tags: movie.tags
            }}
          />
          ))
       }
       

      </Content>

    </Container>
  );
};