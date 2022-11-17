import "../styles/productlist.css";
import Navbar from "../components/navbar/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";

function ProductList() {
  const { categoryName, categoryId } = useParams();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("newest");

  return (
    <div className="product-list">
      <Navbar />
      <h1 className="product-list_title">{categoryName}</h1>
      <div className="filter-container">
        <div className="filter">
          <span className="filter_title">Filter Products:</span>

          <select
            defaultValue={"Size"}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="Size" disabled>
              Size
            </option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="2XL">2XL</option>
          </select>
        </div>
        <div className="filter">
          <span className="filter_title">Sort Products:</span>
          <select
            defaultValue={"newest"}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="lowest">Lowest price (asc)</option>
            <option value="highest">Highest price (des)</option>
          </select>
        </div>
      </div>
      <Products filter={filter} sort={sort} categoryId={categoryId} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductList;
