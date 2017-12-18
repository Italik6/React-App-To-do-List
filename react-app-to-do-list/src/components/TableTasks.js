import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

export default class TableTasks extends Component {
    render() {
      return (
      <div>
         <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>No</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Deadline</TableHeaderColumn>
              <TableHeaderColumn>Timer</TableHeaderColumn>
              <TableHeaderColumn>Priority</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>{this.props.textFieldValue}</TableRowColumn>
              <TableRowColumn>{this.props.controlledDate}</TableRowColumn>
              <TableRowColumn>{this.props.timer}</TableRowColumn>
              <TableRowColumn>{this.props.priority}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table> 
      </div>
      );
    }
  }