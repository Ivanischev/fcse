import { useQuery } from "@apollo/client";
import { GET_USER } from "../queries/account";
import { useNavigate } from "react-router-dom";

interface User {
  firstName: string;
  lastName: string;
}

interface UserData {
  user: User;
}

function Account() {
  const userToken = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const { data, loading, error } = useQuery<UserData, { id: string }>(
    GET_USER,
    {
      variables: {
        id: String(userId),
      },
      context: {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) console.log("GraphQL error:", error.message);

  const logOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/Login");
  };

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
      <button onClick={() => logOutHandler()}>Log Out</button>
      {loading && <p>Loading...</p>}
    </>
  );
}

export default Account;
