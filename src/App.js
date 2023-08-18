import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import DashboardPage from "./pages/dashboard/dashboardpage";
import ProfilePage from "./pages/profile/profile-page/profilePage";
import ProtectedRoute from "./middleware/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route index element={<DashboardPage />} />
      </Route>
      <Route path="/profile" element={<ProtectedRoute />}>
        <Route index element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
