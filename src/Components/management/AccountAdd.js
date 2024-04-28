// AccountAdd.js
import React, { useState } from 'react';

const AccountAdd = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !role) return;
    onAdd(name, role); // Pass the role when adding an account
    setName('');
    setRole('');
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
        <option value="">Select role</option>
        <option value="Employee">Employee</option>
        <option value="User">User</option>
      </select>
      <button type="submit">Add Account</button>
    </form>
  );
};

export default AccountAdd;
