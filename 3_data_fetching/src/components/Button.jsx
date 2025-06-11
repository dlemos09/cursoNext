'use client';
const Button = ({ children }) => {
  return (
    <button
      type="submit"
      onClick={(e) => {
        if (!confirm("Tem certeza que deseja deletar esta tarefa?")) {
          e.preventDefault();
        }
      }}
      className="hover:text-red-600 transition-colors cursor-pointer"
    >
      <i className="bi bi-trash-fill"></i>
      {children}
    </button>
  );
};
export default Button;