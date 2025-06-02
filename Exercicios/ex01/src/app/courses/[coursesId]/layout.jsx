export default function CourseLayout({ children }) {
  return (
    <div>
      <h2 className="border border-purple-600 text-fuchsia-400 text-center p-3">Layout do curso específico</h2>
      {children}
    </div>
  );
}
