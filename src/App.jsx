import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/global-styles";

const Container = styled.div`
  min-width: 1200px;
  height: 550px;
  background-color: blue;
  display: flex;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>App</Container>
    </>
  );
};

export default App;
