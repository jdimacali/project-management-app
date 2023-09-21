import { gql, useQuery } from "@apollo/client";
import ClientRow from "./client-row";

const GET_CLIENTS = gql`
  #graphql
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading)
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  if (error) return <h1> Something went wrong </h1>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default Clients;
