import useAuth from "../../../hooks/useAuth";
import Button from "../../ui/Button/Button";
import styles from "./Header.module.css";

function Header() {
  const { token, logout } = useAuth();
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="src/assets/logo-freshcells-systems-engineering.svg"
        alt="freshcells systems engineering"
      />
      {token && <Button onClick={logout}>Logout</Button>}
    </header>
  );
}

export default Header;
