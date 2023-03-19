import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./productsData";

function ProductDetail() {
  const { productId } = useParams();
  const thisProduct = productsData.find((prod) => prod.Title === productId);

  return (
    <div>
      <h1>{thisProduct.Title}</h1>
      <p>Price: ${thisProduct.Director}</p>
      <p>{thisProduct.description}</p>
    </div>
  );
}

export default ProductDetail;
