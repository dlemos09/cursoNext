import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LogoutButton from "@/components/LogoutButton";
import NotAuthenticated from "@/components/NotAuthenticated";


export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  console.log("Session:", session);

  if (!session) {
    return (
      <div>
              
       <NotAuthenticated />

      </div>

    );
  }


  return (
    <div>
      <div>Olá {session?.user?.name}</div>
      <div>Dashboard</div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
}
