"use client";
import { signOut } from "next-auth/react";


export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="text-fuchsia-950 transition-colors cursor-pointer hover:underline decoration-pink-500 "
    >
      Sair
    </button>
  );
}
