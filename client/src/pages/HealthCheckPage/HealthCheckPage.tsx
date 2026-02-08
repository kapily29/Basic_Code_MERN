import { useState, useEffect } from "react";
import { Layout } from "../../components";
import { CheckIcon, ErrorIcon, LoaderIcon } from "../../icons";
import { checkHealth } from "../../config/api";
import "./HealthCheckPage.css";

interface HealthStatus {
  success: boolean;
  message: string;
  timestamp: string;
  environment: string;
}

const HealthCheckPage = () => {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [healthData, setHealthData] = useState<HealthStatus | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const checkBackendHealth = async () => {
    setStatus("loading");
    setErrorMessage("");
    
    try {
      const data = await checkHealth();
      setHealthData(data);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : "Failed to connect to backend. Make sure the server is running."
      );
    }
  };

  useEffect(() => {
    checkBackendHealth();
  }, []);

  return (
    <Layout>
      <div className="health-check-page">
        <h1>Backend Health Check</h1>
        <p className="subtitle">
          Testing connection between Frontend and Backend
        </p>

        <div className={`status-card ${status}`}>
          {status === "loading" && (
            <>
              <LoaderIcon size={48} className="status-icon spinning" />
              <h2>Checking Connection...</h2>
              <p>Please wait while we verify the backend status.</p>
            </>
          )}

          {status === "success" && healthData && (
            <>
              <CheckIcon size={48} color="#10b981" className="status-icon" />
              <h2>Connected Successfully!</h2>
              <div className="health-details">
                <div className="detail-row">
                  <span className="label">Status:</span>
                  <span className="value success">{healthData.message}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Environment:</span>
                  <span className="value">{healthData.environment}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Timestamp:</span>
                  <span className="value">
                    {new Date(healthData.timestamp).toLocaleString()}
                  </span>
                </div>
              </div>
            </>
          )}

          {status === "error" && (
            <>
              <ErrorIcon size={48} color="#ef4444" className="status-icon" />
              <h2>Connection Failed</h2>
              <p className="error-message">{errorMessage}</p>
              <div className="help-text">
                <p>Make sure:</p>
                <ul>
                  <li>The backend server is running on port 5000</li>
                  <li>MongoDB is connected</li>
                  <li>CORS is properly configured</li>
                </ul>
              </div>
            </>
          )}
        </div>

        <button className="refresh-btn" onClick={checkBackendHealth}>
          Refresh Status
        </button>
      </div>
    </Layout>
  );
};

export default HealthCheckPage;
