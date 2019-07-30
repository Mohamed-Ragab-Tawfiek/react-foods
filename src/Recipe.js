import React from "react";
import Style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={Style.recipe}>
      <h1>{title}</h1>
      <ol>
        <h4>Ingredients :</h4>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p><strong>Calories: </strong>{ Math.round(calories/100)*100}</p>
      <img className={Style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
