import React from "react";
import SingleProductStyles from "../components/styles/SingleProductStyles";
import ProductTitle from "../components/styles/ProductTitle";
import Link from "next/link";
import formatCurrency from "./utils/formatCurrency";
import DeleteItem from "./DeleteItem";
import { FaEdit } from "react-icons/fa";
import AddToCart from "./AddToCart";
import checkPermissions from "./utils/checkPermissions";

const Product = ({ product, user }) => {
  return (
    <SingleProductStyles>
      {product.image && <img src={product.image} alt={product.title} />}
      <ProductTitle>
        <Link href={{ pathname: "/product", query: { id: product.id } }}>
          <a>{product.title}</a>
        </Link>
      </ProductTitle>
      <span className="product-price">{formatCurrency(product.price)}</span>
      {/* {checkPermissions(user, product, ["ADMIN", "ITEMDELETE"]) && (
        <DeleteItem id={product.id} className="delete-button" />
      )} */}
      {user && (
        <Link
          href={{
            pathname: "/edit",
            query: {
              id: product.id
            }
          }}
        >
          <FaEdit
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "10",
              left: "10",
              visibility: `${
                checkPermissions(user, product, ["ADMIN", "ITEMUPDATE"])
                  ? "visible"
                  : "hidden"
              }`
            }}
            size={20}
          />
        </Link>
      )}
      <AddToCart id={product.id} />
    </SingleProductStyles>
  );
};

export default Product;
