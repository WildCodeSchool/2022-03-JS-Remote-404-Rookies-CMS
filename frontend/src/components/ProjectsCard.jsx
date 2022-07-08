import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ExportContext from "../contexts/Context";

function ProjectsCard(project) {
  const location = useLocation();
  const { media } = useContext(ExportContext.Context);

  return (
    <div className="flex flex-col lg:flex-row w-full -h-full mt-20">
      <div
        className={`flex flex-col mx-2 lg:w-1/2 h-1/2 ${
          project.project.status === 1 ? "order-1 lg:mr-24" : "lg:ml-24"
        }`}
      >
        {location.pathname.includes("studyCase") ? (
          <p>Id : {project && project.project.id}</p>
        ) : null}
        <h1 className=" text-green-400 text-2xl mb-4 lg:mb-8">
          {project.project.title}
        </h1>
        <h2 className=" font-extrabold text-2xl lg:text-5xl mb-4">
          {project.project.sub_title}
        </h2>
        <h3 className="text-2xl text-gray-600 mb-6">
          {project.project.description}
        </h3>
        {media ? (
          <div className="flex flex-col w-3/4 h-1/2 items-center self-center justify-center mb-8 lg:mb-12 lg:mt-10">
            <img
              className="flex justify-center items-center self-center"
              src={project.project.image_link}
              alt={project.project.image_alt}
            />
          </div>
        ) : null}
        <div className="flex flex-col lg:flex-row h-full items-center mb-10">
          <div className="flex items-center w-full lg:w-2/3 lg:mr-10 rounded-xl drop-shadow-lg border-2">
            <div className="flex flex-row items-center h-2/5 p-2 rounded-2xl pr-8">
              {project.project.projectMember.map((item) => (
                <img
                  src={item.image_link}
                  alt={item.image_alt}
                  className="flex justify-center rounded-full -mr-10 ml-2 lg:ml-4"
                />
              ))}
              <img
                src={project.project.imagesFixed[0].image_link}
                alt={project.project.imagesFixed[0].image_alt}
                className="rounded-full w-1/3 h-1/3 -mr-12 ml-2 lg:ml-6 items-center -z-10"
              />
            </div>
            <div className="flex flex-col justify-center items-center ml-2 lg:ml-8 rounded-2xl border-2 p-3">
              <h3 className="text-gray-600 lg:text-xl font-bold">
                {project.project.amount} étudiants
              </h3>
            </div>
          </div>
          <div className="flex flex-col w-2/3 lg:w-1/3 mt-4 lg:mt-0 lg:ml-8">
            <div className="flex border-2 rounded-2xl p-2">
              <img
                src={project.project.imagesFixed[2].image_link}
                alt={project.project.imagesFixed[2].image_alt}
                className="mr-4 imgProject"
              />
              <p className="text-gray-600 text-md font-bold  ">
                {project.project.time_week}
              </p>
            </div>
            <div className="flex border-2 rounded-2xl p-2 mt-4">
              <img
                src={project.project.imagesFixed[3].image_link}
                alt={project.project.imagesFixed[3].image_alt}
                className="mr-4 imgProject"
              />
              <p className="text-gray-600 text-md font-bold ">
                {project.project.time_hour}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 rounded-2xl p-6">
          <img
            src={project.project.imagesFixed[1].image_link}
            alt={project.project.imagesFixed[1].image_alt}
            className="quote"
          />
          <p className="text-xl text-center pb-4">{project.project.text}</p>
          <p className="text-xl font-bold mb-6">{project.project.signature}</p>
        </div>
      </div>
      {media ? null : (
        <div className="flex flex-col w-1/2 items-center mt-24">
          <img
            src={project.project.image_link}
            alt={project.project.image_alt}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectsCard;
