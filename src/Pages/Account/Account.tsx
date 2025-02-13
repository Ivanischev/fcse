import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/queries/account";
import useAuth from "../../hooks/useAuth";
import Container from "../../components/layout/Container/Container";
import styles from "./Account.module.css";

interface User {
  firstName: string;
  lastName: string;
}

interface UserData {
  user: User;
}

function Account() {
  const { userId, token } = useAuth();

  const { data, loading, error } = useQuery<UserData, { id: string }>(
    GET_USER,
    {
      variables: {
        id: String(userId),
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    }
  );

  if (error) console.log("GraphQL error:", error.message);

  return (
    <Container>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.content}>
          <h1>Welcome to User Account</h1>
          <p>
            Name:
            <b> {data?.user.firstName}</b>
          </p>
          <p>
            Lastname:
            <b> {data?.user.lastName}</b>
          </p>
        </div>
      )}
    </Container>
  );
}

export default Account;
