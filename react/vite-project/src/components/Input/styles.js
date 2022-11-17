import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900 };
  color: ${ ({ theme }) => theme.COLORS.GRAY_300 };

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    font: 16px;

    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${ ({ theme }) => theme.COLORS.WHITE };
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${ ({ theme }) => theme.COLORS.GRAY_300 };
      font-size: 16px;
    };
  }

  > svg {
    margin-left: 16px;

  }
`