import React from 'react';
import './Copyright.css';

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright">
      <p>© {currentYear} All Rights Reserved</p>
    </div>
  );
};

export default Copyright; 