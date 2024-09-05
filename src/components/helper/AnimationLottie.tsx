"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner"; 

// Importar dinámicamente lottie-react para que solo cargue en el cliente
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface AnimationLottieProps {
  animationPath: any;
  width?: string;
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({
  animationPath,
  width,
}) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (animationPath) {
      setAnimationData(animationPath); 
    }
  }, [animationPath]);

  if (!animationData) {
    return (
      <div className="flex justify-center items-center h-full">
   
        <Oval
          height={80}
          width={80}
          color="#16f2b3"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: width || "95%" }}
    />
  );
};

export default AnimationLottie;
