import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { message } from "antd";
import { ProductItem } from "../Produtcs/ProductItem.jsx";
import "./CategoryProducts.css";

const CategoryDetails = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  function NextBtn({ onClick }) {
    return (
      <button className="glide__arrow glide__arrow--right" onClick={onClick}>
        <i className="bi bi-chevron-right"></i>
      </button>
    );
  }
  
  NextBtn.propTypes = {
    onClick: PropTypes.func,
  };
  
  function PrevBtn({ onClick }) {
    return (
      <button className="glide__arrow glide__arrow--left" onClick={onClick}>
        <i className="bi bi-chevron-left"></i>
      </button>
    );
  }
  
  PrevBtn.propTypes = {
    onClick: PropTypes.func,
  };
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/category/${categoryId}`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };

    if (categoryId) {
      fetchProductsByCategory();
    }
  }, [apiUrl, categoryId]);

    const sliderSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 4, 
      slidesToScroll: 1,
      nextArrow: <NextBtn />,
      prevArrow: <PrevBtn />,
      autoplaySpeed: 3000,
      autoplay: true,
      rows: 2, // İki sıra
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2, 
            rows: 2, // İki sıra
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1, // Küçük ekranlarda 1 ürün
            rows: 1, // Tek sıra
          },
        },
      ],
    };
    


  return (
    <section className="product">
    <div className="container">
      <div className="section-title">
        <h2>Kategoriye Ait Ürünler</h2>
      </div>
      <div className="product-wrapper product-carousel">
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product._id}>
              <ProductItem productItem={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </section>
  );
};

export default CategoryDetails;
