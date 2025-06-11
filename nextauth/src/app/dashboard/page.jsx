import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div>Olá {session?.user?.name}</div>
      <div>Dashboard</div>
    </div>
  );
}
