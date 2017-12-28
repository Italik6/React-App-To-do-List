import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './AddButton.css';

export const AddButton = (props) => {
      return (
        <FloatingActionButton onClick={props.onClick} className="AddButton">
          <ContentAdd />
        </FloatingActionButton>
    );
}
