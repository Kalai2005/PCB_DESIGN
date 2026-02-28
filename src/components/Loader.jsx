import React from 'react';
import { Activity } from 'lucide-react';

export const Loader = ({ message = "Loading..." }) => (
  <div className="loader-container">
    <div className="loader-content">
      <Activity className="loader-icon" />
      <p className="loader-message">{message}</p>
    </div>
  </div>
);
