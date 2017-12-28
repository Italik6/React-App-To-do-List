import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { priority: "High", nameTask: 'Task', deadline: new Date() };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleChangeSelectField = this.handleChangeSelectField.bind(this);
  }
  state = {
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    username: "",
    usernameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: ""
  };
  handleTextFieldChange = (event) =>{
    this.setState({
        nameTask: event.target.value,  
    });
   }
    handleChangeSelectField = (event, index, priority) => {
      this.setState(
          {priority}
        );
 
    }

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChangeDate = (event, date) => {
    this.setState({
      deadline: date,   });

    }

  validate = () => {
    let isError = false;
    const errors = {
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailError: "",
      passwordError: ""
    };

    if (this.state.username.length < 5) {
      isError = true;
      errors.usernameError = "Username needs to be atleast 5 characters long";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        username: "",
        usernameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
      });
    }
  };
handleTextFieldChange = (event) =>{
    this.setState({
        nameTask: event.target.value,  
    });
}

  render() {
    return (
    //   <div>
    //   <Dialog title="Add new task" actions={this.props.actions} modal={false} open={this.props.open} >
    //     <TextField floatingLabelText="Name" value={this.state.nameTask} onChange={this.handleTextFieldChange} />
    //     <DatePicker floatingLabelText="Deadline" value={this.state.deadline} onChange={this.handleChangeDate}/>
    //     <SelectField floatingLabelText="Priority" value={this.state.priority} onChange={this.handleChangeSelectField} >
    //       <MenuItem value="High" primaryText="High" />
    //       <MenuItem value="Medium" primaryText="Medium" />
    //       <MenuItem value="Low" primaryText="Low" />
    //     </SelectField>
    //   </Dialog>        
    // </div>
      <form>
        <TextField
          name="firstName"
          hintText="First name"
          floatingLabelText="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
          errorText={this.state.firstNameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="lastName"
          hintText="Last Name"
          floatingLabelText="Last Name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
          errorText={this.state.lastNameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="username"
          hintText="Username"
          floatingLabelText="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
          errorText={this.state.usernameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="email"
          hintText="Email"
          floatingLabelText="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
          errorText={this.state.emailError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
          errorText={this.state.passwordError}
          type="password"
          floatingLabelFixed
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}
