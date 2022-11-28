import { Container, Form } from "./styles";

import { useState } from "react"

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextArea } from "../../components/TextArea"
import { TextButton } from "../../components/TextButton"
import { TagItem } from "../../components/TagItem";

export function CreateMovie() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState('');

  function handleAddMovie() {
    setMovies( prevState => [...prevState, newMovie]);
    setNewMovie('');
  }

  function handleDeleteMovie() {

  }


  return (
    <Container>

      <Header />

      <Form>

        <TextButton title="Voltar" icon={ FiArrowLeft } to="/" />

        <h1>Novo filme</h1>

        <div className="input-wrapper">
          <Input placeholder="Título" />
          <Input placeholder="Nota (0 a 5)" />
        </div>

        <TextArea placeholder="Observações"/>

        <h2>Marcadores</h2>
        <div className="tag-creator">
          {
            movies.map((movie, i) => {
              <TagItem 
              key={ String(i) }
              value={ movie }
              onClick={ handleDeleteMovie }
            />
            })
          }
          <TagItem 
            placeholder="Novo marcador" 
            isNew
            value={ newMovie }
            onChange={e => setNewMovie(e.target.value)}
            onClick={ handleAddMovie }
          />
        </div>

        <div className="button-wrapper">
          <Button title="Excluir filme" isDelete/>
          <Button title="Salvar alterações"/>
        </div>
      </Form>
      
    </Container>
  );
};