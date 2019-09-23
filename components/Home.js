import React from "react";
import Image from "../assets/images/HomePage.jpg";
import styled from "styled-components";
import Link from "next/link";
import ProductHero from "../assets/images/product-hero-iphone.jpg";

const Wrapper = styled.div`
  margin-top: 100px;
  .image__section {
    margin: 0;
    width: 100%;
    height: 90vh;
    display: block;
    position: relative;

    p {
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      font-size: 3rem;
      text-align: center;
      color: ${props => props.theme.offWhite};
    }

    a {
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      font-size: 3rem;
      border-radius: 5px;
      color: ${props => props.theme.offWhite};
      background: ${props => props.theme.red};
      padding: 1rem 3rem;
      text-decoration: none;
      transition: all 0.4s;

      &:hover {
        background: ${props => props.theme.darkerRed};
      }
    }

    &::before {
      position: absolute;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.4);
      content: "";
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product__hero {
    
    max-width: 900px;
    margin: 100px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 500px;
    grid-gap: 30px;
    align-items: center;
    padding: 15px;

    p {
      font-size: 1.8rem;
      line-height: 1.4;
    }

    .copy__wrapper {
      h2 {
        font-size: 2rem;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Home = () => (
  <Wrapper>
    <section className="image__section">
      <img src={Image} />
      <p>Find the latest technology Products</p>
      <Link href="/products">
        <a>Shop</a>
      </Link>
    </section>
    <section className="product__hero">
      <img src={ProductHero} />
      <div className="copy__wrapper">
        <h2>The product to inpire and go beyond...</h2>
        <p>
          Get the perfect shot in just one take. The iPhone Xs Max has a
          TrueDepth camera that can make advanced adjustments to background and
          lighting even after you've taken the photo. Hone your skills in
          Portrait Mode, with options like advanced bokeh and depth control that
          place more emphasis on your subject. With dual rear wide-angle and
          telephoto 12 MP cameras, you're free to express your creativity
          without limits. Clever AR features like facial landmarking apply
          creative effects that make your images stand out. Take stunning
          panoramic shots of the majestic landscape, capture that
          perfectly-timed action shot with zero shutter lag, and balance colours
          with Smart HDR for the most clear and colourful results.{" "}
        </p>
      </div>
    </section>
  </Wrapper>
);

export default Home;
