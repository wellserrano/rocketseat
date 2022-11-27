import { Container, Form, Background } from "./styles"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

//Icons
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

//Components
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton";

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({email, password});
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

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
          title="Entrar" 
          type="button" 
          id="button-login"
          onClick={ handleSignIn }
        />

        <TextButton title="Criar conta" id="textbutton-register" to="/register" />

      </Form>
      <Background/>
    </Container>
  )
}