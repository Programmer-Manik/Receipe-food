import React from "react";
import { BiLike } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ViewsHero = ({ chep }) => {
  console.log(chep);
  const {
    chefName,
    chefPicture,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    shortBio,
  } = chep;
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between px-20 py-32">
      <div className="md:w-1/2">
        <h2 className="md:text-5xl font-bold mb-5 md:mt-0 mt-10">{chefName}</h2>
        <p>{shortBio}</p>
        <p className="mt-5 font-bold">Experience: {yearsOfExperience} years</p>
        <p className="mt-5 font-bold">Total Recipe: {numberOfRecipes}</p>
        <button className="btn mt-4">
          <BiLike className="text-3xl"></BiLike> {likes}
        </button>
      </div>
      <div className="md:1/2">
        <LazyLoadImage effect="blur" src={chefPicture}>
          {/* <img src={chefPicture} alt="" /> */}
        </LazyLoadImage>
      </div>
    </div>
  );
};

export default ViewsHero;
