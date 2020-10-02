import React from 'react'
import Radium from 'radium';
import './useroutput.css'
const userOutput = (props) => {
  const style = {
    '@media(min-width:500px)' : {
      width:'450px'
    }
  };
  return (
    <div className = "useroutput" style={style}>
    <p>username: {props.username}</p>
    <p>dhh</p>
    </div>
  );
};

export default Radium(userOutput);