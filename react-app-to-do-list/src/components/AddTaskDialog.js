import React, { Component } from 'react';
import './AddTaskDialog.css';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

export default class AddTaskDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "High", textFieldValue: 'Task', controlledDate:  new Date() };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleChangeSelectField = this.handleChangeSelectField.bind(this);
  }

  handleTextFieldChange = (event) =>{
    this.setState({
        textFieldValue: event.target.value,
    });
  }

  handleChangeSelectField = (event, index, value) => {
      this.setState(
        {value}
      );
  }

  handleChangeDate = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  };
// Set up timer
  getTimeRemaining = function (endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var days = Math.floor( t/(1000*60*60*24) + 1 );
    return {
      'days': days
    };
  }

  render() {
    return (
      <div>
        <Dialog title="Add new task" actions={this.props.actions} modal={false} open={this.props.open} >
          <TextField floatingLabelText="Name" value={this.state.textFieldValue} onChange={this.handleTextFieldChange} />
          <DatePicker floatingLabelText="Deadline" value={this.state.controlledDate} onChange={this.handleChangeDate}/>
          <SelectField floatingLabelText="Priority" value={this.state.value} onChange={this.handleChangeSelectField} >
            <MenuItem value="High" primaryText="High" />
            <MenuItem value="Medium" primaryText="Medium" />
            <MenuItem value="Low" primaryText="Low" />
          </SelectField>
        </Dialog>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>No</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Deadline</TableHeaderColumn>
              <TableHeaderColumn>Timer</TableHeaderColumn>
              <TableHeaderColumn>Priority</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>{this.state.textFieldValue}</TableRowColumn>
              <TableRowColumn>{this.state.controlledDate.toDateString()}</TableRowColumn>
              <TableRowColumn>{this.getTimeRemaining(this.state.controlledDate.toDateString()).days}</TableRowColumn>
              <TableRowColumn>{this.state.value}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}