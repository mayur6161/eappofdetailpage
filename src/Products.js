import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";

const Products = () => {
  const products = productsData.map(product => {
    return (
      <div key={product.Title}>
        <h3>
          <Link to={`/products/${product.Title}`}>{product.Year}</Link>
        </h3>
        <p>Price: ${product.Year}</p>
        <hr />
      </div>
    );
  });

  return (
    <>
      <h1>Products Page</h1>
      {products}
    </>
  );
};

export default Products;