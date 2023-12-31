import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import WelcomeMessage from "./component/WelcomeMessage";
import TodoItems from "./component/TodoItems";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    /*state is given to context Provider so if anyone want to use context it
      can use */
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
