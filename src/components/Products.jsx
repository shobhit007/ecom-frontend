import "../styles/products.css";
import { useState, useEffect } from "react";
import Product from "./Product";
import api from "../api/api";

function Products({ filter, sort, categoryId }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    (async () => {
      let unsubscribe = true;
      try {
        const { data } = categoryId
          ? await api.get(`/category/${categoryId}`)
          : await api.get(`/product/`);
        if (unsubscribe) setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);

  useEffect(() => {
    categoryId &&
      setFilteredProducts(
        products.filter((item) => item.sizes.includes(filter))
      );
  }, [filter, products, categoryId]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts(products.sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === "lowest") {
      setFilteredProducts((preValue) =>
        [...preValue].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((preValue) =>
        [...preValue].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort, products]);

  return (
    <div className="products-container">
      {categoryId
        ? filteredProducts.map((item) => <Product key={item._id} item={item} />)
        : products
            .slice(0, 12)
            .map((item) => <Product key={item._id} item={item} />)}
    </div>
  );
}

export default Products;
