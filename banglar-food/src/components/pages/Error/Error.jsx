import React from "react";
import { Link } from "react-router-dom";
import error from "../../../assets/404.png";

const Error = () => {
  return (
    <div className="px-20 text-center">
      <div>
        <img className="block mx-auto mt-10 mb-10" src={error} alt="" />
      </div>
      <Link to="/">
        <button className="btn btn-primary">Go HomePage</button>
      </Link>
    </div>
  );
};

export default Error;
