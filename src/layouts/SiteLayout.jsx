import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";

function SiteLayout({ outletContext }) {
  return (
    <div className="min-h-screen bg-[#F5F3ED]">
      <Sidebar />

      <main className="pb-24 md:ml-64 md:pb-0">
        <div className="page-container">
          <Outlet context={outletContext} />
        </div>
      </main>

      <MobileNav />
    </div>
  );
}

export default SiteLayout;