// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { BsArrowRightCircleFill } from "react-icons/bs";
import WaveReveal from "./animata/text/wave-reveal";
import { AuroraBackground } from "./ui/aurora-background";
export const Home = () => {

  return (
<AuroraBackground>
  <div className="">
    <div className="flex flex-col items-center justify-center h-screen">
      <WaveReveal
        text="WINTERIOR DESIGNS"
        direction="up"
        mode="letter"
        duration="2000ms"
        delay={500}
        blur={true}
        className="text-6xl md:text-8xl font-signature bg-gradient-to-r from-red-700 via-blue-700 to-red-700 py-3 px-10 inline-block"
      />
    </div>
  </div>
</AuroraBackground>

  );
};
