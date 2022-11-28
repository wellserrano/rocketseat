import styled from "styled-components";

export const Container = styled.div`
  min-width: auto;
  height: 56px;

  margin: 8px 8px 8px 16px ;
  padding-block: 20px;
  padding-left: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  
  color: ${ ({ theme, isNew }) => isNew ? theme.COLORS.SAMPLE_C : theme.COLORS.SAMPLE_A };
  background-color: ${ ({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_700 };

  border-radius: 10px;

  border: ${ ({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.SAMPLE_C}` : 'none' };

  > svg {
    font-size: 24px;
    margin: 16px;

    cursor: pointer;

  }
`;