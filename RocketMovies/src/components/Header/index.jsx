import { Container, Brand, Profile } from './styles';

import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      <Brand>RocketMovies</Brand>
      <Input placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <p>Wellington Serrano</p>
          <a href="/">sair</a>
        </div>
        <img src="http://github.com/wellserrano.png" alt="Imagem do usuário" />
      </Profile>
    </Container>    
  );
};