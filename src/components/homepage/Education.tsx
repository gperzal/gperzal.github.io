import React, { useState } from "react";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "./../helper/AnimationLottie";
import GlowCard from "./../helper/GlowCard";
import personalData from "@/utils/data/personal-data.json";
import lottieFile from "./../../../public/lottie/study.json";
import placeholderImage from "/public/png/placeholder.png";
import { FaTimes } from "react-icons/fa";

// Definimos la interfaz para la educación académica
interface EducationType {
  id: number;
  title: string;
  institution: string;
  duration: string;
  graduated: boolean;
  certificateImage?: string;
}

// Definimos la interfaz para las certificaciones
interface CertificationType {
  id: number;
  title: string;
  issuer: string;
  date: string;
  certificateImage: string;
}

const Education: React.FC = () => {
  const { education, certifications } = personalData;

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Función para abrir el modal con la imagen del certificado
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <div
      id="education"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educación Académica
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Educación Académica */}
      <div className="py-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {education.map((edu: EducationType) => (
                <GlowCard key={edu.id} identifier={`education-${edu.id}`}>
                  <div className="p-3 relative text-white flex">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80 z-0" 
                    />

                    <div className="flex items-center gap-x-8 px-3 py-5 w-2/3 z-10">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>

                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase flex items-center">
                          {edu.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {edu.institution}
                        </p>
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {edu.duration}
                        </p>
                        {edu.graduated && (
                          <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                            Titulado
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Imagen del certificado a la derecha */}
                    <div className="w-1/3 flex justify-center items-center z-20">
                      {edu.certificateImage && (
                        <Image
                          src={edu.certificateImage || placeholderImage}
                          alt={`Certificado de ${edu.title}`}
                          width={80}
                          height={80}
                          className="rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                          onClick={() =>
                            handleImageClick(edu.certificateImage!)
                          }
                        />
                      )}
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificaciones */}
      <div className="pt-8">
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Certificaciones
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {certifications.map((cert: CertificationType) => (
            <GlowCard key={cert.id} identifier={`certification-${cert.id}`}>
              <div className="p-3 relative text-white flex">
                <Image
                  src="/blur-23.svg"
                  alt="Hero"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 opacity-80 z-0" // Aplicamos el mismo estilo para certificaciones
                />

                <div className="flex items-center gap-x-8 px-3 py-5 w-2/3 z-10">
                  <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                    <BsPersonWorkspace size={36} />
                  </div>
                  <div>
                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                      {cert.title}
                    </p>
                    <p className="text-sm sm:text-base">{cert.issuer}</p>
                    <p className="text-xs sm:text-sm">{cert.date}</p>
                  </div>
                </div>

                {/* Imagen del certificado a la derecha */}
                <div className="w-1/3 flex justify-center items-center z-20">
                  <Image
                    src={cert.certificateImage || placeholderImage}
                    alt={`Certificado de ${cert.title}`}
                    width={80}
                    height={80}
                    className="rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                    onClick={() => handleImageClick(cert.certificateImage)}
                  />
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Modal para mostrar la imagen del certificado en grande */}
        {modalOpen && selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleCloseModal}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Certificado"
                width={700}
                height={500}
                className="rounded-lg"
              />
              <button
                className="absolute top-0 right-0 m-4 text-white bg-red-500 hover:bg-red-700 rounded-full p-2"
                onClick={handleCloseModal}
              >
                <FaTimes size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
