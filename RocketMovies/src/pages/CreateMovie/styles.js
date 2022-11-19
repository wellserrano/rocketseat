import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > form > div:first-child {
    width: 100%;
    justify-content: flex-start;
  }

`;

export const Form = styled.form`
  padding: 40px 123px 80px;
  
  > h1 {
    margin-top: 24px;
    color: ${ ({ theme }) => theme.COLORS.SAMPLE_A }
  }

  > h2 {
    color: ${ ({ theme }) => theme.COLORS.FF_MOVIE_DESCRIPTION };
  }

  .input-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin-block: 40px;
  }

  > textarea {
    margin-bottom: 40px;
  }

  .tag-creator {
    width: 100%;
    min-height: 90px;
    background-color: ${ ({ theme }) => theme.COLORS.DARK };

    margin-block: 24px 40px;

    border: none;
    border-radius: 8px;
  };

  .button-wrapper {
    background-color: red;
    display: flex;
    justify-content: space-between;
    gap: 10px;

  }
`;
