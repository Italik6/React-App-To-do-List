import React from 'react';
import Dialog from 'material-ui/Dialog';

export const Alert = (props) => {
    return (
      <div>
        <Dialog actions={props.actions} modal={false} open={props.open}>
            {props.alertStatement}
        </Dialog>
      </div>
    );
}