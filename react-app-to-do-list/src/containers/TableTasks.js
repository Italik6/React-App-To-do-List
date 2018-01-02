import React from "react";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import './TableTasks.css';

  // Set up timer
let getTimeRemaining = function (endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var days = Math.floor( t/(1000*60*60*24) + 1 );
    return {
      'days': days
    };
  }

  let handleDelete = () => {
        console.log('dupa')
    }

const row = (props, i) =>
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
      <TableRowColumn className="DeleteButton">
        <IconButton>
          <DeleteIcon onClick={handleDelete}/>
        </IconButton>
      </TableRowColumn>
    </TableRow>;

export const TableTasks = ({ data, header }) => 
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
      {data.map((x, i) => row(x, i))}
    </TableBody>
  </Table>;
