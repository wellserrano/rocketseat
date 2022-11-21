import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
    "header"
    "content";

  width: 100%;
  height: 100vh;

  color: ${ ({ theme }) => theme.COLORS.SAMPLE_A };

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
  }

`;

export const Content = styled.div`
  max-width: 950px;
  
  display: flex;
  flex-direction: column;
  
  margin: 0 auto;

  > .btn-back {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 24px;
  }

`;

export const MovieHeader = styled.div`
  .title-stars {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  
    > h1 {
      font-size: 36px;
      font-weight: 500;
      margin-right: 19px;
    }

    > svg {
      color: ${ ({ theme }) => theme.COLORS.SAMPLE_D };
      font-size: 24px;
      margin-right: 10px;
    }
  }

  .creator-time {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 42px;

    > p {
      text-align: justify;
    }
  
    > img {
      width: 16px;
      height: 16px;
  
      border-radius: 50%;
    }

  }

`;

export const TagSection = styled.div`
  margin-bottom: 40px;
`

export const MovieDetails = styled.div`
`