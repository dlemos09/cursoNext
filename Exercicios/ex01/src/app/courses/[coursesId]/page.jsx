'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CourseDetails() {
  const params = useParams();
  const courseId = params.coursesId;
  if (!courseId) {
    return <p>Curso não encontrado.</p>;
  }
  // Aqui você pode buscar os detalhes do curso usando o courseId
  // Por exemplo, você pode fazer uma chamada a uma API para obter os dados do curso.

  return (
    <div>
      <h1>Curso: {courseId}</h1>
      <p>Detalhes sobre o curso {courseId}</p>
      <Link href={`/courses/${courseId}/modules`}>Ver módulos</Link>
    </div>
  );
}
