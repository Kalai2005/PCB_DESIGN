import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { InputForm } from '../components/InputForm';
import { generateDesign } from '../services/api';

export const DesignInput = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    inputVoltage: '12',
    outputVoltage: '5',
    outputCurrent: '2',
    constraints: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await generateDesign(formData);
      if (data.id) {
        navigate(`/result/${data.id}`);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to generate design. Please check your API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="design-page">
      <div className="design-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="design-card"
        >
          <div className="design-header">
            <h2 className="design-title">Design Requirements</h2>
            <p className="design-subtitle">Enter your electrical specifications to generate a PCB design.</p>
          </div>
          <InputForm 
            formData={formData} 
            setFormData={setFormData} 
            onSubmit={handleSubmit} 
            loading={loading} 
          />
        </motion.div>
      </div>
    </div>
  );
};
