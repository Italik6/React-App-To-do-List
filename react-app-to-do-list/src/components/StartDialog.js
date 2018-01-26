import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        checkPassword: () => dispatch({type: 'CHECK_PASSWORD'})
    };
  };

class StartDialog extends Component {
    constructor(props) {
        super(props);
        this.state = { errorText: '', open: true };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
      }
     
      handleSubmit = event => {
        let password = this.refs.myPasswordValue.input.value;
    
        this.props.checkPassword();
    // Check default password
          if(password === "123"){
                this.setState({ errorText: '', open: false });
                // Local storage for password
                localStorage.setItem('password', 'checked');
          } else if (password !== "123" && password !== "") {
                this.setState({ errorText: "Password is incorrect" })
          } else if (password === ""){
                this.setState({ errorText: "Password is required" })
          }
      };

      handleKeyPress = event => {
        if (event.key === 'Enter') {
         this.handleSubmit(event);
        }
      }

      componentWillMount(){
          let cookiePassword = localStorage.getItem('password');
          if(cookiePassword === "checked"){
            this.setState({ open: false });
          }
      }

render() {
    const actions = [ <FlatButton label="Submit" primary={true} onClick={this.handleSubmit} /> ];

    return (
            <Dialog title="Welcome to the React App!" actions={actions} modal={true} open={this.state.open} >
                <p className="StartDialog-subheader">To use the application it is necessary to enter the password.<br/>
                (default password: 123)</p>
                <TextField errorText={this.state.errorText}
                hintText="Password Field" 
                floatingLabelText="Password" 
                type="password" 
                ref="myPasswordValue" 
                onKeyPress={this.handleKeyPress}/>
            </Dialog>
    );
  }
}

const StartForm = connect(null, mapDispatchToProps)(StartDialog);

// Proptypes
StartDialog.propTypes = {
    errorText: PropTypes.string,
    value: PropTypes.object,
    open: PropTypes.bool,
  }

  export default StartForm;