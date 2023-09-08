import { Link } from "react-router-dom";

function Product(product) {
    const {Product, showBtn} = product;
    
  return (
    <div className="card">
      <img src={Product.image} className="card-img-top" alt={Product.id} />
      <div className="card-body">
        <h5 className="card-title">{Product.name}</h5>
        <p className="card-text">
          {Product.description}
        </p>
        {showBtn && <Link to={`products/${Product.id}`} className="btn btn-primary">
          Details
        </Link>}
      </div>
    </div>
  );
}

export default Product;
