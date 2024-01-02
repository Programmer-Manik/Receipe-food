import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ViewsCard = ({ singleRecipe }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { recipeName, ingredients, cookingMethod, recipePicture, rating } =
    singleRecipe;
  const handleFavorite = () => {
    toast("Favorite Added");
    setIsDisabled(true);
  };
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl h-full">
      <figure>
        <LazyLoadImage
          className="md:h-[300px]"
          effect="blur"
          src={recipePicture}
        >
          {/* <img src={recipePicture} className="h-[250px] w-full" alt="" /> */}
        </LazyLoadImage>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipeName}</h2>
        <p>
          {ingredients.slice(0, 5).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </p>
        <p>{cookingMethod}</p>
        <p className="flex gap-2 items-center">
          <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
          {rating}
        </p>
        <div className="card-actions justify-end">
          <button
            disabled={isDisabled}
            onClick={handleFavorite}
            className="btn btn-primary"
          >
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewsCard;
