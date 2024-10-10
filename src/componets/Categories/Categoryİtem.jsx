import PropTypes from "prop-types";
import "./CategoriesItem.css";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const imgSrc = category.img; // Varsayılan resim yolu

  return (
    <div className="category-item">
      <Link to={`/categories/${category._id}`} className="category-link">
        <img src={imgSrc} alt={category.name || "Category Image"} className="category-image" />
        <span className="category-title">{category.name}</span>
      </Link>
    </div>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
};

export default CategoryItem;
