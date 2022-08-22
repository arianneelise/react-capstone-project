import { useRef, useState } from "react";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(auth, emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch (err) {
      console.log(err);
      setError("Invalid email/password");
    }

    setLoading(false);
  }

  return (
    <div className="login">
      <h1>Capstone Sign In</h1>
      <FontAwesomeIcon icon={faGear} size="6x" className="icon" />
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input type="text" placeholder="email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" disabled={loading}>
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </div>
  );
}
