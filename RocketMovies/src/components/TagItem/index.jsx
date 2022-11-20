import { Container } from "./styles";
import {FiX, FiPlus } from 'react-icons/fi'

export function TagItem({ title, isNew=false, ...rest }) {
  return (
    <Container isNew={isNew} {...rest}>
      { title }
      { isNew ? <FiPlus /> : <FiX /> }
    </Container>
  );
};