import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

//Components
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText'

//Icons
import { FiPlus } from 'react-icons/fi'

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
      </Search>

      <Content>
      </Content>

      <NewNote>
        <FiPlus/>
        Criar nota
      </NewNote>

    </Container>
  )
}