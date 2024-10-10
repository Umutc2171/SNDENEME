import Proptypes from "prop-types";
import "./ProductItem.css";
import { Link } from "react-router-dom";

export const ProductItem = ({ productItem }) => {


  const originalPrice = productItem.price.current;
  const discountPercentage = productItem.price.discount;

  // İndirimli fiyatı hesaplama
  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;


  return (
    <div className="product-item">
      <div className="product-image">
        <Link to={`/product/${productItem._id}`} className="product-link">
          <img src={productItem.img[0]} alt="" className="img1" />
          <img src={productItem.img[1]} alt="" className="img" />
        </Link>
      </div>

      <div className="product-info">
      <span href="$" className="product-title">
      <Link to={`/product/${productItem._id}`} className="product-link">

          {productItem.name}
          </Link>
          
        </span>
       
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">{discountedPrice.toFixed(2)}₺</strong>
          <span className="old-price">{originalPrice.toFixed(2)}₺</span> 
        </div>
     
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  productItem: Proptypes.object,
  setCartItems: Proptypes.func,
};
