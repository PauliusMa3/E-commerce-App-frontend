import React from "react";
import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import User from "./User";
import Signout from "./Signout";


const Nav = props => (
  <User>
    {({ data: { me } }) => {
      return (
        <NavStyles expanded={props.expanded} onClick={props.onClick}>
          <Link href="/products">
            <a>Shop</a>
          </Link>
          {me && (
            <>
              <Link href="/sell">
                <a>Sell</a>
              </Link>
              <Link href="/orders">
                <a>Orders</a>
              </Link>
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
