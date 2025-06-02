export default async function TodosPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();

  return (
    <main>
      <h1>Todos List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
          </li>
        ))}
      </ul>
    </main>
  );
}
