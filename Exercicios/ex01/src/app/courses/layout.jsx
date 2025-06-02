export default function CoursesLayout({ children }) {
  return (
    <section>
      <nav>
        <p>Menu de Cursos</p>
      </nav>
      <div>{children}</div>
    </section>
  );
}
