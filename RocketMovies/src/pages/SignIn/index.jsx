import { Container, Form, Background } from './styles'

//Icons
import { FiMail, FiLock } from 'react-icons/fi';

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

        <h2>Crie sua conta</h2>

        <Input placeholder="E-mail" type="text" icon={ FiMail }/>
        <Input placeholder="Senha" type="password" icon={ FiLock}/>
        
        <Button title="Entrar" type="button"/>

        <TextButton title="Criar conta" id="textbutton-back"/>
      </Form>
      <Background/>
    </Container>
  )
}