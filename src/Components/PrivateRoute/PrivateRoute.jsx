import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) return <span className="loading loading-bars loading-lg"></span>


  if(user){
    return children
  }
  return <Navigate to={'/login'} state={{form: location}} replace={true} />
};

export default PrivateRoute;