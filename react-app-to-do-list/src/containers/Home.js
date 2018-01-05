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

let editTask;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], open: false, openEdit: false, openAlert:false, priority:'', nameTask:'', deadline:new Date() };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.handleOpenEdit = this.handleOpenEdit.bind(this);
    this.handleCloseEdit = this.handleCloseEdit.bind(this);
    this.handleChangeSelectField = this.handleChangeSelectField.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleCloseAlert = this.handleCloseAlert.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleSubmit = (submission) => {
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
    editTask = this.state.data[index];
    // Unpacking array of objects
    let {nameTask:nameTaskEdit, priority:priorityEdit, deadline: deadlineEdit} = editTask;
    this.setState({ openEdit: true, nameTask: nameTaskEdit, priority: priorityEdit, deadline: deadlineEdit });
  }

  handleSubmitEdit = e => {
    editTask.nameTask = this.state.nameTask;
    editTask.priority = this.state.priority;
    editTask.deadline = this.state.deadline;
    const err = this.validate();
    if (!err) {
      this.setState({
        // Clear form
        openEdit: false,
        nameTask: "",
        nameTaskError: "",
        priority: "Low",
        deadline: new Date()
      });
    }
  }

  handleOpenEdit = () => {
    this.setState({ openEdit: true })
  }

  handleCloseEdit = () => {
    this.setState({ openEdit: false })
  }

  handleChangeSelectField = (event, index, priority) => {
    this.setState( {priority} );
  }

  handleChangeDate = (event, date) => {
    this.setState({ deadline: date });
    // Current date
    let today = new Date();
    let days = today.getDate();
    let month = today.getMonth()+1;
    // Choosen date
    let daysChoosen = date.getDate();
    let monthChoosen = date.getMonth()+1;
    // Validation of date
    if (date < today & daysChoosen !== days) {
      this.setState({ openAlert: true })
    }
    else if(date < today & daysChoosen === days & monthChoosen !== month) {
      this.setState({ openAlert: true })
    }
  }

  handleTextFieldChange = event =>{
    this.setState({
      nameTask: event.target.value,  
    });
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
     this.handleSubmitEdit(event);
    }
  }
  
  handleCloseAlert = () => {
    this.setState({ openAlert: false })
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

    this.setState({ ...errors });
    return isError;
  };
  
render() {
  const actions = [
    <FlatButton label="Edit" primary={true} keyboardFocused={true} onClick={e => this.handleSubmitEdit(e)} />,
    <FlatButton label="Cancel" primary={true} onClick={this.handleCloseEdit} />
  ];
  const actionsAlert = [ <FlatButton label="Ok, got it!" primary={true} onClick={this.handleCloseAlert} /> ];

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