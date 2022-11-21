import styled from "styled-components";

export const Container = styled.span`
  width: 100%;
  height: 24px;

  padding: 5px 16px;
  margin-right: 8px;

  border-radius: 8px;

  font-size: 12px;
  color: ${ ({ theme }) => theme.COLORS.FF_TAG };

  background-color: ${ ({ theme }) => theme.COLORS.SAMPLE_E };
`;