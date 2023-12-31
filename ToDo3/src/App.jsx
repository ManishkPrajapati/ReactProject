import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import WelcomeMessage from "./component/WelcomeMessage";
import TodoItems from "./component/TodoItems";
import "./App.css";
import { useState, useReducer } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currValue, //spread operator ...
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
  }
  return newTodoItems;
};

function App() {
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { itemName, itemDueDate },
    };
    dispatchTodoItems(newItemAction);
  };

  // const NewItem = (itemName, itemDueDate) => {
  //   setTodoItems((currValue) => [
  //     ...currValue, //spread operator ...
  //     { name: itemName, dueDate: itemDueDate },
  //   ]);
  // };

  const DeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    /*state is given to context Provider so if anyone want to use context it
      can use */
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, DeleteItem }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
