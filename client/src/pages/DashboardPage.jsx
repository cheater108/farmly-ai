function DashboardPage() {
    return (
        <div className="flex flex-col h-dvh">
            <nav className="flex justify-between items-center px-4 py-3 bg-green-400">
                <p className="font-semibold text-slate-950">farmly.ai</p>
                <div className="flex gap-2">
                    <button className="bg-slate-200 opacity-90 p-2 px-4 rounded-md text-xs font-medium">
                        Logout
                    </button>
                </div>
            </nav>
            <div className="flex-1"></div>
        </div>
    );
}

export default DashboardPage;
