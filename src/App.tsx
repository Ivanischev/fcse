import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import styles from "./components/layout/Layout.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <div className={styles.contentWrapper}>
          <AppRouter />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
