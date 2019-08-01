import React, { Component } from "react";
import Meta from "./Meta";
import styled, { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const theme = {
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  lightGrey200: "#EEEEEE",
  grey: "#9E9E9E",
  blue: "#1E88E5",
  darkBlue: "#1A237E",
  red: "#D50000",
  lightRed: "#E53935",
  black: "#393939",
  maxWidth: "1300px",
  green: "#4CAF50"
};

const StyledPage = styled.div`
  color: ${props => props.theme.black};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  flex: 1 0 auto;
  width: 100%;
`;

class Pages extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Header />
          <Meta />
          <Inner>{this.props.children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Pages;
