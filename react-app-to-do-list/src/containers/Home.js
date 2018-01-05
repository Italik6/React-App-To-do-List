import React, { Component } from "react";
import StartDialog from './StartDialog';
import AddTaskDialog from "./AddTaskDialog";
import { TableTasks } from "./TableTasks";
import { AddButton } from '../components/AddButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from "material-ui/TextField";
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import { Alert } from '../components/Alert';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], open: false, openEdit: false, openAlert:false, priority:'', nameTask:'', deadline:new Date() };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }
  // Handlers
  handleSubmit = (submission) =>{
    this.setState({
    data: [...this.state.data, submission],
    open: false
 })
}

  handleOpen = () => { 
    this.setState({open: true});
  };
  // Delete row from table
  handleDelete = e => {
    const index = e.currentTarget.getAttribute('index');
    var array = this.state.data.slice();
    array.splice(index, 1)
    this.setState({ data: array });
  }
  // ********************************** EDIT TASK SECTION ****************************************
  // Edit row from table
  handleEdit = e => {    
    const index = e.currentTarget.getAttribute('index');
    let foundObject = this.state.data[index];
  
    let nameTaskNew = foundObject.nameTask;
    let priorityNew = foundObject.priority;
    let deadlineNew = foundObject.deadline;
    this.setState({openEdit: true, nameTask: nameTaskNew, priority: priorityNew, deadline: deadlineNew });
  }

  handleSubmitEdit = (e) => {
    e.preventDefault();
    const err = this.validate();
    debugger;
    if (!err) {
      // this.props.onSubmit(this.state);
      this.setState({
        data: [...this.state.data]
     })
      this.setState({openEdit: false});
      // Clear form
      this.setState({
        nameTask: "",
        nameTaskError: "",
        priority: "Low",
        deadline: new Date()
      });
    }
  }

  handleOpenEdit = () => {
    this.setState({
      openEdit: true
    })
  }

  handleCloseEdit = () => {
    this.setState({
      openEdit: false
    })
  }

  handleChangeSelectField = (event, index, priority) => {
    this.setState(
      {priority}
    );
  }

  handleChangeDate = (event, date) => {
    this.setState({
      deadline: date
    });
    let today = new Date();
    if (date < today) {
      this.setState({       
        openAlert: true
      })
    }
  }

  handleTextFieldChange = (event) =>{
    this.setState({
      nameTask: event.target.value,  
    });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
     this.handleSubmitTask(event);
    }
  }
  
  handleCloseAlert = () => {
    this.setState({
      openAlert: false
    })
  }

// Validation
  validate = () => {
    let isError = false;
    const errors = {
      nameTaskError: ""
  };

  if (this.state.nameTask.length < 3) {
      isError = true;
      errors.nameTaskError = "Name of task needs to be at least 3 characters long.";
  }

  this.setState({
      ...errors
  });
    return isError;
  };
  
render() {
  const actions = [
    <FlatButton label="Edit" primary={true} keyboardFocused={true} onClick={e => this.handleSubmitEdit(e)} />,
    <FlatButton label="Cancel" primary={true} onClick={this.handleCloseEdit} />
  ];
  const actionsAlert =[
    <FlatButton label="Ok, got it!" primary={true} onClick={this.handleCloseAlert} />
  ];
    return (
      <div>
        <AddButton onClick={this.handleOpen} />
        <StartDialog />
        <AddTaskDialog onSubmit={this.handleSubmit} open={this.state.open} />
        <TableTasks handleDelete={this.handleDelete} handleEdit={this.handleEdit} data={this.state.data} 
        header={[{ name: "No"}, { name: "Task" }, { name: "Deadline" }, {name: "Timer"}, { name: "Priority" }, { name: "Edit" }, { name: "Delete" }]} />
        {/* Edit form */}
        <form>
        <Dialog title="Edit your Task" open={this.state.openEdit} actions={actions}>
          <TextField floatingLabelText="Task" value={this.state.nameTask} errorText={this.state.nameTaskError}
          onChange={e => this.handleTextFieldChange(e)}  
          onKeyPress={this.handleKeyPress} />
          <DatePicker floatingLabelText="Deadline" value={this.state.deadline} onChange={this.handleChangeDate} />
          <SelectField floatingLabelText="Priority" value={this.state.priority} onChange={this.handleChangeSelectField}>
              <MenuItem value="High" primaryText="High" />
              <MenuItem value="Medium" primaryText="Medium" />
              <MenuItem value="Low" primaryText="Low" />
          </SelectField>
        </Dialog>  
        <Alert open={this.state.openAlert} actions={actionsAlert} 
        alertStatement={"Time to complete the task has already passed. Change the date or keep current one."}/>
      </form>
      </div>
    );
  }}

export default Home;