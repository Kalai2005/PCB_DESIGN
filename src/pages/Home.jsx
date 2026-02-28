import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, Settings, Info, ChevronRight } from 'lucide-react';

export const Home = () => (
  <div className="min-h-screen bg-zinc-950 text-zinc-100">
    <section className="hero-section">
      <div className="hero-glow" />
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-badge">
            Next-Gen Hardware Design
          </span>
          <h1 className="hero-title">
            Design Professional PCBs <br /> with AI Intelligence
          </h1>
          <p className="hero-description">
            Generate power supply schematics, component lists, and layout guidelines 
            instantly. Just enter your electrical requirements and let AI do the heavy lifting.
          </p>
          <div className="hero-actions">
            <Link to="/design" className="btn-primary">
              Start Designing <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/about" className="btn-secondary">
              How it Works
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {[
            {
              icon: <Zap className="w-6 h-6 text-emerald-400" />,
              title: "Instant Topology Selection",
              desc: "AI automatically selects Buck, Boost, or Linear regulators based on your efficiency needs. Based on efficiency, power loss, and operating conditions, the system intelligently selects between buck, boost, or linear regulator configurations."
            },
            {
              icon: <Settings className="w-6 h-6 text-emerald-400" />,
              title: "Precise Calculations",
              desc: "Get exact values for inductors, capacitors, and trace widths tailored to your power specs. This eliminates manual calculation errors and reduces design time significantly."
            },
            {
              icon: <Info className="w-6 h-6 text-emerald-400" />,
              title: "Layout Guidelines",
              desc: "Professional advice on component placement and grounding to ensure EMI/EMC compliance. These guidelines help users avoid common layout mistakes that affect efficiency and reliability."
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="feature-card"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);
