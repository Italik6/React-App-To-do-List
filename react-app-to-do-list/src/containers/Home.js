import React, { Component } from 'react';
import './Home.css';
import StartDialog from './StartDialog';
import AddTaskDialog from './AddTaskDialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleSubmitAddTask = this.handleSubmitAddTask.bind(this);
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleSubmitAddTask = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton label="Ok" primary={true} keyboardFocused={true} onClick={this.handleSubmitAddTask} />
  ];
  
  return (
      <div>
        <StartDialog />
        <AddTaskDialog open={this.state.open} actions={actions}/>
        <FloatingActionButton onClick={this.handleOpen} className="Home-AddButton">
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}