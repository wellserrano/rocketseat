import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;

  color: ${ ({ theme }) => theme.COLORS.SAMPLE_D};
  background-color: transparent;

  border: 0;


  > svg {
    font-size: 16px;
    margin-right: 8px;
  };
`;

