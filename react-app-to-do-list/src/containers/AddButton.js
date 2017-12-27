import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './Home.css';


export default class AddButton extends Component {
   
   render() {
      return (
        <FloatingActionButton onClick={this.props.onClick} className="Home-AddButton">
          <ContentAdd />
        </FloatingActionButton>
    );
}
}
