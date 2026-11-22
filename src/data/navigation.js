
import {
  LayoutDashboard,
  ListTodo,
  Timer,
  Settings,
} from "lucide-react";

export const navigationItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Tasks",
    path: "/tasks",
    icon: ListTodo,
  },
  {
    label: "Focus",
    path: "/focus",
    icon: Timer,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];
