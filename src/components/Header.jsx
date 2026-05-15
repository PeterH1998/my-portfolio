import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="absolute top-8 left-8 flex items-center gap-4 z-50">
      {/* MW Logo Pill */}
      <div className="bg-white rounded-full px-4 py-2 font-black text-xl tracking-tighter shadow-sm">
        PH
      </div>

      {/* Navigation Toggle */}
      <nav className="bg-white/40 backdrop-blur-md rounded-full p-1 flex gap-1 shadow-sm border border-white/20">
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive ? "bg-white shadow-sm" : "hover:bg-white/50"
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive ? "bg-white shadow-sm" : "hover:bg-white/50"
            }`
          }
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}
