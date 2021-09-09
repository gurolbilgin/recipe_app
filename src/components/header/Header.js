import React from "react";
import { HeaderContainer, MainHeader } from "../pages/home/HomeStyle";
import Form from "./Form";

const Header = ({ setQuery, query, getData, mealTypes, setMeal, meal }) => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <Form />
    </HeaderContainer>
  );
};

export default Header;
