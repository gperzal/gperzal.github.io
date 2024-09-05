"use client";
import Link from "next/link";
import { useState } from "react";

function Footer() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>

        {/* Main Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/guido-perez-zelaya/"
              className="text-[#16f2b3]"
              onMouseEnter={() => setShowMessage(true)}
              onMouseLeave={() => setShowMessage(false)}
            >
              GAPZ
            </Link>
          </p>
        </div>

        <div
          className={`mt-4 text-center text-sm transition-all duration-300 ${
            showMessage ? "opacity-100 h-auto" : "opacity-0 h-0"
          }`}
        >
          <p>
            Special thanks to{" "}
            <Link
              target="_blank"
              href="https://github.com/said7388"
              className="text-[#16f2b3]"
            >
              Abu Said
            </Link>{" "}
            for the original portfolio template and inspiration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
