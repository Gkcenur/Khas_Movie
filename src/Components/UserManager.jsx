import React, { useState } from 'react';
import './UserManagement.css'; // Ensure this matches the CSS file name

const UserManager = ({ accounts, onAdd, onDelete, onSave, users, deleteUser, selectUser }) => {
  const [editingAccount, setEditingAccount] = useState(null);
  const [editingUser, setEditingUser] = useState(null);

  const handleAccountAdd = (event) => {
    event.preventDefault();
    const { name, role } = event.target;
    onAdd(name.value, role.value);
    event.target.reset(); // Clear the form after submission
  };

  return (
    <div className="user-management">
      <div className="nav-buttons">
        <button className="nav-button">HOME</button>
        <button className="nav-button">ABOUT US</button>
        <button className="nav-button">OUR TEAM</button>
        <button className="nav-button">MY PROFILE</button>
      </div>

      {/* Add Account section with gradient background */}
      <div className="section add-account gradient-background">
        <h2>Add Account</h2>
        <form onSubmit={handleAccountAdd}>
          <input name="name" type="text" placeholder="Enter account name" />
          <select name="role">
            <option value="">Select role</option>
            <option value="Employee">Employee</option>
            <option value="User">User</option>
          </select>
          <button type="submit">Add Account</button>
        </form>
      </div>

      {/* Accounts section with gradient background */}
      <div className="section accounts gradient-background">
        <h2>Accounts</h2>
        {accounts.map((account) => (
          <div key={account.id}>
            <p>{account.name} - {account.role}</p>
            <button onClick={() => setEditingAccount(account)}>Edit</button>
            <button onClick={() => onDelete(account.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Users section with gradient background */}
      <div className="section users gradient-background">
        <h2>Users</h2>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name} - {user.email}</p>
            <button onClick={() => selectUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManager;
