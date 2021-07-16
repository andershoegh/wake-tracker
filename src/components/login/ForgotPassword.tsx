import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Alert } from "../Alert";

const ForgotPassword: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (emailRef.current) {
      try {
        setMessage("");
        setError("");
        setLoading(true);
        await resetPassword(emailRef.current.value);
        setMessage("Check your mail to reset your password");
      } catch {
        setError("Failed to reset password");
      }

      setLoading(false);
    }
  }

  console.log(error);

  return (
    <>
      {message && <Alert msg={message} type="info" />}
      <div className="text-center font-normal mt-6"></div>
      {/* {error && <h1>{error}</h1>} TODO USE ALERT COMPONENT INSTEAD */}
      <form className="my-6" onSubmit={handleSubmit}>
        <input
          className="block rounded-md w-full bg-blueGrey-50 p-3 mb-1"
          type="email"
          placeholder="Email"
          ref={emailRef}
          id="email"
          name="email"
        ></input>
        <button
          className="text-center rounded-md p-3 my-1 w-full bg-blue-700 text-white font-medium"
          disabled={loading}
          type="submit"
        >
          Reset password
        </button>
      </form>
      <div className="mt-6 text-gray-600 text-md text-center rounded-md">
        <Link className="font-medium text-blue-500" to="/account">
          I already have an account
        </Link>
      </div>
    </>
  );
};
export default ForgotPassword;
