import { Container, Brand, Profile } from './styles';
import { Link } from 'react-router-dom';

import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      <Brand>RocketMovies</Brand>
      <Input placeholder="Pesquisar pelo título" />
      <Profile >
        <div>
          <p>Wellington Serrano</p>
          <Link to="/fff">sair</Link>
        </div>
        <Link to="/profile">
          <img src="http://github.com/wellserrano.png" alt="Imagem do usuário" />
        </Link>
      </Profile>
    </Container>    
  );
};