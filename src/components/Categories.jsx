import "../styles/categories.css";
import CategoriesItems from "./CategoriesItems";

function Categories({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <CategoriesItems key={item._id} item={item} />
      ))}
    </div>
  );
}

export default Categories;
