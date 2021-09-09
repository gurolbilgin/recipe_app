import { ReactComponent as Coding } from "./assets/coding.svg";
import { ReactComponent as Diet } from "./assets/diet.svg";
import { ReactComponent as Meal } from "./assets/meal.svg";
import { ReactComponent as Meal2 } from "./assets/meal2.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/router/AppRouter";

function App() {
  return (
    <AppRouter className="App">
      {/* <Coding /> */}
      {/* <Diet /> */}
      {/* <Meal /> */}
      {/* <Meal2 /> */}
    </AppRouter>
  );
}

export default App;
