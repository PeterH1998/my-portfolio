import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `min-h-10 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 sm:px-6 ${
    isActive
      ? "bg-white text-[#3d3329] shadow-sm"
      : "text-[#5c4d43] hover:bg-white/55 focus-visible:bg-white/55"
  }`;

export default function Header() {
  return (
    <header className="absolute inset-x-4 top-4 z-50 flex items-center justify-between gap-3 sm:inset-x-8 sm:top-8 sm:justify-start">
      <NavLink
        to="/projects"
        aria-label="Go to projects"
        className="rounded-full bg-white px-4 py-2 text-xl font-black tracking-normal text-[#3d3329] shadow-sm transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        PH
      </NavLink>

      <nav
        aria-label="Primary navigation"
        className="flex gap-1 rounded-full border border-white/20 bg-white/45 p-1 shadow-sm backdrop-blur-md"
      >
        <NavLink to="/projects" className={navLinkClass}>
          Projects
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
      </nav>
    </header>
  );
}
