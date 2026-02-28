import React from 'react';
import { Settings, Layers, Activity, FileCode, CheckCircle2 } from 'lucide-react';

export const ResultCard = ({ design }) => {
  const { data } = design;
  return (
    <div className="result-grid">
      {/* Left Column: Specs & Components */}
      <div className="lg:col-span-1" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <section className="result-card-section">
          <h3 className="section-title">
            <Settings className="w-5 h-5 text-emerald-500" /> Input Specs
          </h3>
          <div className="spec-grid">
            <div className="spec-item">
              <p className="spec-label">Input</p>
              <p className="spec-value">{design.input_voltage}V</p>
            </div>
            <div className="spec-item">
              <p className="spec-label">Output</p>
              <p className="spec-value">{design.output_voltage}V</p>
            </div>
            <div className="spec-item">
              <p className="spec-label">Current</p>
              <p className="spec-value">{design.output_current}A</p>
            </div>
            <div className="spec-item">
              <p className="spec-label">Efficiency</p>
              <p className="spec-value spec-value-accent">{data.calculations.efficiency}</p>
            </div>
          </div>
        </section>

        <section className="result-card-section">
          <h3 className="section-title">
            <Layers className="w-5 h-5 text-emerald-500" /> Bill of Materials
          </h3>
          <div className="bom-list">
            {data.components.map((comp, i) => (
              <div key={i} className="bom-item">
                <div>
                  <p className="bom-name">{comp.name}: {comp.value}</p>
                  <p className="bom-desc">{comp.description}</p>
                </div>
                <span className="bom-tag">{comp.type}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Middle/Right Column: Visualization & Guidelines */}
      <div className="lg:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <section className="result-card-section" style={{ padding: '32px' }}>
          <h3 className="section-title">
            <Activity className="w-5 h-5 text-emerald-500" /> Design Analysis
          </h3>
          <p className="analysis-text">
            {data.explanation}
          </p>
          
          <div className="analysis-grid">
            <div className="form-group">
              <h4 className="analysis-subtitle">Calculated Values</h4>
              <div className="calc-list">
                <div className="calc-item">
                  <span className="calc-label">Inductor (L)</span>
                  <span className="calc-value">{data.calculations.inductor}</span>
                </div>
                <div className="calc-item">
                  <span className="calc-label">Output Cap (Cout)</span>
                  <span className="calc-value">{data.calculations.capacitor}</span>
                </div>
                <div className="calc-item">
                  <span className="calc-label">Trace Width</span>
                  <span className="calc-value">{data.calculations.traceWidth}</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <h4 className="analysis-subtitle">Layout Guidelines</h4>
              <ul className="guidelines-list">
                {data.layoutGuidelines.map((guide, i) => (
                  <li key={i} className="guideline-item">
                    <CheckCircle2 className="guideline-icon w-4 h-4" />
                    {guide}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="result-card-section" style={{ padding: '32px' }}>
          <h3 className="section-title">
            <FileCode className="w-5 h-5 text-emerald-500" /> Schematic Preview
          </h3>
          <div className="schematic-preview">
            <div className="result-grid-bg" />
            
            <div className="schematic-content">
              <div className="schematic-block">VIN</div>
              <div className="schematic-block schematic-block-large">{data.components[0]?.value || 'IC'}</div>
              <div className="schematic-block">VOUT</div>
              
              {/* Simple SVG lines for connections */}
              <svg className="schematic-svg">
                <line x1="20%" y1="50%" x2="40%" y2="50%" stroke="#10b981" strokeWidth="2" strokeDasharray="4" />
                <line x1="60%" y1="50%" x2="80%" y2="50%" stroke="#10b981" strokeWidth="2" strokeDasharray="4" />
              </svg>
            </div>
          </div>
          <p className="schematic-footer">
            Simplified visual representation. Download the KiCad project for full schematic details.
          </p>
        </section>
      </div>
    </div>
  );
};
