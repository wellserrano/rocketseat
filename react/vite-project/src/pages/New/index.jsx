import { Container, Form } from './styles';

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

export function New() {
  return (
    <Container>
      <Header/>
      <main>

        <Form>
          
          <header>
            <h1>Criar nota</h1>
            <ButtonText to="/" title="voltar"/>
          </header>
          
          <Input type="text" placeholder="Título"/>
          <TextArea placeholder="Observações"/>

          <Section title="Links úteis"/>
          <NoteItem value="http://google.com.br"/>
          <NoteItem isNew />

          <Section title="Marcadores"/>
          <div className="tags">
            <NoteItem value="react"/>
            <NoteItem isNew value="Nova tag"/>
          </div>

          <Button title="Salvar"/>
        </Form>

      </main>
    </Container>
  )
}