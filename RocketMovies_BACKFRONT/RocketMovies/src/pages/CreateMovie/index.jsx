import { Container, Form } from "./styles";

import { useState } from "react"

import { api } from "../../services/api"
import { useNavigate } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { TagItem } from "../../components/TagItem";
import { TextArea } from "../../components/TextArea"
import { TextButton } from "../../components/TextButton"

export function CreateMovie() {
  const [title,       setTitle]     = useState('');
  const [rate,        setRate]      = useState('');
  const [director,    setDirector]  = useState('');
  const [year,        setYear]      = useState('');
  const [description, setDescription] = useState('');
  const [tags,        setTags]      = useState([]);
  const [newTag,      setNewTag]    = useState('');

  const navigate = useNavigate();

  function handleAddTag() {
    if (!newTag) return;

    setTags( prevState => [...prevState, newTag]);
    setNewTag('');
  }

  function handleDeleteTag(deleted) {
    setTags(prevState => prevState.filter(movie => movie !== deleted));
  }

  async function handleAddMovie() {
    const response = await api.post("/movie", {
      title,
      description,
      year,
      director,
      rating: rate
    })

    const movie_id = response.data[0]

    await api.post("/tags", {
      movie_id,
      tags
    })

    alert("Filme criado com sucesso")
    navigate("/")
  }


  function handleClearMovie() {
    setTitle('')     
    setRate('')      
    setDirector('')  
    setYear('')      
    setDescription('')
    setTags([])      
    setNewTag('')    
  }


  return (
    <Container>

      <Header />

      <Form>

        <TextButton title="Voltar" icon={ FiArrowLeft } to="/" />

        <h1>Novo filme</h1>

        <div className="input-wrapper">
          <Input 
            type="text" 
            placeholder="Título"
            value={ title }
            onChange={ e => setTitle(e.target.value) }
          />
          <Input 
            type="number" 
            placeholder="Nota (0 a 5)" 
            value={ rate }
            onChange={ e => e.target.value > 5 ? setRate('') : setRate(e.target.value) }
          />
        </div>
        <div className="input-wrapper">
          <Input 
            type="text" 
            placeholder="Diretor"
            value={ director }
            onChange={ e => setDirector(e.target.value) }
          />
          <Input 
            type="number" 
            placeholder="Ano" 
            value={ year }
            onChange={ e =>  setYear(e.target.value) }
          />
        </div>

        <TextArea 
          placeholder="Observações"
          value={ description }
          onChange={ e => setDescription(e.target.value) }
        />

        <h2>Marcadores</h2>
        <div className="tag-creator">
          {
            tags.map((tag, i) => (
              <TagItem 
              key={ String(i) }
              value={ tag }
              onClick={() => handleDeleteTag(tag) }
            />
            ))
          }
          <TagItem 
            placeholder="Novo marcador" 
            isNew
            value={ newTag }
            onChange={e => setNewTag(e.target.value)}
            onClick={ handleAddTag }
          />
        </div>

        <div className="button-wrapper">
          <Button title="Excluir filme" isDelete onClick={ handleClearMovie } />
          <Button title="Salvar alterações" onClick={ handleAddMovie } />
        </div>
      </Form>
      
    </Container>
  );
};