import React from "react";

const Recipes = ({ info }) => {
  return (
    <div>
      <h2>{info.recipe.label}</h2>
      <p>{Math.floor(info.recipe.calories)} kcal</p>
      <img src={info.recipe.image} alt={info.recipe.label} />
    </div>
  );
};

export default Recipes;
