// AccountEdit.js
import React, { useState } from 'react';

const AccountEdit = ({ account, onSave }) => {
  const [name, setName] = useState(account.name);
  const [role, setRole] = useState(account.role); // Set initial role value

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(account.id, name, role);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter account name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="Employee">Employee</option>
        <option value="User">User</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default AccountEdit;
