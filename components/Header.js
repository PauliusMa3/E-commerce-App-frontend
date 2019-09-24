import React, { useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import styled from "styled-components";
import StyledHeader from "./styles/Header";
import Cart from "./Cart";
import SearchForm from "./SearchForm";
import MenuIcon from "../static/icons/menu.svg";
import { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION } from "./Cart";
import { Mutation } from "react-apollo";
import { LOCAL_SEARCH_MUTATION } from "./SearchForm";
import { FaShoppingBag, FaSearch } from "react-icons/fa";

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

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link href="/">
            <a>Tracky-Tronics</a>
          </Link>
        </Logo>

        <img
          src={MenuIcon}
          className="menu-icon"
          onClick={() => setToggleMenu(!toggleMenu)}
        />

        <Nav
          expanded={toggleMenu}
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        />

        <div className='header-icons'>
          <Mutation mutation={LOCAL_SEARCH_MUTATION}>
            {toggleSearchOpen => (
              <FaSearch
                onClick={toggleSearchOpen}
                size={80}
                style={{
                  color: "#393939",
                  padding: "3rem 1rem",
                  cursor: "pointer"
                }}
              />
            )}
          </Mutation>

          <Mutation mutation={TOGGLE_CART_MUTATION}>
            {toggleCartOpen => (
              <FaShoppingBag
                onClick={toggleCartOpen}
                size={80}
                style={{
                  color: "#393939",
                  padding: "3rem 1rem",
                  cursor: "pointer"
                }}
              />
            )}
          </Mutation>
        </div>

        <Cart />
      </div>
      {/* <div className="sub-bar">
        <SearchForm />
      </div> */}
    </StyledHeader>
  );
};

export default Header;
