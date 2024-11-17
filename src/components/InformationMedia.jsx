import Image from "next/image";

import penguin from "@/public/images/sliders/arcane.avif";
import poster from "@/public/images/poster.jpg";

import StarIcon from "@mui/icons-material/Star";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TvIcon from "@mui/icons-material/Tv";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MovieIcon from "@mui/icons-material/Movie";
import CategoryIcon from "@mui/icons-material/Category";
import PublicIcon from "@mui/icons-material/Public";
import LanguageIcon from "@mui/icons-material/Language";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import "@/src/styles/informationMedia.css";

export default function InformationMedia({ isSeries }) {
  return (
    <>
      <div className="w-full py-10">
        <div className="w-full banner relative">
          <Image src={penguin} alt="logo" className="w-full object-cover" />
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-full h-52 bg-gradient-to-t from-neutral-950 to-transparent"></div>
          </div>
        </div>
        <section className="information-media-area">
          <div className="container mx-auto px-4">
            <div>
              <div className="grid grid-cols-5 gap-4 -mt-40 z-50 relative">
                <div className="col-span-4 py-6">
                  <div className="w-full">
                    <h1 className="text-left text-5xl text-white font-extrabold">
                      Arcane
                    </h1>
                    <ul className="flex justify-start flex-row-reverse gap-x-3 mt-3">
                      <l className="text-slate-300 text-md">
                        8.8
                        <StarIcon className="text-primary text-3xl mr-1" />
                      </l>
                      <li className="text-slate-300 text-md">
                        Action
                        <FormatListBulletedIcon className="text-white text-3xl mr-1" />
                      </li>
                      <li className="text-slate-300 text-md">
                        4k
                        <TvIcon className="text-white text-3xl mr-1" />
                      </li>
                      <li className="text-slate-300 text-md">
                        2021
                        <CalendarMonthIcon className="text-white text-3xl mr-1" />
                      </li>
                    </ul>
                  </div>
                  <div className="w-full bg-neutral-700 mt-20 rounded-md shadow-md">
                    <h3>جزئیات سریال</h3>
                    <hr />
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span>
                          <MovieIcon />
                          نام اصلی:
                        </span>
                        <p>arcane</p>
                      </div>
                      <div>
                        <span>
                          <CategoryIcon />
                          دسته بندی ها:
                        </span>
                        <p>arcane</p>
                      </div>
                      <div>
                        <span>
                          <PublicIcon />
                          کشور:
                        </span>
                        <p>arcane</p>
                      </div>
                      <div>
                        <span>
                          <LanguageIcon />
                          زبان:
                        </span>
                        <p>arcane</p>
                      </div>
                      <div>
                        <span>
                          <AttachMoneyIcon />
                          بودجه:
                        </span>
                        <p>arcane</p>
                      </div>
                      <div>
                        <span>
                          <HowToRegIcon />
                          تعداد رای ها:
                        </span>
                        <p>arcane</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Image
                    src={poster}
                    alt="poster"
                    className="w-full h-96 object-cover border-4 border-neutral-700 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
