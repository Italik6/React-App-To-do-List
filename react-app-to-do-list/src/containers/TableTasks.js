import React from "react";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";

const row = (props, i) =>
    <TableRow key={`thr-${i}`}>
        <TableRowColumn>
          {props.no}
        </TableRowColumn>
        <TableRowColumn>
          {props.nameTask}
        </TableRowColumn>
        <TableRowColumn>
          {props.deadline.toDateString()}
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
