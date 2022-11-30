import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;
  
  padding: 16px;

  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_700 };
  color: ${ ({ theme }) => theme.COLORS.SAMPLE_A };

  border: none;
  border-radius: 10px;

  resize: none;

  &::placeholder {
    color: ${ ({ theme }) => theme.COLORS.SAMPLE_C };
  }
`;