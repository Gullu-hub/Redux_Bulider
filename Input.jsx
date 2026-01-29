import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { myAction } from '../Component/Redus/Action';
import './input.css';

export default function Input() {
  const [state, setState] = useState({ username: "" });
  const dispatch = useDispatch();

  function handleText(e) {
    setState({ username: e.target.value });
  }

  function handleSubmit() {
    if (!state.username.trim()) return;
    dispatch(myAction(state));
    setState({ username: "" });
  }

  return (
    <div className="input-container">
      <h3 className="input-title">Add New User</h3>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter username"
          value={state.username}
          onChange={handleText}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
}
