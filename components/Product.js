import React from "react";
import SingleProductStyles from "../components/styles/SingleProductStyles";
import ProductTitle from "../components/styles/ProductTitle";
import Link from "next/link";
import formatCurrency from "./utils/formatCurrency";
import DeleteItem from "./DeleteItem";
import AddToCart from "./AddToCart";

const Product = ({ product, hasPermissions }) => {
  return (
    <SingleProductStyles>
      {product.image && <img src={product.image} alt={product.title} />}
      <ProductTitle>
        <Link href={{ pathname: "/product", query: { id: product.id } }}>
          <a>{product.title}</a>
        </Link>
      </ProductTitle>
      <span className="product-price">{formatCurrency(product.price)}</span>
      {hasPermissions ? (
        <DeleteItem id={product.id} className="delete-button" />
      ) : null}
      <AddToCart id={product.id} />
    </SingleProductStyles>
  );
};

export default Product;
