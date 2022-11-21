import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  
  margin-bottom: 8px;

  background: ${ ({ theme }) => theme.COLORS.BACKGROUND_700 };
  color: ${ ({ theme }) => theme.COLORS.SAMPLE_C };

  border-radius: 10px;
  
  > input {
    width: 100%;
    height: 56px;

    padding: 16px;

    background: transparent;

    font-size: 16px;
    color: ${ ({ theme }) => theme.COLORS.SAMPLE_A };

    border: 0;

    &::placeholder {
      color: ${ ({ theme }) => theme.COLORS.SAMPLE_C };
      font-size: 16px;
    };
  };

  > svg {
    margin-left: 16px;
    font-size: 20px;
  }

`;