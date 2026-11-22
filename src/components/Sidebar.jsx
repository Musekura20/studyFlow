
import { NavLink } from "react-router-dom";
import { BookOpen, Sparkles } from "lucide-react";
import { navigationItems } from "../data/navigation";

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-ink text-white fixed left-0 top-0">

      {/* Brand */}
      <div className="px-7 pt-8 pb-10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-teal flex items-center justify-center">
            <BookOpen size={25} />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              StudyFlow
            </h1>
            <p className="text-xs text-slate-400 tracking-wider">
              YOUR STUDY SPACE
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 flex-1">
        <p className="text-xs uppercase tracking-widest text-slate-400 px-4 mb-4">
          Workspace
        </p>

        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? "bg-teal text-white shadow-lg shadow-teal/20"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <Icon size={20} />
                <span className="font-medium">
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Sidebar footer */}
      <div className="p-5">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={17} className="text-gold" />
            <span className="text-sm font-semibold">
              Keep going!
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Small steps every day lead to great achievements.
          </p>
        </div>

        <p className="text-xs text-slate-500 text-center mt-5">
          StudyFlow © 2026
        </p>
      </div>

    </aside>
  );
}

export default Sidebar;
