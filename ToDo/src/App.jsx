import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import Todoprod from "./component/Todoprod";
import "./App.css";

function App() {
  const todo = [
    {
      tname: "cookies",
      tdate: "4/8/2023",
    },
    {
      tname: "IceCream",
      tdate: "10/12/2023",
    },
    {
      tname: "Cashew",
      tdate: "6/6/2023",
    },
  ];

  return (
    <center className="todo">
      <AppName />
      <AddTodo />
      <Todoprod todo={todo}></Todoprod>
    </center>
  );
}

export default App;
