import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Context } from "../context/AuthContext";
import { useEffect, useState } from "react";
import api from "../api/api";

function Home() {
  const { user, logout } = Context();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      let unsubscribe = true;
      try {
        const { data } = await api.get("/category/");
        const { data: productsData } = await api.get("/product");
        if (unsubscribe) {
          setCategories(data);
          setProducts(productsData);
        }
      } catch (error) {
        console.log(error);
      }

      return () => {
        unsubscribe = false;
      };
    })();
  }, []);

  return (
    <div>
      <Navbar user={user} logout={logout} />
      <Slider />
      <Categories categories={categories} />
      <Products products={products} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
