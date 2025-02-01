import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_MUTATION } from "../mutations/login";

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
  const navigate = useNavigate();

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
        localStorage.setItem("token", data.login.jwt);
        localStorage.setItem("userId", data.login.user.id);
        setEmail("");
        setPassword("");
        navigate("/Account");
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
    <>
      <h1>Herzlich Willkommen</h1>
      <h2>"Meine Probeaufgabe"</h2>
      <form className="login-form">
        <label className="form-label">
          E-mail
          <input
            type="email"
            placeholder="E-mail"
            className="input"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
          />
        </label>
        <p>
          Bitte verwenden Sie die GraphQL-Mutation mit den angegebenen
          Anmeldeinformationen und vergessen Sie nicht, Backend-Fehler zu
          behandeln, falls Sie ein falsches E-Mail-Login / Passwort angegeben
          haben.
        </p>
        <label className="form-label">
          Passwort
          <input
            type="password"
            placeholder="Passwort"
            className="input"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        <button
          className="submit"
          type="submit"
          onClick={(e: React.FormEvent<HTMLButtonElement>) =>
            loginUserHandler(e)
          }
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </>
  );
}

export default Login;
