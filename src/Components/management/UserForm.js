import React from 'react';

function UserList({ users, deleteUser, selectUser }) {
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name} ({user.email})
                    <button onClick={() => selectUser(user)}>Edit</button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default UserList;
