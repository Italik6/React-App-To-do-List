import React, { Component } from 'react';
import './Home.css';
import StartDialog from '../components/StartDialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class Home extends Component {

  handleClick = (event) => {
   
  }

  render() {
    return (
      <div>
        <StartDialog />
        <FloatingActionButton onClick={this.handleClick} className="Home-AddButton">
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}