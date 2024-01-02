import React from "react";

const NewArrival = () => {
  return (
    <>
      <div className="card bg-base-100 h-full shadow-xl">
        <figure>
          <img
            className="md:h-[250px] w-full"
            src="https://images.deliveryhero.io/image/fd-bd/LH/sxd1-listing.jpg?width=400&height=292"
            alt="Shoes"
          />
        </figure>
        <div className="card-body justify-between">
          <h2 className="card-title text-[14px] md:text-2xl">
            Italian Pizza Hut - Banani
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
            src="https://images.deliveryhero.io/image/fd-bd/LH/y3yt-listing.jpg?width=400&height=292"
            alt=""
          />
        </figure>
        <div className="card-body justify-between">
          <h2 className="card-title text-[14px] md:text-2xl">
            Royal Park Residence Hotel
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
            src="https://images.deliveryhero.io/image/fd-bd/LH/wj5v-listing.jpg?width=400&height=292"
            alt=""
          />
        </figure>
        <div className="card-body justify-between">
          <h2 className="card-title text-[14px] md:text-2xl">
            Evviva Italian Ristorante
          </h2>
          <div className="card-actions justify-center md:justify-end">
            <button className="btn btn-primary w-full">Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
