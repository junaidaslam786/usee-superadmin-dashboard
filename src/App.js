import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage'
import DashboardPage from './pages/dashboard/dashboardpage';
import ProfilePage from './pages/profile/profile-page/profilePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/profile' element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
