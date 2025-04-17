import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
    const token = useSelector((state) => state.auth.token);
    const userType = useSelector((state) => state.auth.user?.type); // Get user type
    const location = useLocation(); // Get current location

    if (!token) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(userType)) {
        // Redirect to an error page or home if user type is not allowed
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;