import React, { Component } from "react";
import StartDialog from './StartDialog';
import AddTaskDialog from "./AddTaskDialog";
import TableTasks from "./TableTasks";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: []};
  }

  // Set up timer
  getTimeRemaining = function (endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var days = Math.floor( t/(1000*60*60*24) + 1 );
    return {
      'days': days
    };
  }
  
  handleSubmit = (submission) =>{
    this.setState({
    data: [...this.state.data, submission]
 })
}

  render() {
    return (
      <div>
      <StartDialog />
          <AddTaskDialog onSubmit={this.handleSubmit} />
          <TableTasks
            data={this.state.data}
            header={[{ name: "No"}, { name: "Task" }, { name: "Deadline" }, { name: "Priority" }]}
          />
      </div>
    );
  }
}

export default Home;
