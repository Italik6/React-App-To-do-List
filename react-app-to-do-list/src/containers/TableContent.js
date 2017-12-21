import React, { Component } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

let testData = [
    { index:1, nameTask: "Make breakfast", deadline: "Fri Dec 22 2017", timer: "12", priority: "High"}
  ]

export default class TableContent extends Component {
    render() {
      return (
          <TableRow>
            <TableRowColumn>1.</TableRowColumn>
            <TableRowColumn>{testData[0].nameTask}</TableRowColumn>
            <TableRowColumn>{this.props.deadline}</TableRowColumn>
            <TableRowColumn>{this.props.timer}</TableRowColumn>
            <TableRowColumn>{this.props.priority}</TableRowColumn>
          </TableRow>
     );
   }
}