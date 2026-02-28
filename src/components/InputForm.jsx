import React from 'react';
import { Zap, Activity } from 'lucide-react';

export const InputForm = ({ formData, setFormData, onSubmit, loading }) => (
  <form onSubmit={onSubmit} className="design-form">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="form-group">
        <label className="form-label">Input Voltage (V)</label>
        <input 
          type="number" 
          required
          value={formData.inputVoltage}
          onChange={e => setFormData({...formData, inputVoltage: e.target.value})}
          className="input-field"
          placeholder="e.g. 12"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Output Voltage (V)</label>
        <input 
          type="number" 
          required
          value={formData.outputVoltage}
          onChange={e => setFormData({...formData, outputVoltage: e.target.value})}
          className="input-field"
          placeholder="e.g. 5"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Output Current (A)</label>
        <input 
          type="number" 
          step="0.1"
          required
          value={formData.outputCurrent}
          onChange={e => setFormData({...formData, outputCurrent: e.target.value})}
          className="input-field"
          placeholder="e.g. 2.0"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Efficiency Target (%)</label>
        <select className="input-field">
          <option>Standard (80%+)</option>
          <option>High Efficiency (90%+)</option>
          <option>Low Ripple</option>
        </select>
      </div>
    </div>

    <div className="form-group" style={{ marginTop: '24px' }}>
      <label className="form-label">Additional Constraints (Optional)</label>
      <textarea 
        value={formData.constraints}
        onChange={e => setFormData({...formData, constraints: e.target.value})}
        className="input-field h-32"
        placeholder="e.g. Small footprint, low EMI, specific IC preference..."
      />
    </div>

    <button 
      type="submit" 
      disabled={loading}
      className="btn-generate"
    >
      {loading ? (
        <>
          <Activity className="w-5 h-5 animate-spin" />
          Analyzing Requirements...
        </>
      ) : (
        <>
          Generate Design <Zap className="w-5 h-5" />
        </>
      )}
    </button>
  </form>
);
