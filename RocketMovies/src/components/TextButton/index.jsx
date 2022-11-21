import { Container, Button } from './styles';

export function TextButton({ to, icon: Icon, title, ...rest}) {
  return (
    <Container to={to}>
      <Button {...rest}>
        { Icon && <Icon />}
        { title }
      </Button>
    </Container>
  )
}