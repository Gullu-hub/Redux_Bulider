import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { myAction } from './Action';

export default function Input() {
  const [state, setState] = useState({
    username: ""
  });

  const dispatch = useDispatch();

  function handleText(e) {
    setState({
      username: e.target.value
    });
  }

  function handleSubmit() {
    dispatch(myAction(state));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={handleText}
      />
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
}

