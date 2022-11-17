import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

//Components
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';

//Icons
import { FiPlus, FiSearch } from 'react-icons/fi';

export function Home() {
  return (
    <Container>

      <Brand>
        Rocketseat
      </Brand>

      <Header/>

      <Menu>

        <li>
          <ButtonText title="Fligro" isActive/>
        </li>
        <li>
          <ButtonText title="Tramólha" />
        </li>
        <li>
          <ButtonText title="Passáro Neves" />
        </li>

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas notas">
        <Note data={
          
          {
            title: 'Alerolerolanche',
            tags: [
              {
                id: 1,
                name: 'MacDemargo'
              },
              {
                id: 2,
                name: 'Papiro Nova Guiné'
              }
            ]
          }
          
        }/>
        </Section>
      </Content>

      <NewNote>
        <FiPlus/>
        Criar nota
      </NewNote>

    </Container>
  )
}