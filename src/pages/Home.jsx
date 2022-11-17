import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import api from "../api/api";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      let unsubscribe = true;
      try {
        const { data } = await api.get("/category/");
        if (unsubscribe) {
          setCategories(data);
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
      <Navbar />
      <Slider />
      <Categories categories={categories} />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
