import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import styled from "styled-components";
import StyledHeader from "./styles/Header";
import Cart from "./Cart";
import SearchForm from "./SearchForm";

import nprogress from "nprogress";
import Router from "next/router";

// Router.onRouteChangeStart = () => {
//   nprogress.start();
// };

// Router.onRouteChangeComplete = () => {
//   nprogress.start();
// };

// Router.onRouteChangeError = () => {
//   nprogress.start();
// };

const Logo = styled.h1`
  margin-left: 2rem;
  position: relative;
  a {
    color: white;
    padding: 0.3rem 1rem;
    font-size: 3rem;
    background: red;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Tracky-Tronics</a>
        </Link>
      </Logo>
      <Nav />

      <Cart />
    </div>
    <div className="sub-bar">
      <SearchForm />
    </div>
    {/* <div className="header-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">Tracky-tronics</span>
        <span className="heading-primary--sub"> is everything you need</span>
      </h1>
      <Link href="/products">
        <a className="btn-header">Discover products</a>
      </Link>
    </div> */}
  </StyledHeader>
);

export default Header;
