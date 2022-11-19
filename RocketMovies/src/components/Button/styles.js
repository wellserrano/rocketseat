import styled from "styled-components";

export const Container = styled.button`
  width: 340px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${ ({ theme }) => theme.COLORS.SAMPLE_D };
  border: none;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: ${ ({ theme }) => theme.COLORS.SAMPLE_E };

`;