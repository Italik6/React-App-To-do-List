import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import StartDialog from './StartDialog';
import { AddTaskDialog, infoTask } from './AddTaskDialog';
import { AddButton } from '../components/AddButton';
import { TableTasks } from './TableTasks';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, index: null, nameTask:'', deadline: new Date(), priority:''};
    this.handleOpen = this.handleOpen.bind(this);
    this.handleSubmitAddTask = this.handleSubmitAddTask.bind(this);
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleSubmitAddTask = () => {
    this.setState({open: false, nameTask: infoTask.nameTask, deadline: infoTask.deadline, priority: infoTask.priority});
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
    const actions = [
      <FlatButton label="Ok" primary={true} keyboardFocused={true} onClick={this.handleSubmitAddTask} />
  ];
  
  return (
      <div>
        <StartDialog />
        <AddButton onClick={this.handleOpen}/>
        <AddTaskDialog open={this.state.open} actions={actions}/>
        <TableTasks index={this.state.index} nameTask={this.state.nameTask} deadline={this.state.deadline.toDateString()} timer={this.getTimeRemaining(this.state.deadline.toDateString()).days} priority={this.state.priority}/>
      </div>
    );
  }
}