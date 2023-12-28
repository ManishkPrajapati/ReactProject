import Fooditem from "./component/Fooditem";
import "./App.css";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";
import { useState } from "react";
import ErrorMessage from "./component/ErrorMessage";

function App() {
  let [food, setfood] = useState([]);

  const onKeyDown = (event) => {
    if (event.key == "Enter") {
      let newFoodItem = event.target.value;
      let newitem = [...food, newFoodItem];
      setfood(newitem);
    }
  };

  return (
    <>
      <Container>
        <FoodInput handlerOnKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={food}></ErrorMessage>
        <Fooditem items={food}></Fooditem>
      </Container>
      <Container>
        <p>Hello Welcome to Catalog Of Healthy Food</p>
      </Container>
    </>
  );
}

export default App;
