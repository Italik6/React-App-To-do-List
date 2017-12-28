import React, { Component } from "react";
import StartDialog from './StartDialog';
import Form from "./AddTaskDialog";
import Table from "./TableTasks";
import { AddButton } from '../components/AddButton';
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
          <Table
            data={this.state.data}
            header={[
              {
                name: "No",
                prop: "no"
              },
              {
                name: "Task",
                prop: "nameTask"
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
