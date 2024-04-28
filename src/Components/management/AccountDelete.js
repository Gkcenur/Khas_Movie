import React from 'react';

function AccountDelete({ account, onDelete }) {
  return (
    <div>
      <p>Are you sure you want to delete account "{account.name}"?</p>
      <button onClick={() => onDelete(account.id)}>Delete</button>
    </div>
  );
}

export default AccountDelete;
