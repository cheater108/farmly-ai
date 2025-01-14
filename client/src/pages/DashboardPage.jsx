import { Outlet } from "react-router-dom";
import Sidenav from "../components/Sidenav";

function DashboardPage() {
    return (
        <div className="flex flex-col h-dvh">
            <nav className="flex justify-between items-center px-4 py-3 border-b">
                <p className="font-semibold text-slate-950">farmly.ai</p>
                <div className="flex gap-2">
                    <button className="bg-slate-200 opacity-90 p-2 px-4 rounded-md text-xs font-medium">
                        Logout
                    </button>
                </div>
            </nav>
            <div className="flex-1 flex">
                <div className="w-1/5 flex justify-center items-center p-4">
                    <Sidenav />
                </div>
                <div className="p-4 flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
