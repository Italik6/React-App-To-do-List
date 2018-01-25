import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';

export const MoreFeatures = props => {
    return (
      <div>
        <LinearProgress mode="indeterminate" />
        <p className="TextInfo">More features coming soon...</p>
        <LinearProgress mode="indeterminate" />
        <RaisedButton className='BtnBottom' label="Go back to home page" fullWidth={true} href="/home" />
      </div>
  );
}