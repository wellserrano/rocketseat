import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 220px;

  padding: 32px;
  margin-top: 48px;

  background-color: ${ ({ theme }) => theme.COLORS.SAMPLE_F };

  border: none;
  border-radius: 16px;

  > h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${ ({ theme }) => theme.COLORS.SAMPLE_A };
  };

  > svg {
    color: ${ ({ theme }) => theme.COLORS.STAR };
  }

  .description-container {

    width: 100%;
    height: 52px;

    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    color: ${ ({ theme }) => theme.COLORS.FF_MOVIE_DESCRIPTION };
    
    span {
      width: 100%;
      font-size: 16px;
      font-weight: 400;
      
      color: ${ ({ theme }) => theme.COLORS.FF_MOVIE_DESCRIPTION };

    };

  }

  > svg {
    margin-block: 8px 15px;
  }
`;