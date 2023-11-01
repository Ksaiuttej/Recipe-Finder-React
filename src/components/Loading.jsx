import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className="loading-container">
      {/* <CircularProgress /> */}
      <img style={{width:"6rem"}} src="https://i.postimg.cc/3wsX2BdL/loadd.gif" alt="" />
    </div>
  );
};

export default Loading;