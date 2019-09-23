import React from "react";
import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import User from "./User";
import { Mutation } from "react-apollo";
import Signout from "./Signout";
import { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION } from "./Cart";
import { LOCAL_SEARCH_MUTATION } from "./SearchForm";
import { FaShoppingBag, FaSearch } from "react-icons/fa";

const Nav = props => (
  <User>
    {({ data: { me } }) => {
      return (
        <NavStyles expanded={props.expanded} onClick={props.onClick}>
          <Link href="/products">
            <a>Products</a>
          </Link>
          {me && (
            <>
              <Link href="/sell">
                <a>Sell</a>
              </Link>
              <Link href="/orders">
                <a>Orders</a>
              </Link>
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
              <Signout />
            </>
          )}

          {!me && (
            <>
              <Link href="/login">
                <a>Sign in</a>
              </Link>
              <Link href="/contact-us">
                <a>Contact</a>
              </Link>
            </>
          )}
        </NavStyles>
      );
    }}
  </User>
);

export default Nav;
