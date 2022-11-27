import { Container, Brand, Profile } from './styles';
import { Link } from 'react-router-dom';

import { Input } from '../Input';

import { useAuth } from "../../hooks/auth"

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Brand>RocketMovies</Brand>
      <Input placeholder="Pesquisar pelo título" />
      <Profile >
        <div>
          <Link to="/profile">
            <p>Wellington Serrano</p>
          </Link>
          <Link to="/" onClick={ signOut }>sair</Link>
        </div>
        <Link to="/profile">
          <img src="http://github.com/wellserrano.png" alt="Imagem do usuário" />
        </Link>
      </Profile>
    </Container>
  );
};