import { Container, Form, Avatar } from "./styles";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

//Components
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton"

//Icons
import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      old_password: passwordOld,
      new_passowrd: passwordNew,
    }

    await updateProfile({user, avatarFile});
  }

  async function handleAvatarChange(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);

  }



  return (
    <Container>
      <header>
        <TextButton title="Voltar" icon={ FiArrowLeft } to="/" />
      </header>
      <Form>

        <Avatar>
          <img src={ avatar } alt="Imagem do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input 
              id="avatar" 
              type="file" 
              onChange={ handleAvatarChange }
            />
          </label>
        </Avatar>

        <Input 
          type="text" 
          value={ name } 
          placeholder="Nome" 
          icon={ FiUser }
          onChange={e => setName(e.target.value)}
        />
        <Input 
          type="text" 
          value={ email } 
          placeholder="E-mail" 
          icon={ FiMail }
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Senha atual" 
          icon={ FiLock }
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Nova senha" 
          icon={ FiLock }
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button 
          type="button" 
          title="Salvar"
          onClick={ handleUpdate }
        />

      </Form>
    </Container>
  )
};

