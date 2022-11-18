import { Container, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return (
    <Container>

      <Profile>
        <img src="https://github.com/wellserrano.png" alt="User profile picture" />
        <div>
          <span>Bem-vindo!</span>
          <strong>Wellington Serrano</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>        

    </Container>
  )
      
}