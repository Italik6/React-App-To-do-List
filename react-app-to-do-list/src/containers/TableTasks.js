import React from 'react';
import { Table, TableHeader, TableHeaderColumn, TableRow, TableBody, TableRowColumn } from 'material-ui/Table';

export const TableTasks = (props) => {
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
                <TableRowColumn>{props.index}</TableRowColumn>
                <TableRowColumn>{props.nameTask}</TableRowColumn>
                <TableRowColumn>{props.deadline}</TableRowColumn>
                <TableRowColumn>{props.timer}</TableRowColumn>
                <TableRowColumn>{props.priority}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table> 
      </div>
    )
}