import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-3xl font-bold mb-6">User Dashboard</h2>
      <div className="flex gap-6 border-b border-slate-800 mb-8">
        <NavLink
          to="/dashboard/stats"
          className={({ isActive }) =>
            `pb-4 px-2 transition-all ${isActive ? "border-b-2 border-blue-500 text-blue-500" : "text-slate-500"}`
          }
        >
          Statistics
        </NavLink>
        <button className="pb-4 px-2 text-slate-700 cursor-not-allowed">
          Settings (Locked)
        </button>
      </div>

      <div className="bg-slate-900/30 p-8 rounded-2xl border border-dashed border-slate-800">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
