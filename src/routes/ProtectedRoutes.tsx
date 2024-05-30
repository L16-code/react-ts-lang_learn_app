import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutesProps{
    isAuthenticated: boolean;
    children?:ReactNode;
}

const ProtectedRoutes:React.FC<ProtectedRoutesProps>=({isAuthenticated,children})=>{
    if(!isAuthenticated){
        return <Navigate to="/login" />;
    }
    return children ? children :<Outlet/>
}
export default ProtectedRoutes;