import Image from "next/image";
import { Inter } from "next/font/google";
import { SignUp } from "@repo/ui/SignUp";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black h-screen ">
      <h2 className="text-white">Hello World</h2>
    </div>
  );
}
