function AddTodo(){
  return (
    <div class="container">
        <div class="row">
          <div class="col-6">
            <input type='text' value="Enter what to do"></input>
          </div>
          <div class="col-4">
            <input type="date"></input>
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-success butt">Add</button>
          </div>
        </div>
      </div>
  )
}
export default AddTodo;