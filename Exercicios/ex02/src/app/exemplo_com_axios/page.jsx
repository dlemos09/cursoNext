import axios from "axios";

export default async function ExemploPage() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const users = res.data; // Com axios, os dados vêm dentro de res.data

  return (
    <main>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}
