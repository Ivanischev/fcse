import { useMutation } from "@apollo/client";
import { useState } from "react";
import { LOGIN_MUTATION } from "../../graphql/mutations/login";
import useAuth from "../../hooks/useAuth";
import styles from "./Login.module.css";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import FormRow from "../../components/ui/FormRow/FormRow";
import Text from "../../components/ui/Text/Text";

interface LoginResponse {
  login: {
    jwt: string;
    user: {
      id: string;
    };
  };
}

interface LoginVariables {
  input: {
    identifier: string;
    password: string;
    provider: string;
  };
}

function Login() {
  const [loginUser] = useMutation<LoginResponse, LoginVariables>(
    LOGIN_MUTATION
  );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const loginUserHandler = async (
    e: React.FormEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await loginUser({
        variables: {
          input: {
            identifier: email,
            password: password,
            provider: "local",
          },
        },
      });

      if (data) {
        login(data.login.jwt, data.login.user.id);
        setEmail("");
        setPassword("");
      } else {
        setError("Prüfen Sie, ob Ihr Login und Ihr Passwort korrekt sind");
      }
    } catch {
      setError(
        "Überprüfen Sie, ob Ihr Login und Ihr Passwort richtig sind oder füllen Sie die Felder korrekt aus"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h1>
          Herzlich Willkommen <strong>"Meine Probeaufgabe"</strong>
        </h1>
        <form className={styles["login-form"]}>
          <FormRow label="E-mail">
            <Input
              type="email"
              placeholder="E-mail"
              className={styles.input}
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
            />
          </FormRow>
          <FormRow>
            <Text size="s" color="secondary">
              Bitte verwenden Sie die GraphQL-Mutation mit den angegebenen
              Anmeldeinformationen und vergessen Sie nicht, Backend-Fehler zu
              behandeln, falls Sie ein falsches E-Mail-Login / Passwort
              angegeben haben.
            </Text>
          </FormRow>
          <FormRow label="Passwort">
            <Input
              type="password"
              placeholder="Passwort"
              className={styles.input}
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </FormRow>

          {error && (
            <Text color="error" size="s" className="mb-4">
              {error}
            </Text>
          )}

          <Button
            fullWidth
            onClick={(e: React.FormEvent<HTMLButtonElement>) =>
              loginUserHandler(e)
            }
          >
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
