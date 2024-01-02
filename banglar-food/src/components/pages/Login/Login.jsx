import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("Email/Password not match");
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;
        // console.log(googleUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubSignIn = () => {
    gitHubSignIn()
      .then((result) => {
        const gitHubUser = result.user;
        // console.log(gitHubUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="md:px-20 bg-purple-500 w-3/4 mx-auto my-5 p-5 rounded-lg">
      <h2 className="text-center md:text-3xl font-bold text-white mb-5">
        LOGIN PAGE
      </h2>
      <form
        onSubmit={handleSignIn}
        action=""
        className="grid grid-col gap-10 md:w-3/4 mx-auto "
      >
        <input
          type="email"
          name="email"
          className="h-14 pl-2 md:pl-5 border-0 outline-none rounded-lg"
          placeholder="Your Email"
          required
        />
        <input
          type="password"
          name="password"
          className="h-14 pl-2 md:pl-5 border-0 outline-none rounded-lg"
          placeholder="Your Password"
          required
        />
        <button className="btn" type="submit">
          Login
        </button>
        <p className="text-warning font-bold text-center">{error}</p>
      </form>
      <div className="mt-5 flex md:flex-row flex-col gap-3 justify-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-warning"
          type="submit"
        >
          Login Google
        </button>
        <button onClick={handleGitHubSignIn} className="btn" type="submit">
          Login Github
        </button>
      </div>
      <p className="text-center mt-5 text-warning md:text-2xl font-bold">
        Dont have an account? <Link to="/registration">Register</Link>
      </p>
    </div>
  );
};

export default Login;
