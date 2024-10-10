import { useState } from "react";
import'./Thumbs.css'
import PropTypes from "prop-types";

const Thumbs = ({singleProduct}) => {
  const [activeTab, setActiveTab] = useState("desc");

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };
  return (
    <div className="single-tabs">
    <ul className="tab-list">
      <li>
      <a
            href="#"
            className={`tab-button ${activeTab === "desc" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "desc")}
          >          Paket Hakkında
        </a>
      </li>
     
      <li>
  
      </li>
    </ul>
    <div className="tab-panel">
    <div
          className={`tab-panel-descriptions content ${
            activeTab === "desc" ? "active" : ""
          }`}
        >  <div
        className="product-description"
        dangerouslySetInnerHTML={{ __html: singleProduct.description }}
      ></div>
      </div>
   
     
    </div>
  </div>
  )
}

export default Thumbs

Thumbs.propTypes = {
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};