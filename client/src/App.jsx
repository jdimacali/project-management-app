import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Routes,
  Route,
} from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./routes/home";
import Project from "./routes/project";
import NotFound from "./routes/not-found";
import Nav from "./routes/nav";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql/",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "projects/:id",
        element: <Project />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <RouterProvider router={router}>
          <Outlet />
        </RouterProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
