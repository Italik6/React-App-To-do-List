import React, { Component } from 'react';
import TableContent from '../containers/TableContent';
import { Table, TableHeader, TableHeaderColumn, TableRow, TableBody } from 'material-ui/Table';

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
            <TableContent priority={this.props.priority} timer={this.props.timer} deadline={this.props.deadline} />
          </TableBody>
        </Table> 
      </div>
      );
    }
  }