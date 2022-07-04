/* eslint-disable import/no-extraneous-dependencies */
import react, { useEffect, useContext } from "react";
import axios from "axios";
import ExportContext from "../contexts/Context";
import ProjectsCard from "./ProjectsCard";

function Projetcs() {
  const [projects, setProjects] = react.useState([]);
  const { language } = useContext(ExportContext.Context);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/project/${language}`)
      .then((response) => {
        console.warn(response.data);
        setProjects(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return (
    <div>
      {projects.length > 0 &&
        projects.map((project) => {
          return <ProjectsCard project={project} />;
        })}
    </div>
  );
}

export default Projetcs;
