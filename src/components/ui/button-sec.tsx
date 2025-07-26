import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type ButtonSecProps = {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
} & React.ComponentProps<"button">;

const ButtonSec = (prop: ButtonSecProps) => {
  return (
    <div>
        <button
            className={`text-white rounded-sm py-3 text-lg px-5 hover:cursor-pointer hover:bg-blue-600 ${prop.bgColor ? prop.bgColor : "bg-blue-500"} ${poppins.className} px-4transition-all duration-300 ${prop.className}`}
            {...prop}
        >
            {prop.children}
        </button>
    </div>
  );
}
export default ButtonSec;