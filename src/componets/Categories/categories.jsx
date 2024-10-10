import CategoryItem from "./Categoryİtem.jsx";
import { useEffect, useState } from "react";
import "./Categories.css";
import { message } from "antd";
import Slider from "react-slick";
import Proptypes from "prop-types"


const Categories = () => {
  const [categories, setCategories] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/categories`);

        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchCategories();
  }, [apiUrl]);


  function NextBtn({ onClick }) {
    return (
      <button className="glide__arrow glide__arrow--right" onClick={onClick}>
        <i className="bi bi-chevron-right"></i>
      </button>
    );
  }
  
  NextBtn.propTypes = {
    onClick: Proptypes.func,
  };
  
  function PrevBtn({ onClick }) {
    return (
      <button className="glide__arrow glide__arrow--left" onClick={onClick}>
        <i className="bi bi-chevron-left"></i>
      </button>
    );
  }
  
  PrevBtn.propTypes = {
    onClick: Proptypes.func,
  };
  

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };



  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>KATEGORİLERİMİZ</h2>
        </div>
        <div className="">
        <Slider {...sliderSettings}>
          {categories.map((category) => (
            <CategoryItem key={category._id} category={category} />
          ))}     
          </Slider>
        <div className="glide__arrows"></div>
        </div>
      </div>
    </section>
  );
};

export default Categories;