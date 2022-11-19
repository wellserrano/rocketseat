import { Container } from './styles';

export function TextButton({ icon: Icon, title, ...rest}) {
  return (
    <Container {...rest}>
      { Icon && <Icon />}
      { title }
    </Container>
  )
}