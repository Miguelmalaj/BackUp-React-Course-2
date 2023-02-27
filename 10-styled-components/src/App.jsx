import React, { Component } from "react";
import Button from "./components/Button/Button";
import Title from "./components/Button/Title";
import ButtonTwo from "./components/Button/ButtonTwo";
import Responsive from "./components/Responsive";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import colors from "./theming/colors";

const ButtonRounded = styled(ButtonTwo)`
  border-radius: 15px;
  transition: color, background-color 5s;
  padding: 2rem 2rem;
`

const GlobalStyle = createGlobalStyle`
  body{
    background-color  : greenyellow;
  }
`

class App extends Component {
  render() {
      return (
        <>
        <Title/>
        <GlobalStyle/>
        <ThemeProvider theme={colors}>
          <Responsive>
            <ButtonTwo >Click Me!</ButtonTwo>
            <ButtonTwo danger>Click Me!</ButtonTwo>
            <ButtonTwo ghost>Ghost Me!</ButtonTwo>
            <ButtonTwo danger ghost>Ghost Me!</ButtonTwo>
            <ButtonRounded danger ghost>Rounded</ButtonRounded>
          </Responsive>
        </ThemeProvider>
        </>
      )
    
    }
}

export default App;
