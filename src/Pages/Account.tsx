import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries/account";
import useAuth from "../hooks/useAuth";

interface User {
  firstName: string;
  lastName: string;
}

interface UserData {
  user: User;
}

function Account() {
  const { userId, token, logout } = useAuth();

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

  if (loading) return <p>Loading...</p>;
  if (error) console.log("GraphQL error:", error.message);

  return (
    <>
      <h1>User Account</h1>
      <p>
        Name:
        <b> {data?.user.firstName}</b>
      </p>
      <p>
        Lastname:
        <b> {data?.user.lastName}</b>
      </p>
      <button onClick={logout}>Log Out</button>
      {loading && <p>Loading...</p>}
    </>
  );
}

export default Account;
