import "../styles/register.css";
import { useState } from "react";
import { Context } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, updateUser } = Context();
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const { data } = await register(name, email, password);
      const { token } = data;
      localStorage.setItem("token", token);
      updateUser();
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container register">
      <div className="card">
        <div className="form">
          <input
            type="text"
            placeholder="Name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <span className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>Privacy Policy</b>.
          </span>
          <button className="btn_submit" onClick={handleRegister}>
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
