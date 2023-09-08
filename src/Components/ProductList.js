import { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {
  const api_url = "https://fakestoreapi.com/products";
  const [Products, setProducts] = useState([]);
  const [Categories, setGategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setGategories(data));
  };

  const getProductInCategorie = (categorie) => {
    fetch(`${api_url}/category/${categorie}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div className="container">
      <h1 className="p-4 text-center">Our Product</h1>
      {Categories.map((categorie) => {
        return (
          <button
            key={categorie}
            className="btn btn-primary me-2"
            type="submit"
            onClick={() => {getProductInCategorie(categorie)}}
          >
            {categorie}
          </button>
        );
      })}
      <div className="row">
        {Products.map((product) => {
          return (
            <div className="col-3 mt-4" key={product.id}>
              <Product Product={product} showBtn={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
