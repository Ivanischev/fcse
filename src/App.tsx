import "./App.css";
import AppRouter from "./providers/AppRouter";
import useAuth from "./hooks/useAuth";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { token, logout } = useAuth();
  return (
    <BrowserRouter>
      <header>
        <h1>logo</h1>
        {token && <button onClick={logout}>Logout</button>}
      </header>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
