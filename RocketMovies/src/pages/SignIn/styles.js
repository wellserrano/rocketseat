import styled from "styled-components";
import background from "../../assets/home-background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  `;

export const Form = styled.form`
  padding: 30px 160px;

  > h1 {
    font-size: 48px;
    font-weight: 700;

    color: ${ ({ theme }) => theme.COLORS.SAMPLE_D };
  };

  > p {
    font-size: 14px;
    font-weight: 400;

    color: ${ ({ theme }) => theme.COLORS.SAMPLE_B };

    margin-bottom: 48px;
  };

  > h2 {
    font-size: 24px;
    font-weight: 500;

    color: ${ ({ theme }) => theme.COLORS.SAMPLE_A };

    margin-bottom: 48px;
    padding-left: 7px;

  };

  #button-login {
    margin-top: 24px;
  };

  #textbutton-register {
    padding: 0 auto;
    margin-top: 42px;
  };
`;

export const Background = styled.div`
  flex: 1;
  background: url(${ background }) no-repeat center center;
  background-size: cover;

  height: 100vh;
`;
