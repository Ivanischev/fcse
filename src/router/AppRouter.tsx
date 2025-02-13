import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Account from "../Pages/Account/Account";
import useAuth from "../hooks/useAuth";

const AppRouter = () => {
  const { token } = useAuth();
  return (
    <Routes>
      <Route
        path="/Login"
        element={token ? <Navigate to="/Account" /> : <Login />}
      />
      <Route
        path="/account"
        element={token ? <Account /> : <Navigate to="/Login" />}
      />
      <Route
        path="*"
        element={<Navigate to={token ? "/Account" : "/Login"} />}
      />
    </Routes>
  );
};

export default AppRouter;
