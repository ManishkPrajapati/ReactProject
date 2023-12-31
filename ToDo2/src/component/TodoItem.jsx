import { useContext } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({ todoName, todoDate }) {
  const { DeleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => DeleteItem(todoName)}
          >
            <RiDeleteBin6Fill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
