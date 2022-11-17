import { Container, Form } from './styles'
import { Input } from '../../components/Input';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu login</h2>
        <Input
          type="text"
          placeholder="E-mail"
        />
      </Form>

    </Container>
  )
}