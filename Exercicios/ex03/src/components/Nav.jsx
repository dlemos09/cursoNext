"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  // usePathname é um hook do Next.js que retorna o caminho atual da URL
  return (
    <nav className="flex items-center justify-end p-7 bg-gray-800 text-white">
      <div className="absolute left-8 top-4">
        <img src="/map.png" alt="Mapa" className="w-30 relative rounded-full h-auto" />
      </div>
      <ul className="flex gap-4 text-amber-300 justify-end">
        <li>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/sobre" ? "active" : ""}`}
            href="/sobre"
          >
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
