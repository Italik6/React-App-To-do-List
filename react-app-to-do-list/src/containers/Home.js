import React, { Component } from "react";
import StartDialog from './StartDialog';
import AddTaskDialog from "./AddTaskDialog";
import { TableTasks } from "./TableTasks";
import { AddButton } from '../components/AddButton';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], open: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }
  // Handlers
  handleSubmit = (submission) =>{
    submission.open = true
    this.setState({open: false});
    this.setState({
    data: [...this.state.data, submission],
 })
}
  // Delete row from table
  handleDelete = e => {
    const index = e.currentTarget.getAttribute('index');
    var array = this.state.data.slice();
    array.splice(index, 1)
    this.setState({ data: array });
  }
  // Edit row from table
  handleEdit = e => {    

     const index = e.currentTarget.getAttribute('index');
     let nameTask = this.state.data[index];

     let array = nameTask.nameTask = "italik"
     this.setState({array});
  }

  handleOpen = () => { 
    this.setState({open: true});
  };

render() {
    return (
      <div>
        <AddButton onClick={this.handleOpen} />
        <StartDialog />
        <AddTaskDialog onSubmit={this.handleSubmit} open={this.state.open}/>
        <TableTasks handleDelete={this.handleDelete} handleEdit={this.handleEdit} data={this.state.data} 
        header={[{ name: "No"}, { name: "Task" }, { name: "Deadline" }, {name: "Timer"}, { name: "Priority" }, { name: "Edit" }, { name: "Delete" }]} />
      </div>
    );
  }}

export default Home;