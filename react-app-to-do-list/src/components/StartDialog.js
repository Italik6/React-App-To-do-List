import React, { Component } from 'react';
import './StartDialog.css';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class StartDialog extends Component {
    constructor(props) {
        super(props);
        this.state = { errorText: '', value: props.value, open:false };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
      }
  
      handleSubmit = (event) => {
        let password = this.refs.myPasswordValue.input.value;
    // Check default password
          if(password === "123"){
                this.setState({ errorText: '' })
                this.setState({open: false});
          } else if (password !== "123" && password !== "") {
                this.setState({ errorText: "Password is incorrect" })
          } else if (password === ""){
                this.setState({ errorText: "Password is required" })
          }
      };

      handleKeyPress = (event) => {
        if (event.key === 'Enter') {
         this.handleSubmit(event);
        }
      }

render() {
    const actions = [
        <FlatButton label="Submit" primary={true} onClick={this.handleSubmit} />,
    ];

    return (
        <Dialog title="Welcome to the React App!" actions={actions} modal={true} open={this.state.open} >
            <p className="StartDialog-subheader">To use the application it is necessary to enter the password.<br/>
            (default password: 123)</p>
            <TextField errorText={this.state.errorText} hintText="Password Field" floatingLabelText="Password" type="password" ref="myPasswordValue" onKeyPress={this.handleKeyPress}/>
        </Dialog>
    );
  }
}