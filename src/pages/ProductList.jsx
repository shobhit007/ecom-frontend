import "../styles/productlist.css";
import Navbar from "../components/navbar/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";

function ProductList() {
  const { categoryName, categoryId } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      let unsubscribe = true;
      try {
        const { data } = await api.get(`/category/${categoryId}`);
        if (unsubscribe) setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);
  return (
    <div className="product-list">
      <Navbar />
      <h1 className="product-list_title">{categoryName}</h1>
      <div className="filter-container">
        <div className="filter">
          <span className="filter_title">Filter Products:</span>
          <select>
            <option value="Color" disabled selected>
              Color
            </option>
            <option value="white">White</option>
            <option value="yellow">Yellow</option>
            <option value="red">Red</option>
          </select>
          <select>
            <option value="Size" disabled selected>
              Size
            </option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className="filter">
          <span className="filter_title">Sort Products:</span>
          <select>
            <option value="newest" selected>
              Newest
            </option>
            <option value="price">Price (asc)</option>
            <option value="price">Price (des)</option>
          </select>
        </div>
      </div>
      <Products products={products} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductList;
