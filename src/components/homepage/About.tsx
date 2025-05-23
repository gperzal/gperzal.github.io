import personalData from "@/utils/data/personal-data.json";
import Image from "next/image";

const AboutSection: React.FC = () => {
  const { personal } = personalData;

  return (
    <section id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          Acerca de mí
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            ¿Quién soy yo?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg ">
            {personal.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personal.profileImage}
            width={280}
            height={280}
            alt={personal.name}
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
