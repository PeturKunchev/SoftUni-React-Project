import { Navigate, Outlet } from "react-router";

export default function ProtectedRouteLoggedIn() {
    const authData = localStorage.getItem('authData');
    const userId = authData ? JSON.parse(authData)._id : null;
    console.log(userId);
    
    return userId ? <Navigate to="/" /> : <Outlet />;
}