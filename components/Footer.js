import React from "react";
import StyledFooter from "./styles/Footer";
import Link from "next/link";

const Footer = () => (
  <StyledFooter>
    <ul className="footer-list">
      <li className="footer-list__item">
        <Link href="/contact-us">
          <a>Contact Us </a>
        </Link>
      </li>
      <li className="footer-list__item">
        <Link href="/partnership">
          <a>Partnership</a>
        </Link>
      </li>
      <li className="footer-list__item">
        <Link href="/sell">
          <a>Sell Online</a>
        </Link>
      </li>
      <li className="footer-list__item">
        <Link href="/termsofservice">
          <a>Terms of Service</a>
        </Link>
      </li>
    </ul>
  </StyledFooter>
);

export default Footer;
