import { Container, Form, Avatar } from "./styles";

//Components
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton"

//Icons
import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi';

export function Profile() {
  return (
    <Container>
      <header>
        <TextButton title="Voltar" icon={ FiArrowLeft }/>
      </header>
      <Form>

        <Avatar>
          <img src="http://www.github.com/wellserrano.png" alt="Imagem do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input type="text" value="Wellington Serrano" icon={ FiUser }/>
        <Input type="text" value="well.serrano@yahoo.com.br" icon={ FiMail }/>
        <Input type="password" placeholder="Senha atual" icon={ FiLock }/>
        <Input type="password" placeholder="Nova senha" icon={ FiLock }/>

        <Button type="button" title="Salvar"/>

      </Form>
    </Container>
  )
};

