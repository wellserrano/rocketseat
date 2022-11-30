import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

`;

export const Form = styled.form`
  padding: 40px 123px 80px;

  > a {
    width: 100%;
    justify-content: flex-start;
  }
  
  > h1 {
    margin-top: 24px;
    color: ${ ({ theme }) => theme.COLORS.SAMPLE_A }
  }

  > h2 {
    color: ${ ({ theme }) => theme.COLORS.FF_MOVIE_DESCRIPTION };
  }

  > .input-wrapper:first-of-type {
    margin-block: 40px 15px;
  }

  .input-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 40px;
  }

  > textarea {
    margin-bottom: 40px;
  }

  .tag-creator {
    min-height: 90px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;

    padding: 10px 4px;

    background-color: ${ ({ theme }) => theme.COLORS.DARK };

    margin-block: 24px 40px;

    border: none;
    border-radius: 8px;
  };

  .button-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 10px;

  }
`;
