import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonCreator = styled.button`
  width: 340px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;

  background-color: ${ ({ theme, isDelete }) => isDelete ? theme.COLORS.DARK : theme.COLORS.SAMPLE_D };
  border: none;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: ${ ({ theme, isDelete }) => isDelete ? theme.COLORS.SAMPLE_D : theme.COLORS.SAMPLE_E };

  svg {
    color: ${ ({ theme }) => theme.COLORS.BACKGROUND_800 };
    margin-right: 10px;
  }
`;

export const Container = styled(Link)``;