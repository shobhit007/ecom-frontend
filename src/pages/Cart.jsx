import "../styles/cart.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

function Cart() {
  return (
    <div className="cart">
      <Navbar />
      <div className="cart_head-container">
        <h3 className="heading">YOUR BAG (1 ITEM)</h3>
        <span className="underscore"></span>
      </div>
      <div className="cart_container">
        <div className="cart_container-wrapper">
          <div className="item_container">
            <div className="item_card">
              <div className="item_card_top">
                <div className="item_image_container">
                  <img
                    src="https://img101.urbanic.com/goods-pic/436c0c447ba647ff92a353b8a031969dUR_w1000_q90"
                    alt=""
                    className="item_image"
                  />
                </div>
                <div className="item_info_container">
                  <span className="item_title">
                    Simplicity pant two piece outfit
                  </span>
                  <span className="item_price">&#8377; 1603</span>
                  <div className="selected_item_color" />
                  <select name="Size" id="" className="item_size_select">
                    <option value="s" className="item_size_option">
                      S
                    </option>
                    <option value="m" className="item_size_option" selected>
                      M
                    </option>
                    <option value="l" className="item_size_option">
                      L
                    </option>
                    <option value="xl" className="item_size_option">
                      XL
                    </option>
                  </select>
                  <div className="item_quantity_container">
                    <Remove className="q_icon" />
                    <span className="item_quantity">1</span>
                    <Add className="q_icon" />
                  </div>
                  <span className="item_remove">Remove</span>
                </div>
              </div>
              <hr className="hr_line" />
            </div>
          </div>
          <div className="summary_container">
            <h3 className="summary_heading">Summary</h3>
            <hr className="hr_line" />
            <div className="price_section">
              <span className="sub_price">SUBTOTAL</span>
              <span className="sub_price">&#8377; 1603</span>
            </div>
            <div className="price_section">
              <span className="total_price">ORDER TOTAL</span>
              <span className="total_price">&#8377; 1603</span>
            </div>
            <button className="checkout_button">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
