import TodoItem from "./TodoItem";

const Todoprod = ({ todo }) => {
  return (
    <div>
      {todo.map((tod) => (
        <TodoItem toname={tod.tname} todate={tod.tdate}></TodoItem>
      ))}
    </div>
  );
};

export default Todoprod;
