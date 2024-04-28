// AccountView.js
import React from 'react';

const AccountView = ({ account }) => {
  return (
    <div>
      <h3>Account Details</h3>
      <p>Name: {account.name}</p>
      <p>Role: {account.role}</p> {/* Display the role */}
    </div>
  );
};

export default AccountView;
