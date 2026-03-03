import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
