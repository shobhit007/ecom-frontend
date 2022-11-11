import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages//Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" index element={<Home />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        <Route
          path="/category/:categoryName/:categoryId"
          element={<ProductList />}
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/:userId/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
