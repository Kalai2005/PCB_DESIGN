import React, { useState } from 'react';
import { motion } from 'motion/react';
import Workflow from '../components/Workflow';
import "../styles/about.css";

export const About = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="about-page">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
        >
          <div className="about-header">
            <h1 className="about-title">About AI Assisted PCB Generator</h1>
            <p className="about-desc">
              AI Assisted PCB Generator is an intelligent web-based application
              designed to simplify power supply PCB design using AI-driven decision
              logic and automation.
            </p>
          </div>

          <Workflow />

          <div style={{ marginTop: '32px' }}>
            {/* Privacy Policy */}
            <section id="privacy" className="policy-card">
              <div
                className="policy-header"
                onClick={() => toggleSection("privacy")}
              >
                <h2>Privacy Policy</h2>
                <span>{openSection === "privacy" ? "−" : "+"}</span>
              </div>

              <div
                className={`policy-content ${
                  openSection === "privacy" ? "open" : ""
                }`}
              >
                <p>
                  This application collects only the design parameters entered by the
                  user such as voltage and current values. No personal or sensitive
                  information is stored, shared, or sold. All data is used solely for
                  generating PCB design outputs.
                </p>
              </div>
            </section>

            {/* Terms of Service */}
            <section id="terms" className="policy-card">
              <div
                className="policy-header"
                onClick={() => toggleSection("terms")}
              >
                <h2>Terms of Service</h2>
                <span>{openSection === "terms" ? "−" : "+"}</span>
              </div>

              <div
                className={`policy-content ${
                  openSection === "terms" ? "open" : ""
                }`}
              >
                <p>
                  This tool is provided for educational and prototype development
                  purposes. The generated PCB designs should be reviewed and verified
                  by qualified engineers before use in real-world applications.
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
