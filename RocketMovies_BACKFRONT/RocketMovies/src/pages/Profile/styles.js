import styled from "styled-components";

const imageSize = 190;

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;

    padding: 0 144px;
    
    background-color: ${ ({ theme }) => theme.COLORS.SAMPLE_F };

    svg {
      color: ${ ({ theme }) => theme.COLORS.SAMPLE_C };
      font-size: 16px;
    }
  }
`;

export const Avatar = styled.div`
  position: relative;

  margin: 0 auto 32px;

  width: ${ imageSize }px;
  height: ${ imageSize }px;

  > img {
    width: ${ imageSize }px;
    height: ${ imageSize }px;

    border-radius: 50%;
  };

  > label {
    width: 55px;
    height: 55px;

    position: absolute;
    bottom: 2px;
    right: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background-color: ${ ({ theme }) => theme.COLORS.SAMPLE_D };

    cursor: pointer;

    > input {
      display: none;
    }

    > svg {
      width: 20px;
      height: 20px;
      color: ${ ({ theme }) => theme.COLORS.SAMPLE_E };
    }
  };

`;

export const Form = styled.form`
  max-width: 340px;

  margin: -${ imageSize/2 }px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }

  > button {
    margin-top: 24px;
  }
`;