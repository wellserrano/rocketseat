import { Container, Form } from './styles';

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { TextArea } from '../../components/TextArea'

export function New() {
  return (
    <Container>
      <Header/>
      <main>

        <Form>
          
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="voltar"/>
          </header>
          
          <Input type="text" placeholder="Título"/>
          <TextArea placeholder="Observações"/>
        </Form>

      </main>
    </Container>
  )
}