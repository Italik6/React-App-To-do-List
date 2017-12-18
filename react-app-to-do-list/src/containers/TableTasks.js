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
                <TableRowColumn textFieldValue={this.props.textFieldValue}></TableRowColumn>
                <TableRowColumn controlledDate={this.props.controlledDate}></TableRowColumn>
                <TableRowColumn timer={this.props.timer}></TableRowColumn>
                <TableRowColumn priority={this.props.priority}></TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      );
    }
  }