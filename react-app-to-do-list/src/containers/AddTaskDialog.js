import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import { AddButton } from '../components/AddButton';

export default class AddTaskDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { priority: '', nameTask: '', deadline: new Date(), open:false };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleChangeSelectField = this.handleChangeSelectField.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
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
  }

  validate = () => {
    let isError = false;
    const errors = {
      nameTaskError: "",
  };

    // if (this.state.username.length < 5) {
    //   isError = true;
    //   errors.usernameError = "Username needs to be atleast 5 characters long";
    // }

    this.setState({
      ...this.state,
      ...errors
    });
    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    this.setState({open: false});

    // this.deadline.toDateString();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        nameTask: "",
        nameTaskError: "",
        priority: "",
        priorityError: ""
      });
    }
  };

  handleTextFieldChange = (event) =>{
        this.setState({
          nameTask: event.target.value,  
    });
  }

  handleOpen = () => {
     this.setState({open: true});
  };
    
  render() {
    return (
      <form>
      <AddButton onClick={this.handleOpen} />
      <Dialog title="Add new task" actions={this.props.actions} modal={false} open={this.state.open} >
        <TextField
          name="nameTask"
          floatingLabelText="Task"
          value={this.state.nameTask}
          onChange={e => this.handleTextFieldChange(e)}
          errorText={this.state.nameTaskError}
          floatingLabelFixed
        />
        <br/>
        <DatePicker floatingLabelText="Deadline" value={this.state.deadline} onChange={this.handleChangeDate}/>
        <br/>
        <SelectField floatingLabelText="Priority" value={this.state.priority} onChange={this.handleChangeSelectField} >
            <MenuItem value="High" primaryText="High" />
            <MenuItem value="Medium" primaryText="Medium" />
            <MenuItem value="Low" primaryText="Low" />
          </SelectField>
        <br/>
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </Dialog>  
      </form>
    );
  }
}
