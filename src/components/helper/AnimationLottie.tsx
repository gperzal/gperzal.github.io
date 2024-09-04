"use client"; // Asegúrate de usar "use client" para habilitar el código del lado del cliente

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

interface AnimationLottieProps {
  animationPath: any;
  width?: string;
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({
  animationPath,
  width,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
