import React from 'react';
//import Radium from 'radium';
import Styled from 'styled-components';

const StyledDiv = Styled.div`  
  width: 60%;
  margin: 16px auto;
  border: 1px solid #333;
  padding: 16px;
  background: #666;
  
@media(min-width:500px) : {
  width:450px;
}
`;
//import './Person.css'
  
  const person = (props) =>{
  
  return( 
    //<div className ="person" style = {style}>
    <StyledDiv>
    <p>I'm {props.name} and I'm {props.age} year old!</p>
    <p>{props.children}</p>
    <input type = "text" onChange = {props.changed} value = {props.name}/>
  </StyledDiv>
)
}; 


export default person;