import React, { Component } from "react";
import StartDialog from './StartDialog';
import AddTaskDialog from "./AddTaskDialog";
import { TableTasks } from "./TableTasks";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: []};
  }
  // Handlers
  handleSubmit = (submission) =>{
    this.setState({
    data: [...this.state.data, submission]
 })
}
  // Delete row from table
  handleDelete = (e) => {
    var array = this.state.data;
    var index = array.indexOf(e.target.value)
    array.splice(index, 1);
    this.setState({data: array });
  }
  // Edit row from table
  handleEdit = (e) => {
    alert('edit your task')
  }

render() {
    return (
      <div>
        <StartDialog />
        <AddTaskDialog onSubmit={this.handleSubmit} />
        <TableTasks handleDelete={this.handleDelete} handleEdit={this.handleEdit} data={this.state.data} 
        header={[{ name: "No"}, { name: "Task" }, { name: "Deadline" }, {name: "Timer"}, { name: "Priority" }, { name: "Edit" }, { name: "Delete" }]} />
      </div>
    );
  }}

export default Home;