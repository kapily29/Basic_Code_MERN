import { Link } from "react-router-dom";
import { Layout } from "../../components";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Layout>
      <div className="home-page">
        <h1>Welcome to Basic MERN Stack</h1>
        <p className="description">
          A properly structured MERN + TypeScript application with MVC architecture.
        </p>
        
        <div className="features">
          <div className="feature-card">
            <h3>Backend (Server)</h3>
            <ul>
              <li>Express.js with TypeScript</li>
              <li>MVC Architecture</li>
              <li>MongoDB with Mongoose</li>
              <li>RESTful API Routes</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <h3>Frontend (Client)</h3>
            <ul>
              <li>React with TypeScript</li>
              <li>Vite for fast development</li>
              <li>Organized folder structure</li>
              <li>React Router for navigation</li>
            </ul>
          </div>
        </div>
        
        <div className="cta-buttons">
          <p className="cta">
            Check the <Link to="/health">Health Check</Link> page to verify backend connectivity!
          </p>
          <p className="cta">
            View the <Link to="/traffic-police">Traffic Police Demo</Link> - Beautiful UI Example!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
