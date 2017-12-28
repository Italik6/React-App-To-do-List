import React, { Component } from "react";
import StartDialog from './StartDialog';
import Form from "./AddTaskDialog";
import TableTasks from "./TableTasks";
import { AddButton } from '../components/AddButton';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { index: null, nameTask:'', deadline: new Date(), priority:'', data: []};
  }

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
      <StartDialog />
          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })}
          />
          <TableTasks
            data={this.state.data}
            header={[
              {
                name: "No",
                prop: "no"
              },
              {
                name: "Task",
                prop: "task"
              },
              {
                name: "Deadline",
                prop: "deadline"
              },
              {
                name: "Timer",
                prop: "timer"
              },
              {
                name: "Priority",
                prop: "priority"
              }
            ]}
          />
          </div>
    );
  }
}

export default Home;
