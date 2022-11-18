import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;

  height: 24px;

  color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${ ({ theme }) => theme.COLORS.ORANGE };
  

  padding: 5px 14px;
  margin-right: 6px;

  border-radius: 5px;

  align-items: center;

`;