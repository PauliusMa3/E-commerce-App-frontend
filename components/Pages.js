import React, { Component } from "react";
import Meta from "./Meta";
import styled, { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchForm from '../components/SearchForm';

const theme = {
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  lightGrey100: '#F5f5f5',
  lightGrey200: "#EEEEEE",
  grey: "#9E9E9E",
  blue: "#1E88E5",
  darkerBlue: "#187bd1",
  darkBlue: "#1A237E",
  red: "#D50000",
  lightRed: "#E53935",
  darkerRed: "#c60000",
  black: "#393939",
  maxWidth: "1300px",
  green: "#4CAF50",
  lightYellow: '#FFED85',
  yellow: '#FFD700'
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
  /* max-width: 1200px;
  margin: 0 auto; */
  flex: 1 0 auto;
  width: 100%;
  position: relative;
`;

class Pages extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Header />
          <SearchForm />
          <Meta />
          <Inner>{this.props.children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Pages;
