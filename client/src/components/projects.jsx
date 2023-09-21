import { useQuery } from "@apollo/client";

import { GET_PROJECTS } from "../queries/projectQueries";
import Spinner from "./spinner";
import ProjectCard from "./project-card";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <h1> Something went wrong </h1>;

  return (
    <>
      {!loading && !error && data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p> Something went wrong </p>
      )}
    </>
  );
};
export default Projects;
