import React from "react";
import { useLoaderData } from "react-router-dom";
import ViewsCard from "./ViewsCard/ViewsCard";
import ViewsHero from "./ViewsHero/ViewsHero";

const ViewRecipes = () => {
  const chep = useLoaderData();
  const { recipes } = chep;
  return (
    <div>
      <ViewsHero chep={chep}></ViewsHero>
      <div className="grid grid-cols-1 md:grid-cols-3 md:my-20 px-20 gap-4">
        {recipes.map((singleRecipe, idx) => (
          <ViewsCard key={idx} singleRecipe={singleRecipe}></ViewsCard>
        ))}
      </div>
    </div>
  );
};

export default ViewRecipes;
