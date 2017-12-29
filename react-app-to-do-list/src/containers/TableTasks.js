import React from "react";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";

  // Set up timer
let getTimeRemaining = function (endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var days = Math.floor( t/(1000*60*60*24) + 1 );
    return {
      'days': days
    };
  }

const row = (props, i, data) =>
    <TableRow key={`thr-${i}`}>
      <TableRowColumn>
        {i + 1 + '.'}
      </TableRowColumn>
      <TableRowColumn>
        {props.nameTask}
      </TableRowColumn>
      <TableRowColumn>
        {props.deadline.toDateString()}
      </TableRowColumn>
      <TableRowColumn>
        {getTimeRemaining(props.deadline.toDateString()).days}
      </TableRowColumn>
      <TableRowColumn>
        {props.priority}
      </TableRowColumn>
    </TableRow>;

export default ({ data, header }) => 
  <Table>
    <TableHeader>
      <TableRow>
        {header.map((x, i) =>
          <TableHeaderColumn key={`thc-${i}`}>
            {x.name}
          </TableHeaderColumn>
        )}
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((x, i) => row(x, i, header))}
    </TableBody>
  </Table>;
