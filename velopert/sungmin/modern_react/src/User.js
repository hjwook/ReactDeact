import React from 'react';

function User({ user }) {
  if (!user) {
    return null;
  }

  return (
    <div>
      <div>
        <b>ID</b>: {user.id}
      </div>
      <div>
        <b>Username:</b> {user.username}
      </div>
    </div>
  );
}

Users.defaultProps = {
  onToggle: () => {
    console.warn('onToggle is missing!');
  }
};

export default User;

/*
function Users({ users }) {
    return (
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    );
  }
*/



