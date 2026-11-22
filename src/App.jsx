import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import SiteLayout from "./layouts/SiteLayout";

import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/TasksPage";
import FocusPage from "./pages/FocusPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<SiteLayout />}>

          <Route index element={<DashboardPage />} />

          <Route path="tasks" element={<TasksPage />} />

          <Route path="focus" element={<FocusPage />} />

          <Route path="settings" element={<SettingsPage />} />

          <Route path="*" element={<NotFoundPage />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;