import React from "react";
import Image from "../assets/images/HomePage.jpg";
import Link from "next/link";
import HomeStyles from './styles/HomeStyles';
import ProductHero from "../assets/images/product-hero-iphone.jpg";

const Home = () => (
  <HomeStyles>
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
  </HomeStyles>
);

export default Home;
