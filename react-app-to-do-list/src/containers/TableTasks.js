import React, { Component } from 'react';
import { Table, TableHeader, TableHeaderColumn, TableRow, TableBody, TableRowColumn } from 'material-ui/Table';

let testData = [
  { index:1, nameTask: "Make breakfast", deadline: "Fri Dec 22 2017", timer: "12", priority: "High"},
  { index:2, nameTask: "Make lunch", deadline: "Fri Dec 22 2017", timer: "12", priority: "High"},
  { index:3, nameTask: "Make dinner", deadline: "Fri Dec 22 2017", timer: "12", priority: "High"},
]

const testDataIteration = testData.map((task) => { 
  return(
      <TableRow key={task.index}>
        <TableRowColumn>{task.index}</TableRowColumn>
        <TableRowColumn>{task.nameTask}</TableRowColumn>
        <TableRowColumn>{task.deadline}</TableRowColumn>
        <TableRowColumn>{task.timer}</TableRowColumn>
        <TableRowColumn>{task.priority}</TableRowColumn>
      </TableRow>
  )
}) 

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
            {testDataIteration}
          </TableBody>
        </Table> 
      </div>
      );
    }
  }