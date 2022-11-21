import { Container, ButtonCreator } from './styles';

export function Button({isDelete=false, icon: Icon, title, ...rest}) {
  return (
    <Container  {...rest}>
      <ButtonCreator isDelete={isDelete}>
        {Icon && <Icon />}
        { title }
      </ButtonCreator>
    </Container>  
  );
}