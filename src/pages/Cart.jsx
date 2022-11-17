import "../styles/cart.css";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import { Context } from "../context/AuthContext";
import api from "../api/api";
import Card from "../components/Card";
import { Close } from "@mui/icons-material";

function Cart() {
  const {
    user,
    cart,
    updateCartItemQuantity,
    removeItemFromCart,
    checkoutOrder,
  } = Context();
  const [cartProducts, setCartProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  let subtotal = 0;

  useEffect(() => {
    async function getUserCartProducts() {
      try {
        const { data } = user
          ? await api.get(`/cart/${user._id}/products`)
          : await api.get(`/product`);
        if (cart.length) {
          if (!user) {
            setCartProducts(
              data
                .filter((product) =>
                  cart.some((item) => item.productId === product._id)
                )
                .map((item, i) => ({ ...item, quantity: cart[i].quantity }))
            );
          } else {
            setCartProducts(
              data.map((item, i) => ({ ...item, quantity: cart[i].quantity }))
            );
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    getUserCartProducts();
  }, [user, cart]);

  if (cart.length > 0) {
    cartProducts.forEach((item, i) => {
      subtotal += item.price * cart[i]?.quantity;
    });
  }

  const handleCheckout = async () => {
    if (user && cart.length) {
      const orders = cartProducts.map((item, index) => ({
        product: {
          id: item._id,
          name: item.title,
          price: item.price,
          quantity: cart[index].quantity,
          color: cart[index].color,
          size: cart[index].size,
          image: item.images[item.colors.indexOf(cart[index].color)],
        },
        address,
        name,
      }));

      const { data } = await checkoutOrder(user._id, orders);
      console.log(data);
      setShowModal(false);
    }
  };

  const updateColorAndSize = (index, event) => {
    const name = event.target.name;
    if (name === "color") {
      cart[index].color = event.target.value;
    } else {
      cart[index].size = event.target.value;
    }
  };

  return (
    <div className="cart">
      {showModal && (
        <div className="modal_container">
          <div className="modal">
            <h2>Checkout</h2>
            <input
              type="text"
              className="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              className="address"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <span className="total_price">{`Amount: ${subtotal}`}</span>
            <button className="confirm" onClick={handleCheckout}>
              CONFIRM
            </button>
            <Close
              className="close_button"
              onClick={() => setShowModal((preValue) => !preValue)}
            />
          </div>
        </div>
      )}
      <Navbar />
      <div className="cart_head-container">
        <h3 className="heading">
          YOUR BAG (
          {cart
            ? `${cart.length} ${cart.length > 1 ? "ITEMS" : "ITEM"}`
            : "0 ITEM"}
          )
        </h3>
        <span className="underscore"></span>
      </div>
      <div className="cart_container">
        <div className="cart_container-wrapper">
          <div className="item_container">
            {cartProducts.map((item, itemIndex) => (
              <Card
                key={item._id}
                item={item}
                index={itemIndex}
                cartItem={cart[itemIndex]}
                updateQuantity={updateCartItemQuantity}
                removeItem={removeItemFromCart}
                updateColorAndSize={updateColorAndSize}
              />
            ))}
          </div>
          <div className="summary_container">
            <h3 className="summary_heading">Summary</h3>
            <hr className="hr_line" />
            <div className="price_section">
              <span className="sub_price">SUBTOTAL</span>
              <span className="sub_price">&#8377; {subtotal}</span>
            </div>
            <div className="price_section">
              <span className="total_price">ORDER TOTAL</span>
              <span className="total_price">&#8377; {subtotal}</span>
            </div>
            <button
              className="checkout_button"
              onClick={() => setShowModal((preValue) => !preValue)}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
