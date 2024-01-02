import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Registration = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 8) {
      setError("password must be 8 charcter long");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createNewUser = result.user;
        console.log(createNewUser);
        updateProfile(createNewUser, { displayName: name, photoURL: photoUrl })
          .then()
          .catch((error) => console.log(error));
        logOut();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="md:px-20 bg-purple-500 w-3/4 mx-auto my-5 p-5 rounded-lg overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-white mb-5">
        Registration
      </h2>
      <form
        onSubmit={handleRegister}
        action=""
        className="grid grid-col gap-10 md:w-3/4 mx-auto "
      >
        <input
          type="text"
          name="name"
          className="h-14 pl-2 md:pl-5 border-0 outline-none rounded-lg"
          placeholder="Your Name"
        />
        <input
          type="text"
          name="photoUrl"
          className="h-14 pl-2 md:pl-5 border-0 outline-none rounded-lg"
          placeholder="Photo URL"
        />
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
        <p className="text-warning">{error}</p>
        <button className="btn" type="submit">
          Register
        </button>
      </form>
      <p className="text-center mt-5 text-warning md:text-2xl font-bold">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Registration;
