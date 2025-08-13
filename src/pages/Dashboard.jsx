
import React, { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { auth } from '../components/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    setTimeout(async () => {
      await signOut(auth);
      navigate('/login');
    }, 1200);
  };

  return (
    <div className={`p-8 relative transition-opacity duration-700 ${loggingOut ? 'opacity-0' : 'opacity-100'}`}>
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 text-white hover:text-red-800 text-2xl"
        title="Logout"
        disabled={loggingOut}
      >
        <FiLogOut />
      </button>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p>Welcome to your dashboard! Here you can manage products and view your account.</p>
      {/* Add admin controls and user info here */}
      {loggingOut && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <span className="text-white text-lg animate-pulse">Logging out...</span>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
