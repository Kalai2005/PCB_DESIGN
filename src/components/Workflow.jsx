import "../styles/workflow.css";
import { useState } from "react";

const steps = [
  {
    title: "Input Requirements",
    desc: "User enters Vin, Vout, current and constraints"
  },
  {
    title: "AI Analysis",
    desc: "Hybrid AI selects suitable circuit topology"
  },
  {
    title: "Optimization",
    desc: "Components and calculations optimized"
  },
  {
    title: "KiCad Output",
    desc: "Ready-to-edit schematic generated"
  }
];

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="workflow">
      <h2>AI Design Workflow</h2>

      <div className="workflow-steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`workflow-card ${activeStep === index ? "active" : ""}`}
            onMouseEnter={() => setActiveStep(index)}
          >
            <span className="step-number">{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="workflow-indicator">
        <div
          className="indicator-bar"
          style={{ width: `${(activeStep + 1) * 25}%` }}
        ></div>
      </div>
    </section>
  );
}
