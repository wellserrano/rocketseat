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
  const [title, setTitle] = useState('');
  const [grade, setGrade] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  function handleAddTag() {
    if (!newTag) return;
    
    setTags( prevState => [...prevState, newTag]);
    setNewTag('');
  }

  function handleDeleteTag(deleted) {
    setTags(prevState => prevState.filter(movie => movie !== deleted));
  }

  function handleAddMovie() {

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
            value={ grade }
            onChange={ e => e.target.value > 5 ? setGrade('') : setGrade(e.target.value) }
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
          <Button title="Excluir filme" isDelete/>
          <Button title="Salvar alterações" onClick={ handleAddMovie }/>
        </div>
      </Form>
      
    </Container>
  );
};