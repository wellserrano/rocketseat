import { Container, Form, Avatar } from './styles';

//Icons
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

//Components
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <Container>
      <header>
        <a href="">
          <FiArrowLeft />
        </a>
      </header>

      <Form>

        <Avatar>
          <img src="http://github.com/wellserrano.png" alt="Imagem do usuário" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input 
              id="avatar" 
              type="file"
            />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser}/>
        <Input placeholder="E-mail" type="text" icon={FiMail}/>
        <Input placeholder="Senha atual" type="password" icon={FiLock}/>
        <Input placeholder="Nova Senha" type="password" icon={FiLock}/>

        <Button title="Salvar"/>

      </Form>
    </Container>
  )
}