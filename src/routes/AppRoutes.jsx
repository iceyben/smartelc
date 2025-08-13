import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../ui/Layout';
import Login from '../pages/Login';
import Products from '../components/Products';
import Dashboard from '../pages/Dashboard';
// import other pages/components as needed

const AppRoutes = () => (
  <Routes>
  <Route path="/" element={<Layout />} />
  <Route path="/login" element={<Login />} />
  <Route path="/products" element={<Products />} />
  <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default AppRoutes;
