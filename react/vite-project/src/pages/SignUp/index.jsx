//Components
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

//Icons
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

//Design
import { Container, Form, Background } from './styles'

export function SignUp() {
  return (
    <Container>

      <Background/>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiLogIn}
        />

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

        <Button title="Cadastrar"/>
        <ButtonText to="/" title="Voltar" id="buttontext-main-page"/>
      </Form>


    </Container>
  )
}