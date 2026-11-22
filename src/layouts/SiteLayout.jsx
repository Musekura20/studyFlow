
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";

function SiteLayout() {
  return (
    <div className="min-h-screen bg-ivory">

      <Sidebar />

      <main className="md:ml-64 min-h-screen pb-24 md:pb-0">
        <div className="page-container">
          <Outlet />
        </div>
      </main>

      <MobileNav />

    </div>
  );
}

export default SiteLayout;