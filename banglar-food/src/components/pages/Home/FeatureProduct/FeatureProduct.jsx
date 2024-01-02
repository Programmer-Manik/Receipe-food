import React from "react";

const FeatureProduct = () => {
  return (
    <>
      <div className="card bg-base-100 h-full shadow-xl">
        <figure>
          <img
            className="md:h-[250px] w-full"
            src="https://images.deliveryhero.io/image/fd-bd/LH/xn2m-listing.jpg?width=400&height=292"
            alt="Shoes"
          />
        </figure>
        <div className="card-body justify-between">
          <h2 className="card-title text-[14px] md:text-2xl">
            Tasty Treat- Olokar Mor
          </h2>
          <div className="card-actions justify-center md:justify-end">
            <button className="btn btn-primary w-full">Order Now</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 h-full shadow-xl">
        <figure>
          <img
            className="md:h-[250px] w-full"
            src="https://images.deliveryhero.io/image/fd-bd/LH/s3qp-listing.jpg?width=400&height=292"
            alt=""
          />
        </figure>
        <div className="card-body justify-between">
          <h2 className="card-title text-[14px] md:text-2xl">
            Daruchini Chinese Restaurant & Community Center
          </h2>
          <div className="card-actions justify-center md:justify-end">
            <button className="btn btn-primary w-full">Order Now</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 h-full shadow-xl">
        <figure>
          <img
            className="md:h-[250px] w-full"
            src="https://images.deliveryhero.io/image/fd-bd/LH/n2sb-listing.jpg?width=400&height=292"
            alt=""
          />
        </figure>
        <div className="card-body justify-between">
          <h2 className="card-title text-[14px] md:text-2xl">
            The Corridor Cafe
          </h2>
          <div className="card-actions justify-center md:justify-end">
            <button className="btn btn-primary w-full">Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
