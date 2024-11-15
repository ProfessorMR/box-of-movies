import Image from "next/image";
import Link from "next/link";

import StarIcon from "@mui/icons-material/Star";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TvIcon from "@mui/icons-material/Tv";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import arcane from "@/public/images/sliders/arcane.avif";

export default function MediaBox() {
  return (
    <div className="transition ease-in-out border hover:border-primary rounded-md">
      <Link href="#">
        <Image
          src={arcane}
          alt={"arcane"}
          className="rounded-t-md w-full"
          height={200}
        />
        <div className="bg-slate-700 rounded-b-md p-3">
          <h3 className="text-left text-white font-semibold text-lg whitespace-nowrap overflow-hidden text-ellipsis">
            Arcane
          </h3>
          <ul className="flex justify-start flex-row-reverse gap-x-3 mt-2">
            <li className="text-slate-300 text-sm">
              9.0
              <StarIcon className="text-primary text-xl mr-1" />
            </li>
            <li className="text-slate-300 text-sm">
              Action
              <FormatListBulletedIcon className="text-white text-xl mr-1" />
            </li>
            <li className="text-slate-300 text-sm">
              4k
              <TvIcon className="text-white text-xl mr-1" />
            </li>
            <li className="text-slate-300 text-sm">
              2024
              <CalendarMonthIcon className="text-white text-xl mr-1" />
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
}
