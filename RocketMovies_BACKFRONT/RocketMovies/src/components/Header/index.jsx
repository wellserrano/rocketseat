import { Container, Brand, Profile } from './styles';
import { Link } from 'react-router-dom';
import { api } from "../../services/api"

import { Children, useEffect, useState } from "react"

import { Input } from '../Input';

import { useAuth } from "../../hooks/auth"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({children}) {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Brand>RocketMovies</Brand>
      {children}
      <Profile >
        <div>
          <Link to="/profile">
            <p>Wellington Serrano</p>
          </Link>
          <Link to="/" onClick={ signOut }>sair</Link>
        </div>
        <Link to="/profile">
          <img src={ avatarUrl } alt="Imagem do usuário" />
        </Link>
      </Profile>
    </Container>
  );
};