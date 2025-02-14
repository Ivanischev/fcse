import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/queries/user/getUser";
import useAuth from "../../hooks/useAuth";
import Container from "../../components/layout/Container";
import styles from "./Account.module.css";
import { UserData } from "../../graphql/queries/user/types";
import Text from "../../components/ui/Text";
import Title from "../../components/ui/Title";

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
          <Title as="h2">Welcome to User Account</Title>
          <Text>
            Name:
            <b> {data?.user.firstName}</b>
          </Text>
          <Text>
            Lastname:
            <b> {data?.user.lastName}</b>
          </Text>
        </div>
      )}
    </Container>
  );
}

export default Account;
