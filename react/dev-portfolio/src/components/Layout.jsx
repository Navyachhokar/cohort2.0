import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  const linkStyle = ({ isActive }) =>
    `flex flex-col md:flex-row items-center gap-2 md:gap-3 p-2 md:p-3 rounded-xl transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/40"
        : "text-slate-400 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-950 text-slate-100">
     
      <aside className="fixed bottom-0 left-0 right-0 z-50 w-full md:static md:w-72 border-t md:border-t-0 md:border-r border-slate-800 p-4 md:p-8 flex flex-row md:flex-col justify-around md:justify-start gap-0 md:gap-8 bg-slate-900/90 md:bg-slate-900/50 backdrop-blur-xl">
      
        <div className="hidden md:block text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          NAVYA.DEV
        </div>

        <nav className="flex flex-row md:flex-col w-full gap-4 md:gap-2 justify-evenly md:justify-start">
          <NavLink to="/" className={linkStyle}>
            <span className="text-xl md:text-base">🏠</span>
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest">
              Home
            </span>
          </NavLink>
          <NavLink to="/dashboard/stats" className={linkStyle}>
            <span className="text-xl md:text-base">📊</span>
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest">
              Stats
            </span>
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-12 mb-20 md:mb-0 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
