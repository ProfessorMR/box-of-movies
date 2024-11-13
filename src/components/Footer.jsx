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
            <li className="text-white text-lg font-medium">
              <Link href="">برترین فیلم ها</Link>
            </li>
            <li className="text-white text-lg font-medium">
              <Link href="">سریال ها</Link>
            </li>
            <li className="text-white text-lg font-medium">
              <Link href="">فیلم ها</Link>
            </li>
            <li className="text-white text-lg font-medium">
              <Link href="">خانه</Link>
            </li>
          </ul>
          <ul className="flex gap-x-4 mt-8">
            <li className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800">
              <Link
                href="https://github.com/ProfessorMR"
                passHref={true}
                className="text-white text-base"
              >
                <GitHubIcon />
              </Link>
            </li>
            <li className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800">
              <Link
                href="https://instagram.com/mohammad._.rmj"
                passHref={true}
                className="text-white text-base"
              >
                <InstagramIcon />
              </Link>
            </li>
            <li className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800">
              <Link
                href="https://twitter.com/_professor_mr"
                passHref={true}
                className="text-white text-base"
              >
                <XIcon />
              </Link>
            </li>
          </ul>
          <Image src={Logo} alt="Logo" className="w-52 mt-8" />
        </div>
      </div>
    </footer>
  );
}
