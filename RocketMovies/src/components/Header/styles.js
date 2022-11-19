import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 123px;

  width: 100%;
  height: 116px;

  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_800 };
  border-bottom: 1px solid ${ ({ theme }) => theme.COLORS.BORDER};
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  font-size: 24px;
  font-weight: 700;

  margin-right: 64px;

  color: ${ ({ theme }) => theme.COLORS.SAMPLE_D };
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 24px 0 24px 100px;

  > div {
    width: 150px;
    margin-right: 12px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
}

    p {
      font-weight: 700;
      color: ${ ({ theme }) => theme.COLORS.SAMPLE_A };
    }

    a {
      font-weight: 400;
      color: ${ ({ theme }) => theme.COLORS.SAMPLE_C };
    }
  }

  > img {
    width: 74px;
    height: 74px;
    border-radius: 50%;
  }
`;