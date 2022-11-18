import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  
  width: 100%;
  height: 100vh;

  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content";
  
  
`

export const Form = styled.form`
  grid-area: content;

  margin: 38px auto;

  max-width: 550px;
  height: 100vh;
  
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    font-weight: 500;

  }
`