import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage'
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
