import "../styles/footer.css";
import {
  FacebookRounded,
  Instagram,
  Twitter,
  LocationOn,
  Phone,
  MailOutlineOutlined,
} from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h1 className="footer-left_logo">E-com</h1>
        <p className="footer-left_desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus, aliquid dolorum. Ut laudantium itaque commodi ea. Totam,
          deleniti unde molestias soluta, placeat fugit natus sunt, voluptatibus
          saepe dolore amet eligendi?
        </p>
        <div className="footer-left_social">
          <div className="social-icon facebook">
            <FacebookRounded />
          </div>
          <div className="social-icon instagram">
            <Instagram />
          </div>
          <div className="social-icon twitter">
            <Twitter />
          </div>
        </div>
      </div>
      <div className="footer-center">
        <h3 className="footer-heading">Useful Links</h3>
        <ul>
          <li className="list-item">Home</li>
          <li className="list-item">Cart</li>
          <li className="list-item">Men Fashion</li>
          <li className="list-item">Women Fashion</li>
          <li className="list-item">Accessories</li>
          <li className="list-item">My Account</li>
          <li className="list-item">Order Tracking</li>
          <li className="list-item">Wishlist</li>
          <li className="list-item">Terms</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3 className="footer-heading">Contact</h3>
        <div className="footer-right_contact">
          <LocationOn style={{ marginRight: "10px" }} /> 200 N Battlefield, Blvd
          Chesapeake, Vermont 23320{" "}
        </div>
        <div className="footer-right_contact">
          <Phone style={{ marginRight: "10px" }} />
          +91 1234567890
        </div>
        <div className="footer-right_contact">
          <MailOutlineOutlined style={{ marginRight: "10px" }} />{" "}
          contact@ecom.mail
        </div>
        <img
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt=""
          className="footer-right_payment"
        />
      </div>
    </div>
  );
}

export default Footer;
