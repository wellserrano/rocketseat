import { Container, Form, Background } from "./styles"
import { api } from "../../services/api"

//Icons
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

//Components
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton";

//Hooks
import { useState } from "react"

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos');
    };

    api.post("/user", { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso')
      })
      .catch(err => {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          console.error(err)
          alert('Não foi possível cadastrar o usuário')
        };
      })
  };


  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome" 
          type="text" 
          icon={ FiUser }
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail" 
          type="text" 
          icon={ FiMail }
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha" 
          type="password" 
          icon={ FiLock }
          onChange={e => setPassword(e.target.value)}
        />
        
        <Button 
          title="Cadastrar" 
          type="button" 
          id="button-register" 
          onClick={handleSignUp}
        />

        <TextButton title="Voltar para o login" icon={ FiArrowLeft } id="textbutton-back" to="/" />

      </Form>
      <Background/>
    </Container>
  )
}