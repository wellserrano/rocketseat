import styled from "styled-components";

export const Container = styled.div`
  min-width: auto;
  height: 56px;

  margin: 8px 8px 8px 16px ;
  padding: 20px 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  
  background-color: ${ ({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_700 };

  border-radius: 10px;

  border: ${ ({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.SAMPLE_C}` : 'none' };

  > input {
    width: 100%;
    height: 56px;
    
    padding: 12px;

    color: ${ ({ theme, isNew }) => isNew ? theme.COLORS.SAMPLE_C : theme.COLORS.SAMPLE_A };

    background: transparent;
    border: none;

    &::placeholder {
      color: ${ ({ theme }) => theme.COLORS.SAMPLE_D };
    }
  };

  > button {
    border: none;
    background: none;
  }

  .button-add {
    color: ${ ({ theme }) => theme.COLORS.SAMPLE_A }
  }

  .button-delete {
    color: ${ ({ theme }) => theme.COLORS.SAMPLE_D }
  }


`;