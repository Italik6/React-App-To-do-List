import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import StartDialog from './StartDialog';
import AddTaskDialog from './AddTaskDialog';
import AddButton from './AddButton';
import { TableTasks, testDataIteration } from './TableTasks';

let testData = [
  { index:1, nameTask: "Make breakfast", deadline: "Fri Dec 22 2017", timer: "12", priority: "High"},
  { index:2, nameTask: "Make lunch", deadline: "Fri Dec 22 2017", timer: "12", priority: "High"},
  { index:3, nameTask: "Make dinner", deadline: "Fri Dec 22 2017", timer: "12", priority: "High"},
]

// export const testDataIteration = testData.map((task) => { 
//   return(
//       <TableRow key={task.index}>
//         <TableRowColumn>{task.index}</TableRowColumn>
//         <TableRowColumn>{task.nameTask}</TableRowColumn>
//         <TableRowColumn>{task.deadline}</TableRowColumn>
//         <TableRowColumn>{task.timer}</TableRowColumn>
//         <TableRowColumn>{task.priority}</TableRowColumn>
//       </TableRow>
//   )
// }) 
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
    // testDataIteration.push({ index:3, nameTask: "Make dinner", deadline: "Fri Dec 22 2017", timer: "12", priority: "High"})
  };

  render() {
    const actions = [
      <FlatButton label="Ok" primary={true} keyboardFocused={true} onClick={this.handleSubmitAddTask} />
  ];
  
  return (
      <div>
        <StartDialog />
        <AddTaskDialog open={this.state.open} actions={actions}/>
        <AddButton onClick={this.handleOpen}/>
        <TableTasks />
        {/* <TableTasks nameTask={this.state.nameTask} 
        deadline={this.state.deadline.toDateString()} 
        priority={this.state.priority} 
        timer={this.getTimeRemaining(this.state.deadline.toDateString()).days}/> */}
      </div>
    );
  }
}