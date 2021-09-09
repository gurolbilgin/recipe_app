import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/details" exact component={Details} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
