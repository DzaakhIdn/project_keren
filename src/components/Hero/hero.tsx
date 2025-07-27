// import { ArrowUpRight, CirclePlay } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import BlurText from "@/animate/BlurText";
import { Montserrat, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SplitText from "@/animate/SplitText";
import { motion } from "motion/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Hero = () => {
  return (
    <div className="min-h-screen flex">
      <BackgroundPattern />
      <div className="logo">
        <Image
          src="/important/logo.png"
          alt="logo"
          width={100}
          height={100}
          className=""
        />
      </div>
      <div className="flex items-center justify-center px-6 flex-col gap-9">
        <Badge
          variant={"secondary"}
          className="bg-blue-500 text-white dark:bg-blue-600"
        >
          Official Website
        </Badge>
        <BlurText
          text={`Selamat Datang di HSI Boarding School`}
          delay={150}
          animateBy="words"
          direction="top"
          className={`${spaceGrotesk.className} text-5xl font-extrabold text-center text-slate-900 justify-center`}
        />
        <SplitText
          text="Kami adalah lembaga pendidikan yang mengedepankan nilai-nilai keislaman dan akademik."
          className={`text-md text-centernd text-slate-700 ${montserrat.className}`}
          delay={100}
          duration={1.3}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <div className="flex items-center justify-center gap-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.3 }}
          >
            <Button
              variant="default"
              className={`${montserrat.className} bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-sm py-6 px-6`}
            >
              Kenali Kami
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.3, delay: 0.5 }}
          >
            <Button
              variant="outline"
              className={`${montserrat.className} text-sm py-6 px-6 hover:cursor-pointer`}
            >
              Daftar Sekarang
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
