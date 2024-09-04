import personalData from "@/utils/data/personal-data.json";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "./../helper/AnimationLottie";
import GlowCard from "./../helper/GlowCard";
import experienceAnimation from "./../../../public/lottie/code.json";

interface ExperienceType {
  id: number;
  duration: string;
  title: string;
  company: string;
  role: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const { experience } = personalData;

  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiencia
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experienceAnimation} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experience.map((exp: ExperienceType) => (
                <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                  <div className="p-3 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {exp.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {exp.title}
                        </p>
                        <p className="text-sm sm:text-base">{exp.company}</p>
                        <p className="text-sm sm:text-base italic text-gray-400">
                          {exp.role}
                        </p>
                        <div className="mt-4 pl-10 text-sm text-gray-300">
                          <p className="font-semibold mb-2">
                            Responsabilidades:
                          </p>
                          <ul className="list-disc">
                            {exp.responsibilities.map(
                              (responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
