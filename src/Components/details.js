import { useEffect, useState } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";

function Details() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${api_url}/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  return (
    <>
    <Product Product={product} showBtn = {false} />
    </>
  );
}

export default Details;
