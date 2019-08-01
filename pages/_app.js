import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import Pages from "../components/Pages";
import React from "react";
import withData from "../lib/withData";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: 'montserrat';
      src: url('../static/Montserrat-Regular.woff2')
      format('woff2');
      font-style: normal;
      font-weight: normal;
  }
    html {
        font-size: 62.5%;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
    }

    * {
    box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'montserrat';
        min-height: 100vh;
        width: 100%;
    }
`;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <GlobalStyles />
        <ApolloProvider client={apollo}>
          <Pages>
            <Component {...pageProps} />
          </Pages>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
