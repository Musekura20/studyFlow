
import { NavLink } from "react-router-dom";
import { navigationItems } from "../data/navigation";

function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border px-2 py-2">

      <div className="flex items-center justify-around">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-xs transition-colors ${
                  isActive
                    ? "text-teal font-semibold"
                    : "text-muted hover:text-ink"
                }`
              }
            >
              <Icon size={21} />

              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>

    </nav>
  );
}

export default MobileNav;
