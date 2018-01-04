import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export const AddButton = (props) => {
      return (
        <div>
          <FloatingActionButton onClick={props.onClick} className="AddButton">
            <ContentAdd />
          </FloatingActionButton>
        </div>
    );
}
