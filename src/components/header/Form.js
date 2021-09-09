import React from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  Select,
} from "../pages/home/HomeStyle";

const Form = ({ setQuery, query, getData, mealTypes, setMeal, meal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    getData();
  };

  return (
    <FormContainer onsubmit={handleSubmit}>
      <FoodInput
        type="text"
        placeholder="Searh"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={getData}>Search</Button>
      <Select
        name="mealTypes"
        id="mealTypes"
        onChange={(e) => setMeal(e.target.value)}
      >
        {mealTypes?.map((item, index) => (
          <option key={index} value={item.toLowerCase()}></option>
        ))}
      </Select>
    </FormContainer>
  );
};

export default Form;
