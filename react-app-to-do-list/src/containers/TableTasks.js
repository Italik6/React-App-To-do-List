import React from "react";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import './TableTasks.css';

  // Set up timer
let getTimeRemaining = function (endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var days = Math.floor( t/(1000*60*60*24) + 1 );
    return {
      'days': days
    };
  }

const row = (props, i, handleDelete, handleEdit, k) =>
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
      <TableRowColumn className="IconButton">
        <IconButton>
          <EditIcon onClick={handleEdit} index={i}/>
        </IconButton>
      </TableRowColumn>
      <TableRowColumn className="IconButton">
        <IconButton>
          <DeleteIcon onClick={handleDelete} index={i}/>
        </IconButton>
      </TableRowColumn>
    </TableRow>;

export const TableTasks = ({ data, header, handleDelete, handleEdit }) => 
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
      {data.map((x, i) => row(x, i, handleDelete, handleEdit))}
    </TableBody>
  </Table>;
