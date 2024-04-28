// UserList.js
import React from 'react';

const UserList = ({ accounts, deleteAccount, setEditingAccountId, editingAccountId }) => {
  return (
    <div>
      {accounts.map((account) => (
        <div key={account.id}>
          <p>ID: {account.id}</p>
          <p>Name: {account.name}</p>
          {/* Include other account details here */}
          <button onClick={() => setEditingAccountId(account.id)}>Edit</button>
          <button onClick={() => deleteAccount(account.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
