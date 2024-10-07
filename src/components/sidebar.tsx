import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUsers, FaSignOutAlt, FaListAlt, FaClipboardList, FaThList, FaChartPie } from 'react-icons/fa';

interface SidebarItem {
  label: string;
  icon?: JSX.Element;
  link: string;
}

interface SidebarProps {
  isOwner: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOwner }) => {
  const items: SidebarItem[] = isOwner
    ? [  // Dono (Owner)
        {
          label: 'Dashboard',
          icon: <FaChartPie  />,
          link: '/dashboard',
        },
        {
          label: 'Products',
          icon: <FaShoppingCart />,
          link: '/produtos',
        },
        {
          label: 'Categories',
          icon: <FaListAlt />,
          link: '/categorias',
        },
        {
          label: 'Subcategorias',
          icon: <FaThList />,
          link: '/subcategorias',
        },
        {
          label: 'Clientes',
          icon: <FaUsers />,
          link: '/clientes',
        },
      ]
    : [  // Cliente
        {
          label: 'Pedidos',
          icon: <FaClipboardList />,
          link: '/pedidos',
        },
      ];

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-gray-300 shadow-lg transition-all">
      <div className="flex items-center justify-center p-6 text-gray-100">
        <img
          src="/assets/brand/logo.svg"
          alt="Logo"
          className="w-32 h-32"
        />
      </div>
      <ul className="menu p-4">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-all ${
                  isActive ? 'bg-yellow-500 text-gray-900' : 'text-gray-300 hover:bg-yellow-500 hover:text-gray-900'
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
