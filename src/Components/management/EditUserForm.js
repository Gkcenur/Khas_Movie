// EditUserForm.js
import React, { useState } from 'react';

function EditUserForm({ user, editUser, cancelEditing }) {
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(user.id, name, role); // Pass the role to the editUser function
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="employee">Employee</option>
      </select>
      <button type="submit">Save</button>
      <button type="button" onClick={cancelEditing}>Cancel</button>
    </form>
  );
}

export default EditUserForm;
