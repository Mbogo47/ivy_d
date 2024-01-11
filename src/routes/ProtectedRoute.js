import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth?.token);
  return token ? <Navigate to="/" /> : children;
};

export default ProtectedRoute;
