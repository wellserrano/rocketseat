import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

  background: ${ ({ theme }) => theme.COLORS.BACKGROUND_800 };
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;

  grid-area: brand;

  font-size: 24px;

  width: 250px;
  padding-block: 39px;
  border-bottom: 1px solid ${ ({ theme }) => theme.COLORS.BACKGROUND_700 };

  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900 };
  color: ${ ({ theme }) => theme.COLORS.ORANGE };

`;

export const Menu = styled.ul`
  grid-area: menu;

  padding: 64px;

  text-align: center;
  
  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900 };

  list-style: none;

  > li {
    margin-bottom: 24px;
  }

`;

export const Search  = styled.div`
  grid-area: search;

  padding: 64px;

` 

export const Content = styled.div`
  grid-area: content;

  padding: 0 64px;
  overflow-y: auto;

` 

export const NewNote = styled(Link)`
  grid-area: newnote;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${ ({ theme }) => theme.COLORS.ORANGE };
  color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900 };

  text-align: center;
  font-size: 14px;

  border: none;

  svg {
    margin-right: 8px;
  }



`