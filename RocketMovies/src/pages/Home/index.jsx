import { Container, Content, TitleAndButton } from "./styles";

import { useState, useEffect } from "react"

import { api } from "../../services/api"
import { useNavigate } from "react-router-dom";

import { FiPlus } from 'react-icons/fi'

import { Movie } from "../../components/Movie";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);
  
  const navigate = useNavigate();

  function toMovie(id) {
    navigate(`/details?id=${id}`)
  }

  useEffect(() => {

    async function fetchMovies() {
      const response = await api.get(`/movie?like=${search}`);
      setMovies(response.data) 

    }

    fetchMovies();

  }, [search]);


  return (
    <Container>

      <Header >
        <Input placeholder="Pesquisar pelo título" onChange={ e => setSearch(e.target.value) }/>
      </Header>

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
            onClick={() => toMovie(movie.id) }
          />
          ))
       }
       

      </Content>

    </Container>
  );
};