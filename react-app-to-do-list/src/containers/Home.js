import React, { Component } from "react";
import StartDialog from './StartDialog';
import AddTaskDialog from "./AddTaskDialog";
import { TableTasks } from "./TableTasks";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: []};
  }
  
  handleSubmit = (submission) =>{
    this.setState({
    data: [...this.state.data, submission]
 })
}

render() {
    return (
      <div>
        <StartDialog />
        <AddTaskDialog onSubmit={this.handleSubmit} />
        <TableTasks data={this.state.data} header={[{ name: "No"}, { name: "Task" }, { name: "Deadline" }, {name: "Timer"}, { name: "Priority" }, { name: "Delete" }]} />
      </div>
    );
  }}

export default Home;