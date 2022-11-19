import { Container, Form, Background } from './styles'

//Icons
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

//Components
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextButton } from '../../components/TextButton';

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={ FiUser }/>
        <Input placeholder="E-mail" type="text" icon={ FiMail }/>
        <Input placeholder="Senha" type="password" icon={ FiLock }/>
        
        <Button title="Cadastrar" type="button" id="button-register"/>

        <TextButton title="Voltar para o login" icon={ FiArrowLeft } id="textbutton-back"/>

      </Form>
      <Background/>
    </Container>
  )
}