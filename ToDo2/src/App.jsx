import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import WelcomeMessage from "./component/WelcomeMessage";
import TodoItems from "./component/TodoItems";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const NewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue, //spread operator ...
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const DeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    /*state is given to context Provider so if anyone want to use context it
      can use */
    <TodoItemsContext.Provider
      value={{ todoItems: todoItems, NewItem: NewItem, DeleteItem: DeleteItem }}
    >
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
