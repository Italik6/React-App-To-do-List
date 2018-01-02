import React from "react";
import TextField from "material-ui/TextField";
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import FlatButton from 'material-ui/FlatButton';
import { AddButton } from '../components/AddButton';
import { Alert } from '../components/Alert';

export default class AddTaskDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { priority: 'Low', nameTask: '', deadline: new Date(), open:false, openAlert:false };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleChangeSelectField = this.handleChangeSelectField.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Handlers
  handleChangeSelectField = (event, index, priority) => {
    this.setState(
      {priority}
    );
  }

  handleChangeDate = (event, date) => {
    this.setState({
      deadline: date
    });
    if (this.state.deadline < new Date()) {
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

  handleOpen = () => { 
    this.setState({open: true});
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
     this.handleSubmit(event);
    }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
     this.handleSubmitTask(event);
    }
  }

  handleCloseAlert = () =>{
    this.setState({
      openAlert: false
    })
  }

  handleSubmitTask = e => {
    e.preventDefault();
    const err = this.validate();

    if (!err) {
      this.props.onSubmit(this.state);
      this.setState({open: false});
      // clear form
      this.setState({
        nameTask: "",
        nameTaskError: "",
        priority: "Low"
      });
    }
  };
// Validation
  validate = () => {
    let isError = false;
    const errors = {
      nameTaskError: ""
  };

  if (this.state.nameTask.length < 3) {
      isError = true;
      errors.nameTaskError = "Name of task needs to be at least 3 characters long.";
      console.log(this.state.deadline)
  }

  this.setState({
      ...errors
  });
    return isError;
  };

  render() {
    const actions = [
      <FlatButton label="Submit" primary={true} keyboardFocused={true} onClick={e => this.handleSubmitTask(e)} />,
      <FlatButton label="Ok, got it!" primary={true} onClick={this.handleCloseAlert} />,
    ];

    return (
      <form>
        <AddButton onClick={this.handleOpen} />
        <Dialog title="Add new task" open={this.state.open} actions={actions[0]}>
          <TextField floatingLabelText="Task" value={this.state.nameTask} onChange={e => this.handleTextFieldChange(e)} errorText={this.state.nameTaskError} onKeyPress={this.handleKeyPress}/>
          <DatePicker floatingLabelText="Deadline" value={this.state.deadline} onChange={this.handleChangeDate} />
          <SelectField floatingLabelText="Priority" value={this.state.priority} onChange={this.handleChangeSelectField} >
              <MenuItem value="High" primaryText="High" />
              <MenuItem value="Medium" primaryText="Medium" />
              <MenuItem value="Low" primaryText="Low" />
            </SelectField>
        </Dialog>  
        <Alert open={this.state.openAlert} actions={actions[1]} alertStatement={"Time to complete the task has already passed. Change the date or keep curent one."}/>
      </form>
    );
  }
}
