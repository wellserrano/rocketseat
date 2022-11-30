import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px 45px auto;
  grid-template-areas:
  "header"
  "title"
  "content";
`;

export const TitleAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 48px;
  padding: 0 120px;

  grid-area: title;

  > h1 {
    font-size: 32px;
    line-height: 42px;
    font-weight: 400;

    color: ${ ({ theme }) => theme.COLORS.SAMPLE_A };
  };

`;


export const Content = styled.div`
  grid-area: content;

  margin-top: 40px;
  padding: 0 120px 28px;

  overflow-y: auto;
  
`;