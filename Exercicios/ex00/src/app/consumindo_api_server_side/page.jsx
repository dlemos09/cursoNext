// src/app/consumindo_api_server_side/page.jsx

// Isso já é server-side por padrão no App Router
export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lista de Usuários (Server-side) </h1>
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
