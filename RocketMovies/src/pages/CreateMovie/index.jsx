import { Container, Form } from "./styles";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextArea } from "../../components/TextArea"
import { TextButton } from "../../components/TextButton"
import { TagItem } from "../../components/TagItem";

export function CreateMovie() {
  return (
    <Container>

      <Header />

      <Form>

        <TextButton title="Voltar" icon={ FiArrowLeft } />

        <h1>Novo filme</h1>

        <div className="input-wrapper">
          <Input placeholder="Título" />
          <Input placeholder="Nota (0 a 5)" />
        </div>

        <TextArea placeholder="Observações"/>

        <h2>Marcadores</h2>
        <div className="tag-creator">
          <TagItem/>
        </div>

        <div className="button-wrapper">
          <Button title="Excluir filme"/>
          <Button title="Salvar alterações"/>
        </div>
      </Form>
      
    </Container>
  );
};