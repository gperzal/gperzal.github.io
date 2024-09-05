import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { TbMailForward } from "react-icons/tb";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebook, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import personalData from "@/utils/data/personal-data.json";
import Image from "next/image";

// Función para validar el email
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Contact = () => {
  const [input, setInput] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({ email: false, required: false });
  const { personal } = personalData;

  // Chequea que los campos requeridos estén llenos
  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar campos requeridos
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    // Crear el objeto con los datos del formulario
    const templateParams = {
      from_name: input.name,
      from_email: input.email,
      message: input.message,
    };

    // Enviar correo usando EmailJS
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const options = {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    };

    try {
      const res = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        options
      );
      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setInput({ name: "", email: "", message: "" }); // Limpiar el formulario
      }
    } catch (error) {
      toast.error(error?.text || "Error sending email");
    }
  };

  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
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

      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          Contacto
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Contacte conmigo
          </p>
          <form onSubmit={handleSendMail}>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-base">Su nombre: </label>
                <input
                  className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
                  type="text"
                  value={input.name}
                  onChange={(e) => setInput({ ...input, name: e.target.value })}
                  onBlur={checkRequired}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-base">Su correo electrónico: </label>
                <input
                  className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
                  type="email"
                  value={input.email}
                  onChange={(e) => {
                    setInput({ ...input, email: e.target.value });
                    setError({ ...error, email: !isValidEmail(input.email) });
                  }}
                  onBlur={checkRequired}
                  required
                />
                {error.email && (
                  <p className="text-sm text-red-400">
                    Favor ingrese una dirección de correo electrónico válida.
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-base">Su mensaje: </label>
                <textarea
                  className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
                  value={input.message}
                  onChange={(e) =>
                    setInput({ ...input, message: e.target.value })
                  }
                  onBlur={checkRequired}
                  rows={4}
                  required
                />
              </div>

              <div className="flex flex-col items-center gap-2">
                {error.required && (
                  <p className="text-sm text-red-400">
                    Se requiere correo electrónico y mensaje.
                  </p>
                )}
                <button
                  type="submit"
                  className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out hover:text-white"
                >
                  <span>Enviar mensaje</span>
                  <TbMailForward className="mt-1" size={18} />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Información de contacto y redes sociales */}
        <div className="lg:w-3/4">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personal.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personal.phone}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personal.address}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
