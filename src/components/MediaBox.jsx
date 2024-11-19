import Image from "next/image";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import StarIcon from "@mui/icons-material/Star";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TvIcon from "@mui/icons-material/Tv";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import { IMAGE_URL } from "@/src/utils/data";

import BlankImage from "@/public/images/error/blank-image-2.jpg";

export default function MediaBox({
  item,
  getGenreMoviesName,
  getGenreSeriesName,
  isSeries,
  loading,
}) {
  if (loading) {
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#999">
        <div className="transition ease-in-out border hover:border-primary rounded-md">
          <Skeleton height={160} className="rounded-t-md" />
          <div className="rounded-b-md p-3">
            <Skeleton width={`60%`} height={20} />
            <ul className="flex justify-start flex-row-reverse gap-x-3 mt-2">
              <li className="text-sm">
                <Skeleton width={30} height={20} />
              </li>
              <li className="text-sm">
                <Skeleton width={60} height={20} />
              </li>
              <li className="text-sm">
                <Skeleton width={40} height={20} />
              </li>
              <li className="text-sm">
                <Skeleton width={30} height={20} />
              </li>
            </ul>
          </div>
        </div>
      </SkeletonTheme>
    );
  }

  return (
    <div className="transition ease-in-out border hover:border-primary rounded-md">
      <Link href={`${isSeries ? `/tv/${item.id}` : `/movies/${item.id}`}`}>
        {/* Changing the static image with the image that comes from the api */}
        {/* <Image
          src={`${IMAGE_URL}${item.poster_path}`}
          alt={item.name || item.title}
          className="rounded-t-md w-full"
          width={100}
          height={50}
        /> */}
        <Image
          src={BlankImage}
          alt={item.name || item.title}
          className="rounded-t-md w-full h-48"
          style={{ objectFit: "cover" }}
        />
        <div className="bg-slate-700 rounded-b-md p-3">
          <h3 className="text-left text-white font-semibold text-lg whitespace-nowrap overflow-hidden text-ellipsis">
            {item.name || item.title}
          </h3>
          <ul className="flex justify-start flex-row-reverse gap-x-3 mt-2">
            <li className="text-slate-300 text-sm">
              {Number.parseFloat(item.vote_average).toFixed(1)}
              <StarIcon className="text-primary text-xl mr-1" />
            </li>
            <li className="text-slate-300 text-sm">
              {isSeries
                ? getGenreSeriesName(item.genre_ids[0])
                : getGenreMoviesName(item.genre_ids[0])}
              <FormatListBulletedIcon className="text-white text-xl mr-1" />
            </li>
            <li className="text-slate-300 text-sm">
              4k
              <TvIcon className="text-white text-xl mr-1" />
            </li>
            <li className="text-slate-300 text-sm">
              {item.first_air_date?.split("-")[0] ||
                item.release_date?.split("-")[0]}
              <CalendarMonthIcon className="text-white text-xl mr-1" />
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
}
