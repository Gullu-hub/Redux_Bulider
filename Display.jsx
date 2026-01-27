import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAction, editAction } from './Action';

const Display = () => {
  const data = useSelector((store) => store.users || []);
  const dispatch = useDispatch();

  function deleteData(i) {
    dispatch(deleteAction(i));
  }

  function editData(i) {
    const newValue = prompt('Enter New Value');
    if (newValue) {
      dispatch(editAction(i, newValue));
    }
  }

  return (
    <div>
      {data.map((el, i) => (
        <div key={i}>
          <li>{el.username}</li>
          <button onClick={() => deleteData(i)}>Delete</button>
          <button onClick={() => editData(i)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Display;
