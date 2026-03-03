import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Zap,
  FlaskConical,
  HelpCircle,
  BookOpen,
  Users,
  ClipboardList,
} from "lucide-react";

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
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "hover:bg-slate-100"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/new-optimization"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "hover:bg-slate-100"
            }`
          }
        >
          <Zap size={18} />
          New Optimization
        </NavLink>

        <NavLink
          to="/adk"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "hover:bg-slate-100"
            }`
          }
        >
          <FlaskConical size={18} />
          ADK
        </NavLink>

        <NavLink
          to="/dspy-lab"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "hover:bg-slate-100"
            }`
          }
        >
          <FlaskConical size={18} />
          DSPy Lab
        </NavLink>

        <NavLink
          to="/doubts-queue"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "hover:bg-slate-100"
            }`
          }
        >
          <HelpCircle size={18} />
          Doubts Queue
        </NavLink>

        <NavLink
          to="/prompt-library"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "hover:bg-slate-100"
            }`
          }
        >
          <BookOpen size={18} />
          Prompt Library
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "hover:bg-slate-100"
            }`
          }
        >
          <Users size={18} />
          Users
        </NavLink>

        <NavLink
          to="/qc-ticket-progress"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "hover:bg-slate-100"
            }`
          }
        >
          <ClipboardList size={18} />
          QC Ticket Progress
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
