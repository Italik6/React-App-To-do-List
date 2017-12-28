import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

export const infoTask = {};
export class AddTaskDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { priority: "High", nameTask: 'Task', deadline: new Date() };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleChangeSelectField = this.handleChangeSelectField.bind(this);
  }

  handleTextFieldChange = (event) =>{
    this.setState({
        nameTask: event.target.value,  
    });
    infoTask.nameTask = event.target.value
  }

  handleChangeSelectField = (event, index, priority) => {
    this.setState(
        {priority}
      );
    infoTask.priority = priority
  }

  handleChangeDate = (event, date) => {
    this.setState({
      deadline: date,
    });
    infoTask.deadline = date
  }

  render() {
    return (
      <div>
        <Dialog title="Add new task" actions={this.props.actions} modal={false} open={this.props.open} >
          <TextField floatingLabelText="Name" value={this.state.nameTask} onChange={this.handleTextFieldChange} />
          <DatePicker floatingLabelText="Deadline" value={this.state.deadline} onChange={this.handleChangeDate}/>
          <SelectField floatingLabelText="Priority" value={this.state.priority} onChange={this.handleChangeSelectField} >
            <MenuItem value="High" primaryText="High" />
            <MenuItem value="Medium" primaryText="Medium" />
            <MenuItem value="Low" primaryText="Low" />
          </SelectField>
        </Dialog>        
      </div>
    );
  }
}