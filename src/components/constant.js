import {
  LayoutDashboard,
  Zap,
  FlaskConical,
  HelpCircle,
  BookOpen,
  Users,
  ClipboardList,
} from "lucide-react";

export const SIDEBAR_LINKS = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
    end: true,
  },
  {
    label: "New Optimization",
    path: "/new-optimization",
    icon: Zap,
  },
  {
    label: "ADK",
    path: "/adk",
    icon: FlaskConical,
  },
  {
    label: "DSPy Lab",
    path: "/dspy-lab",
    icon: FlaskConical,
  },
  {
    label: "Doubts Queue",
    path: "/doubts-queue",
    icon: HelpCircle,
  },
  {
    label: "Prompt Library",
    path: "/prompt-library",
    icon: BookOpen,
  },
  {
    label: "Users",
    path: "/users",
    icon: Users,
  },
  {
    label: "QC Ticket Progress",
    path: "/qc-ticket-progress",
    icon: ClipboardList,
  },
];
