import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [count, setCount] = useState(0);

  // Custom hook to get location inside BrowserRouter
  function AppContent() {
    const location = useLocation();
    const hideNavbar = location.pathname.startsWith('/dashboard');
    return (
      <>
        {!hideNavbar && <Navbar />}
        <AppRoutes />
      </>
    );
  }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App
