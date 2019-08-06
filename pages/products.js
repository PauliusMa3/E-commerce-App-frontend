import React from "react";
import Products from "../components/Products";

const ProductsPage = props => (
  <Products page={parseFloat(props.query.page) || 1} />
);

export default ProductsPage;
