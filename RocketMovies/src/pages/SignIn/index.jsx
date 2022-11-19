import { Container, Form, Background } from './styles'

//Icons
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

//Components
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextButton } from '../../components/TextButton';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={ FiMail }/>
        <Input placeholder="Senha" type="password" icon={ FiLock }/>
        
        <Button title="Entrar" type="button" id="button-login"/>

        <TextButton title="Criar conta" id="textbutton-register"/>

      </Form>
      <Background/>
    </Container>
  )
}