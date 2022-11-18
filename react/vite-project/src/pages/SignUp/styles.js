import styled from "styled-components";

//Images
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  
  
  `;

export const Form = styled.form`
  padding: 0 136px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  > h1 {
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  };
  
  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  };

  > h2 {
    margin: 48px 0;
    color: ${({ theme }) => theme.COLORS.WHITE};

  };

  > #buttontext-main-page {
    margin-top: 124px;
  };

`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  
  height: 100vh;
`;