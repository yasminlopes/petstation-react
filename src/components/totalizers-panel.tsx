import React from 'react';

interface TotalizerProps {
  icon: React.ReactNode;
  title: string;
  value: string | number
}

const TotalizersPanel: React.FC<TotalizerProps> = ({ icon, title, value }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-md shadow-md flex items-center border border-gray-200">
      <div className="text-4xl text-primary mr-4">{icon}</div>
      <div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-lg text-white">{value}</p>
      </div>
    </div>
  )
} 

export default TotalizersPanel
