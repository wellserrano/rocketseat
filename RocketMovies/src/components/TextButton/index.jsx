import { Container, Button } from './styles';

export function TextButton({ icon: Icon, title, ...rest}) {
  return (
    <Container>
      <Button {...rest}>
        { Icon && <Icon />}
        { title }
      </Button>
    </Container>
  )
}