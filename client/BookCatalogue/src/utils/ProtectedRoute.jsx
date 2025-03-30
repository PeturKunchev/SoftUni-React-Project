import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
    const authData = localStorage.getItem('authData');
    const userId = authData ? JSON.parse(authData)._id : null;
    return userId ? <Outlet/> : <Navigate to={'/login'}/>
}