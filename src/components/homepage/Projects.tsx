import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaPlay, FaExternalLinkAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import personalData from "@/utils/data/personal-data.json";
import placeholder from "/public/png/placeholder.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// Definir la interfaz para los proyectos
interface ProjectType {
  id: number;
  name: string;
  description: string;
  tools: string[];
  role: string;
  demo: string;
  code: string;
  image?: string;
  tags?: string[];
}

const ProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        {/* Iconos de colores */}
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2 left-4">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>

        {/* Nombre del proyecto y botones */}
        <div className="flex items-center justify-between pl-16 pr-4">
          <p className="text-[#16f2b3] text-base lg:text-xl">{project.name}</p>

          <div className="flex space-x-4">
            <Link
              href={project.demo}
              target="_blank"
              data-tooltip-id="demo-tooltip"
              data-tooltip-content="Ver demo en vivo"
              className="text-cyan-400 transition-all hover:text-violet-600"
            >
              <FaExternalLinkAlt size={18} />
            </Link>
            <Tooltip id="demo-tooltip" />

            <Link
              href={project.code}
              target="_blank"
              data-tooltip-id="github-tooltip"
              data-tooltip-content="Ir al repositorio en GitHub"
              className="text-cyan-400 transition-all hover:text-violet-600"
            >
              <BsGithub size={18} />
            </Link>
            <Tooltip id="github-tooltip" />
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <div className="flex justify-center mb-4">
          {/* Mostrar la imagen del proyecto o el placeholder */}
          <Image
            src={project.image || placeholder.src}
            alt={project.name}
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{"{"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{`['`}</span>
            {project.tools.map((tool, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">{tool}</span>
                {project.tools.length - 1 !== i && (
                  <span className="text-gray-400">{`', '`}</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-400">{`'],`}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{` '${project.role}'`}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{` '${project.description}'`}</span>
            <span className="text-gray-400">,</span>
          </div>
          {project.tags && project.tags.length > 0 && (
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">Tags:</span>
              <span className="text-cyan-400">
                {` ['${project.tags.join("', '")}']`}
              </span>
              <span className="text-gray-400">,</span>
            </div>
          )}
          <div>
            <span className="text-gray-400">{"};"}</span>
          </div>
        </code>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { projects } = personalData;

  return (
    <div
      id="projects"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px] mb-12">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            Mis Proyectos
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projects.slice(0, 4).map((project: ProjectType, index: number) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
