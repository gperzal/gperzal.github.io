import personalData from "@/utils/data/personal-data.json";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const categories = ["UI", "Program", "DB", "Tools", "Others"];

const categorizeSkills = (skills: any[]) => {
  return categories.map((category) => ({
    category,
    skills: skills.filter((skill) => skill.category === category),
  }));
};

const Skills: React.FC = () => {
  const categorizedSkills = categorizeSkills(personalData.skills);

  return (
    <div
      id="skills"
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

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Habilidades
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Renderizamos las habilidades en 5 columnas por categoría */}
      <div className="grid grid-cols-5 gap-8">
        {categorizedSkills.map((categoryObj, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Título de la categoría */}
            <h3 className="text-lg font-semibold mb-4 text-white">
              {categoryObj.category}
            </h3>

            {/* Columna con habilidades de la categoría */}
            <Marquee
              gradient={false}
              speed={100}
              pauseOnHover={true}
              pauseOnClick={true}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              {categoryObj.skills.map((skill: any, id: number) => (
                <div
                  key={id}
                  className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                >
                  <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                      <div className="h-8 sm:h-10">
                        <Image
                          src={
                            skillsImage(skill.name)?.src ||
                            "/default-skill-icon.png"
                          }
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="h-full w-auto rounded-lg"
                        />
                      </div>
                      <p className="text-white text-sm sm:text-lg">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
