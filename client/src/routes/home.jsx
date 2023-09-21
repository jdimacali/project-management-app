import AddClientModal from "../components/add-client-modal";
import AddProjectModal from "../components/add-project-modal";
import Clients from "../components/clients";
import Projects from "../components/projects";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};
export default Home;
