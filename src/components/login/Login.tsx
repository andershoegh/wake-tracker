import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "../Alert";

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { currentUser } = useAuth();

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (passwordRef.current && emailRef.current) {
      try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
      } catch {
        setError("Failed to sign in");
      } finally {
        console.log(currentUser);
        setLoading(false);
        // setError("");
        history.push("/");
      }
    }
  }

  return (
    <>
      {error && (
        <Alert type="error" msg="Sorry! Email or password is incorrect." />
      )}
      <form className="my-6" onSubmit={handleSubmit}>
        <input
          className="block rounded-md bg-blueGrey-50 w-full bg-gray-100 p-3 my-1"
          placeholder="Email"
          type="email"
          ref={emailRef}
          id="email"
          name="email"
        ></input>
        <div className="flex relative">
          <input
            className="rounded-md w-full bg-blueGrey-50 bg-gray-100 p-3 my-1"
            placeholder="Password"
            type="password"
            ref={passwordRef}
            id="password"
            name="password"
          ></input>{" "}
          <Link
            className="absolute right-3  font-medium top-4 text-blue-500"
            to="/account/forgotPassword"
          >
            Forgot?
          </Link>
        </div>
        <button
          className="text-center rounded-md p-3 my-1 w-full bg-blue-700 text-white font-medium"
          disabled={loading}
          type="submit"
        >
          Sign in
        </button>
      </form>
      <div className="mt-6 text-gray-600 text-md text-center rounded-md">
        Don't have an account? {""}
        <Link className="font-medium text-blue-500" to="/account/signup">
          Get started
        </Link>
      </div>
    </>
  );
};

export default Login;
