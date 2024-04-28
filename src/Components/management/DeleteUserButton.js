import React from 'react';

function DeleteUserButton({ user, deleteUser }) {
  return (
    <button onClick={() => deleteUser(user.id)}>Delete {user.name}</button>
  );
}

export default DeleteUserButton;
