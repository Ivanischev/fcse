import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import Account from "./Pages/Account";

const isAuthenticated = () => !!localStorage.getItem("token");

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <Navigate to={isAuthenticated() ? "/Account" : "/Login"} replace />
    ),
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Account",
    element: <Account />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
