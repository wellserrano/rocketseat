import { Container } from './styles';

export function Button({isDelete=false, icon: Icon, title, ...rest}) {
  return (
    <Container isDelete={isDelete} {...rest}>
      {Icon && <Icon />}
      { title }
    </Container>  
  );
}