import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import DashboardPage from "./pages/dashboard/dashboardpage";
import ProfilePage from "./pages/profile/profile-page/profilePage";
import ProtectedRoute from "./middleware/ProtectedRoutes";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllUsersPage from "./pages/users/AllUsersPage";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route index element={<DashboardPage />} />
        </Route>
        <Route path="/profile" element={<ProtectedRoute />}>
          <Route index element={<ProfilePage />} />
        </Route>
        <Route path="/all-users" element={<AllUsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
