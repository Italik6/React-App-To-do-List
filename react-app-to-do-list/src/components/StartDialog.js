import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

import { checkPassword } from "../actions/index";
import { connect } from "react-redux";

// import { createStore } from "redux";
// import { Provider } from 'react-redux'

// const reducer = (state={errorText: '', open: true}, action) => {
//     switch(action.type) {
//         case "CHECK_PASSWORD": {
//             debugger
//             return state = {...state, open: false};
//         }
//         default:
//             return state;
//     }
// }

// const store = createStore(reducer, {
//     errorText: '',
//     open:true
// });

// store.subscribe(() => {
//     debugger
//     console.log('store change', store.getState())
// })

// store.dispatch({type: "CHECK_PASSWORD"})


const mapDispatchToProps = dispatch => {
    return {
        checkPassword: () => dispatch(checkPassword())
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
    // Check default password
          if(password === "123"){
                this.setState({ errorText: '', open: false})
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

render() {
    const actions = [ <FlatButton label="Submit" primary={true} onClick={this.handleSubmit} /> ];

    return (
        // <Provider store={store} >
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
        // </Provider>
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