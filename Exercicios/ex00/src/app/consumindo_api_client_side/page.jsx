// pages/users-client.js

'use client';

import { useEffect, useState } from 'react';

export default function UsersClientPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Usuários (Client-Side)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
