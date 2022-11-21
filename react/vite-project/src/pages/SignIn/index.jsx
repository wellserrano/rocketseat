//Components
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

//Icons
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

//Design
import { Container, Form, Background } from './styles'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar"/>
        <ButtonText 
         to="/register" 
         title="Criar conta" 
         id="buttontext-main-page"
        />
      </Form>


      <Background/>
    </Container>
  )
}