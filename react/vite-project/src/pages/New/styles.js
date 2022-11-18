import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  
  width: 100%;
  height: 100vh;

  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }
  
  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const Form = styled.form`
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