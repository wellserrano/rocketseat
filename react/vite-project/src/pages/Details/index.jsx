import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'


export function Details() {
  return (
    <Container>

      <Header/>

      <main>
        <Content>
          
        <ButtonText title="Excluir nota"/>

        <h1>Introdução ao React</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor cum, maiores dignissimos voluptas error minus inventore non, voluptatibus voluptatem dolorum fugiat! Minus quibusdam illum cupiditate laudantium veritatis voluptates optio.
        </p>


        <Section title="Links úteis">
          <Links>
            <li>
              <a href="https://www.google.com/chrome/">Chrome</a>
            </li>
            <li>
              <a href="https://www.facebook.com.br/">Facebook</a>
            </li>
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tag title="React"/>
          <Tag title="NodeJS"/>
        </Section>
        
        <Button title="Voltar"/>

        </Content>
      </main>

    </Container>
  )
};