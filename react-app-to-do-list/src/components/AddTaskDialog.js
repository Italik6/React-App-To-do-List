import React, { Component } from 'react';
import './AddTaskDialog.css';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';

export default class AddTaskDialog extends Component {

  render() {
    return (
      <div>
        <Dialog title="Add new task" actions={this.props.actions} modal={false} open={this.props.open} >
          Create your task
          <DatePicker hintText="Date Picker" />
        </Dialog>
      </div>
    );
  }
}