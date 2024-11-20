import Link from "next/link";
import Image from "next/image";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

import Logo from "@/public/images/logo.png";

import "@/src/styles/footer.css";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-neutral-900 to-neutral-950 py-10 flex">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center flex-col">
          <ul className="flex gap-x-8">
            <li className="text-white text-md md:text-lg font-medium">
              <Link href="/tv">سریال ها</Link>
            </li>
            <li className="text-white text-md md:text-lg font-medium">
              <Link href="/movies">فیلم ها</Link>
            </li>
            <li className="text-white text-md md:text-lg font-medium">
              <Link href="/">خانه</Link>
            </li>
          </ul>
          <ul className="flex gap-x-4 mt-8">
            <li className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800">
              <Link
                href="https://github.com/ProfessorMR"
                passHref={true}
                className="text-white"
              >
                <GitHubIcon className="text-base md:text-lg" />
              </Link>
            </li>
            <li className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800">
              <Link
                href="https://instagram.com/mohammad._.rmj"
                passHref={true}
                className="text-white"
              >
                <InstagramIcon className="text-base md:text-lg" />
              </Link>
            </li>
            <li className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800">
              <Link
                href="https://twitter.com/_professor_mr"
                passHref={true}
                className="text-white"
              >
                <XIcon className="text-base md:text-lg" />
              </Link>
            </li>
          </ul>
          <Image src={Logo} alt="Logo" className="w-40 md:w-52 mt-8" priority />
        </div>
      </div>
    </footer>
  );
}
