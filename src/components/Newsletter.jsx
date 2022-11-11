import "../styles/newsletter.css";
import { Send } from "@mui/icons-material";

function Newsletter() {
  return (
    <div className="newsletter">
      <h1 className="newsletter_title">Newsletter</h1>
      <p className="newsletter_desc">
        Get timely updates from you favorite product.
      </p>
      <div className="newsletter_input_container">
        <input
          type="email"
          className="newsletter_input"
          placeholder="Your email"
        />
        <button className="newsletter_button">
          <Send />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
