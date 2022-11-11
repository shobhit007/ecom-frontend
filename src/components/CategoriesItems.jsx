import "../styles/categories.css";
import { Link } from "react-router-dom";

function CategoriesItems({ item }) {
  return (
    <div className="categories-item">
      <img src={item.image} alt="" className="categories-item_image" />
      <div className="categories-item_info">
        <h1 className="categories-item_title">{item.name}</h1>
        <Link
          className="categories-item_button"
          to={`/category/${item.name}/${item._id}`}
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
}

export default CategoriesItems;
