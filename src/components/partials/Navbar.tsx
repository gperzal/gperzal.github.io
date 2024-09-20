"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importa los íconos de menú de hamburguesa

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del menú

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent w-full z-50">
      <div className="flex items-center justify-between py-5 px-4">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            GAPZ.DEV
          </Link>
        </div>

        {/* Botón de menú de hamburguesa para móviles */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menú de navegación en pantallas grandes */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/#about" className="text-sm text-white hover:text-pink-600">
              SOBRE MÍ
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="text-sm text-white hover:text-pink-600">
              EXPERIENCIA
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="text-sm text-white hover:text-pink-600">
              HABILIDADES
            </Link>
          </li>
          <li>
            <Link href="/#education" className="text-sm text-white hover:text-pink-600">
              EDUCACIÓN
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="text-sm text-white hover:text-pink-600">
              PROYECTOS
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1224] w-full">
          <ul className="flex flex-col items-start space-y-1 p-4">
            <li>
              <Link href="/#about" className="text-white hover:bg-pink-600 px-3 py-2 block" onClick={toggleMenu}>
                SOBRE MÍ
              </Link>
            </li>
            <li>
              <Link href="/#experience" className="text-white hover:bg-pink-600 px-3 py-2 block" onClick={toggleMenu}>
                EXPERIENCIA
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="text-white hover:bg-pink-600 px-3 py-2 block" onClick={toggleMenu}>
                HABILIDADES
              </Link>
            </li>
            <li>
              <Link href="/#education" className="text-white hover:bg-pink-600 px-3 py-2 block" onClick={toggleMenu}>
                EDUCACIÓN
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="text-white hover:bg-pink-600 px-3 py-2 block" onClick={toggleMenu}>
                PROYECTOS
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
