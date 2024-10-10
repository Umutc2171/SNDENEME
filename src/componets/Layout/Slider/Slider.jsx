import { useState } from "react";
import "./Slider.css";
import SliderItem from "./SliderItem";


function Slider() {
  const [currentSlide, SetCureentSlide] = useState(0);

 
  
  const nextSlide = () => {
    SetCureentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const prevSlide = () => {
    SetCureentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  setTimeout(() => {
    SetCureentSlide((prevSlide) => (prevSlide + 1) % 3);
  }, 4000);

  return (
    <section className="slider">
      <div className="slider-elements">
        {currentSlide === 0 && <SliderItem imageSrc="/img/slide/Slider1.png" />}
        {currentSlide === 1 && (
          <SliderItem imageSrc="/img/slide/Slider2.jpg" />
        )}
        {currentSlide === 2 && <SliderItem imageSrc="/img/slide/Slider3.jpg" />}
        <div className="slider-buttons">
          <button onClick={prevSlide}>
            <i className="bi bi-chevron-left"></i>
          </button>
          ,{" "}
          <button onClick={nextSlide}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <div className="slider-dots">
          <button
            className={`slider-dot ${currentSlide === 0 ? "active" : ""}`}
            onClick={() => SetCureentSlide(0)}
          >
            <span></span>
          </button>
          <button
            className={`slider-dot ${currentSlide === 1 ? "active" : ""}`}
            onClick={() => SetCureentSlide(1)}
          >
            <span></span>
          </button>
          <button
            className={`slider-dot ${currentSlide === 2 ? "active" : ""}`}
            onClick={() => SetCureentSlide(2)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Slider;
