import AddClientModal from "./components/add-client-modal";
import Clients from "./components/clients";
import Header from "./components/header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Projects from "./components/projects";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClientModal />
          <Projects />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
