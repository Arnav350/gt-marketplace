import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Your GT Storage Solution</h1>
        <p className="hero-subtitle">
          Seamlessly connect with Georgia Tech students to store your belongings during breaks. Safe, affordable, and
          hassle-free storage solutions.
        </p>
        <button className="btn btn-primary hero-cta">Find Storage Space</button>
      </section>

      <section className="features">
        <h2>Why Choose GT PackUp?</h2>
        <div className="features-grid">
          {[
            {
              icon: "🏠",
              title: "Local Storage",
              description: "Find storage space with fellow GT students nearby",
            },
            {
              icon: "💰",
              title: "Student Prices",
              description: "Affordable rates designed for student budgets",
            },
            {
              icon: "🔒",
              title: "Secure Storage",
              description: "Verified GT student hosts and secure locations",
            },
            {
              icon: "📱",
              title: "Easy Booking",
              description: "Simple booking process and flexible schedules",
            },
            {
              icon: "🤝",
              title: "Student Community",
              description: "Connect with fellow GT students for storage solutions",
            },
            {
              icon: "⚡",
              title: "Flexible Options",
              description: "Choose from various service levels to match your needs",
            },
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
