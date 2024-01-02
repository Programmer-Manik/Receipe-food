import React, { useContext } from "react";
import { BiFoodMenu, BiLike } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const Card = ({ singleChep }) => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <progress className="progress w-100"></progress>;
  }
  const {
    _id,
    chefName,
    chefPicture,
    yearsOfExperience,
    numberOfRecipes,
    likes,
  } = singleChep;
  return (
    <div className="card bg-base-100 shadow-xl h-full w-full">
      <figure className="relative">
        <LazyLoadImage
          className="object-cover md:h-[300px]"
          effect="blur"
          src={chefPicture}
        >
          {/* <img src={chefPicture} className="h-[300px] w-full" alt="food" /> */}
        </LazyLoadImage>
      </figure>
      <div className="absolute flex items-center bg-violet-700 p-1 md:p-3 rounded-r-3xl">
        <BiFoodMenu className="md:text-5xl text-warning"></BiFoodMenu>
        <small className="md:text-2xl text-white font-bold">
          {numberOfRecipes}
        </small>
      </div>
      <div className="card-body">
        <h2 className="card-title text-[14px] md:text-2xl">{chefName}</h2>
        <div>
          <p>
            Years Of Experience:
            {yearsOfExperience}
          </p>
          <p className="flex items-center">
            <BiLike></BiLike> ({likes})
          </p>
        </div>
        <div className="card-actions justify-center md:justify-end">
          <Link to={`/viewrecipes/${_id}`}>
            <button className="btn btn-primary text-[14px]">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
