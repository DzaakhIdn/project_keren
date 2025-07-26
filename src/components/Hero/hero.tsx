import { ArrowUpRight, CirclePlay } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import BlurText from "@/animate/BlurText";
import { Montserrat } from "next/font/google";
import { Badge } from "../ui/badge";
import ButtonSec from "../ui/button-sec";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 flex-col gap-10">
      <BackgroundPattern />
      <Badge className=" bg-gradient-to-bl from-[#1f5bdd] via-[#142447] to-[#2289ff] rounded-full py-1 border-none">
        Just released v1.0.0
      </Badge>
      <BlurText
        text="Selamat Datang di Website Official HSI Boarding School"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-6xl font-extrabold text-center text-slate-900 w-[60%] justify-center"
      />

      <p
        className={`text-lg text-center text-slate-600 ${montserrat.className} w-[60%]`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rerum
        nostrum cum dicta culpa cupiditate perferendis et illum. Natus, dolore
        suscipit accusamus quas sit perferendis repellendus totam aliquid
        deleniti illo voluptatum amet excepturi quos. Recusandae aspernatur
        porro facere iste pariatur debitis at dicta voluptatem dolorum fugiat
      </p>
      <div className="flex items-center justify-center gap-4">
        <ButtonSec>
          Play Video
        </ButtonSec>
      </div>
    </div>
  );
};

export default Hero;
