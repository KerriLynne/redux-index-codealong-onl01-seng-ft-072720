//a functional component that returns an li displaying props
//(regular function component- no Redux related code)

import React from 'react'
 
const Todo = props => {
  return (
    <li>{props.text}</li>
  );
};
 
export default Todo;