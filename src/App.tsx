import './index.css';
import Sidebar from './components/sidebar';
import Products from './pages/products/products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Categories from './pages/categories/categories';
import { useState, useEffect } from 'react';
import Subcategories from './pages/subcategories/subcategories';
import Dashboard from './pages/dashboard/dashboard';
import Clients from './pages/clients/clients';

function App() {
  const [isOwner, setIsOwner] = useState(() => {
    // Check localStorage for the user role
    const storedRole = localStorage.getItem('userRole');
    return storedRole === 'owner'; // Default to owner if storedRole is 'owner'
  });

  const toggleRole = () => {
    const newRole = !isOwner; 
    setIsOwner(newRole);
    localStorage.setItem('userRole', newRole ? 'owner' : 'client');
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOwner={isOwner} />

      <div className="flex-1 ml-64 p-10"> 
        <Routes>
          {isOwner ? ( 
            <>
              <Route path="/produtos" element={<Products />} />
              <Route path="/categorias" element={<Categories />} />
              <Route path="/subcategorias" element={<Subcategories />} />
              <Route path="/clientes" element={<Clients />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Products />} />
            </>
          ) : (  
            <>
              <Route path="/pedidos" element={<p>Futuro</p>} /> 
              <Route path="/" element={<p>Futuro</p>} /> 
            </>
          )}
        </Routes>
      </div>

      <button 
        onClick={toggleRole} 
        className="fixed bottom-10 right-10 p-4 bg-blue-600 text-white rounded-full shadow-lg"
      >
        {isOwner ? "Visão Cliente" : "Visão Dono"} 
      </button>
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        closeOnClick 
        pauseOnHover 
        draggable 
        pauseOnFocusLoss
        theme="colored" 
      />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
