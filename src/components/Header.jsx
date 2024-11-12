import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "@/public/images/logo.png";
import "@/src/styles/header.css";

export default function Header() {
  return (
    <header className="w-full flex py-4 bg-transparent z-20 relative">
      <div className="container mx-auto px-4">
        <div className="w-full flex justify-between items-center">
          <Image src={Logo} className="w-40" alt="logo" />
          <div className="flex items-center">
            <Link
              href="#"
              className="transition ease-in-out px-3 py-1 rounded-md text-lg hover:bg-primary hover:text-white"
            >
              خانه
            </Link>
            <Link
              href="#"
              className="transition ease-in-out px-3 py-1 rounded-md text-lg hover:bg-primary hover:text-white"
            >
              فیلم ها
            </Link>
            <Link
              href="#"
              className="transition ease-in-out px-3 py-1 rounded-md text-lg hover:bg-primary hover:text-white"
            >
              سریال ها
            </Link>
            <Link
              href="#"
              className="transition ease-in-out px-3 py-1 rounded-md text-lg hover:bg-primary hover:text-white"
            >
              بالاترین امتیاز ها
            </Link>
          </div>
          <form action="" className="relative w-80 searchbar-form">
            <input
              type="text"
              className="w-full border border-gray-400 rounded py-2.5 px-1.5 text-sm"
              placeholder="فیلم یا سریال خود را جستجو کنید"
            />
            <button
              type="submit"
              className="bg-primary py-2 px-1.5 absolute flex items-center justify-center rounded"
            >
              <SearchIcon className="text-white" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
