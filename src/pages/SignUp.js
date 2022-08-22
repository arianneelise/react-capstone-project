import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("signup:", typeof signup);

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await signup(auth, emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch (err) {
      console.log(err);
      setError("Failed to create an account.");
    }

    setLoading(false);
  }

  return (
    <div className="login">
      <FontAwesomeIcon icon={faGear} size="6x" className="icon" />
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <input type="text" placeholder="email" ref={emailRef} />

        <div className="passwords">
          <input type="password" placeholder="Password" ref={passwordRef} />

          <input
            type="password"
            placeholder="Confirm Password"
            ref={confirmPasswordRef}
          />
        </div>
        <button className="sign-up-btn" type="submit" disabled={loading}>
          Sign Up
        </button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
