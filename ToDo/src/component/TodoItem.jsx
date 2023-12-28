function TodoItem({ toname, todate }) {
  return (
    <div className="item">
      <div className="row rome">
        <div class="col-6">{toname}</div>
        <div class="col-4">{todate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger butt">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
