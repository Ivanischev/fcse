import Container from "../Container/Container";
import Text from "../../ui/Text/Text";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container fullWidth>
        <Text size="s" color="secondary" align="right">
          © {`${new Date().getFullYear()}`} freshcells systems engineering GmbH
          - Alle Rechte Vorbehalten
        </Text>
      </Container>
    </footer>
  );
}

export default Footer;
