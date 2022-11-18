import { Container } from './styles';

export function Input({icon: Icon, ...rest}) {
  return (
    <Container>
      {Icon && <Icon syze={20}/>}
      <input {...rest} />
    </Container>
  )
}