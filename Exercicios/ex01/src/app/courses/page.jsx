import Link from 'next/link';

const courseList = ['react', 'nextjs', 'node'];

export default function CoursesPage() {
  return (
    <div>
      <h1 className="border border-purple-600 text-fuchsia-400 text-center p-3">Lista de Cursos</h1>
      <ul className='text-amber-500'>
        {courseList.map(course => (
          <li key={course}>
            <Link href={`/courses/${course}`}>{course}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
