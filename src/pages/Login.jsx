import "../styles/register.css";
import { Context } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = Context();
  const navigate = useNavigate();

  async function onSubmitLogin() {
    try {
      const response = await login(email, password);
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="form-container login">
      <div className="card">
        <div className="form">
          <input
            type="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link className="link">FORGOT PASSWORD?</Link>
          <Link to="/user/register" className="link">
            CREATE NEW ACCOUNT
          </Link>
          <button className="btn_submit" onClick={onSubmitLogin}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
