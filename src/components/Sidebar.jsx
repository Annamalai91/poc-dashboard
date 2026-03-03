import { NavLink } from "react-router-dom";
import { SIDEBAR_LINKS } from "./constant";

const linkClass =
  "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-lg font-semibold">DSPy Pipeline</h1>
        <p className="text-xs text-muted-foreground">Prompt Optimization</p>
      </div>

      <nav className="flex flex-col gap-1">
        {SIDEBAR_LINKS.map(({ label, path, icon: Icon, end }) => (
          <NavLink
            key={path}
            to={path}
            end={end}
            className={({ isActive }) =>
              `${linkClass} ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-slate-100"
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
