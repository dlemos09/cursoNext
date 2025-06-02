'use client';

import { useParams } from 'next/navigation';

export default function ModulesPage() {
  const { courseId } = useParams();

  return (
    <div>
      <h1 className="border border-purple-600 text-fuchsia-400 text-center p-3">Módulos do curso: {courseId}</h1>
      <ul className="border border-amber-700 text-center p-2">
        <li>Módulo 1</li>
        <li>Módulo 2</li>
        <li>Módulo 3</li>
      </ul>
    </div>
  );
}
