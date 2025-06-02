import Link from "next/link";
import BotaoRedirect from "@/components/BotaoRedirect";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-orange-600">Esta é a Dashboard/admin</h1>
      <div className="text-center p-8">
        <h1>Página dashboard</h1>

        <BotaoRedirect />
      </div>
    </div>
  );
};

export default DashboardPage;
