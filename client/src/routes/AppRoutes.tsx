import { Routes, Route } from "react-router-dom";
import { HomePage, HealthCheckPage, TrafficPoliceHomePage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/health" element={<HealthCheckPage />} />
      <Route path="/traffic-police" element={<TrafficPoliceHomePage />} />
    </Routes>
  );
};

export default AppRoutes;
