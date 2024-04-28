// AnimatedUserList.js

import React from 'react';
import { useSpring, animated } from 'react-spring';

function AnimatedUserList({ users }) {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fade}>
      {/* User list content */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </animated.div>
  );
}

export default AnimatedUserList;
