import Galley from "./Galley/Galley";
import İnfo from "./info/info";
import "./ProductDetails.css"
import Thumbs from "./Thumbs/Thumbs";
import PropTypes from "prop-types";

const ProductDetails = ({ singleProduct, setSingleProduct  }) => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <div className="single-content">
            <main className="site-main">
            <Galley singleProduct={singleProduct}/>
            <İnfo singleProduct={singleProduct}/>
            </main>
          </div>
        <Thumbs singleProduct={singleProduct} setSingleProduct={setSingleProduct}/>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};