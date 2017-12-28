import React, { Component } from "react";
import StartDialog from './StartDialog';
import Form from "./AddTaskDialog";
import Table from "./TableTasks";
import { AddButton } from '../components/AddButton';

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { open: false, index: null, nameTask:'', deadline: new Date(), priority:''};
  //   this.handleOpen = this.handleOpen.bind(this);
  //   this.handleSubmitAddTask = this.handleSubmitAddTask.bind(this);
  // }
  state = {
    data: []
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleSubmitAddTask = () => {
    // this.setState({open: false, nameTask: infoTask.nameTask, deadline: infoTask.deadline, priority: infoTask.priority});
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
      <StartDialog />
      <AddButton onClick={this.handleOpen}/>
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
                name: "First name",
                prop: "firstName"
              },
              {
                name: "Last name",
                prop: "lastName"
              },
              {
                name: "Username",
                prop: "username"
              },
              {
                name: "Email",
                prop: "email"
              }
            ]}
          />
          </div>
    );
  }
}

export default Home;
