import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import FeatureProduct from "./FeatureProduct/FeatureProduct";
import NewArrival from "./NewArrival/NewArrival";

const Home = () => {
  const [chepData, setChepData] = useState([]);
  useEffect(() => {
    fetch("https://banglar-food-server-mdsumonali372.vercel.app/chep")
      .then((res) => res.json())
      .then((data) => setChepData(data));
  }, []);
  return (
    <div className="py-14 px-20">
      <h2 className="font-bold md:text-3xl mb-5">Popular recipe categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {chepData.map((singleChep) => (
          <Card key={singleChep._id} singleChep={singleChep}></Card>
        ))}
      </div>
      <h2 className="md:text-3xl font-bold my-10">Amazing Food</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <NewArrival></NewArrival>
      </div>
      <h2 className="md:text-3xl font-bold my-10">Ummy Taste Food</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <FeatureProduct></FeatureProduct>
      </div>
    </div>
  );
};

export default Home;
