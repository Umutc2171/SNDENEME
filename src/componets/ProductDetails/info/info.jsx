import PropTypes from "prop-types";
import "./info.css";

const Info = ({ singleProduct }) => {
  const originalPrice = singleProduct.price.current;
  const discountPercentage = singleProduct.price.discount;

  // İndirimli fiyatı hesaplama
  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;

 
  return (
    <div className="product-info">
      <h1 className="product-title">{singleProduct.name}</h1>
      <div className="product-review">
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
        <span></span>
      </div>
      <div className="product-price">
        <strong className="new-price">{discountedPrice.toFixed(2)}₺</strong>
        <s className="old-price">${originalPrice.toFixed(2)}</s> 
      </div>
      <div
        className="product-description">
         <p>› İşçiliğimize ve Malımızın Kalitesine Güveniyoruz.%100</p>
        <p>› Cepten ve İnternetten 7/24 İzleyebilme.</p>
         <p>› Ürünlerimiz 2 Yıl Garantilidir.</p>
        </div>
      <form className="variations-form">
        <div className="variations">
          <div className="cart-button">
            <a href="tel:539-672-13-72"
              className="btn btn-lg btn-primary"
              id="add-to-cart"
              type="button"
            >
             Satın Al
            </a>
          </div>        
        </div>
      </form>
      <div className="divider"></div>
      <div className="product-meta">
      </div>
    </div>
  );
};

export default Info;

Info.propTypes = {
  singleProduct: PropTypes.object,
};