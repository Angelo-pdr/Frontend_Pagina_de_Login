import { Navigate } from "react-router-dom";
import Login from '../login'

function privateRouter(){
  const user = localStorage.getItem('user')
  return user ? <Navigate to={'/welcome'}/>  : <Login />
}

export default privateRouter
