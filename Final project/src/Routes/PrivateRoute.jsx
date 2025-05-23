import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({children}) => {
  const { user } = useSelector((state) => state.auth);
if(user){
    return children;
}
else{
    return <Navigate to="/login" />;
}

};

export default PrivateRoute;
