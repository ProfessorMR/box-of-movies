import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import MovieIcon from "@mui/icons-material/Movie";
import CategoryIcon from "@mui/icons-material/Category";
import PublicIcon from "@mui/icons-material/Public";
import LanguageIcon from "@mui/icons-material/Language";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SyncIcon from "@mui/icons-material/Sync";

export default function InformationMediaDetails({
  isSeries,
  detailData,
  loading,
}) {
  return (
    <div className="w-full bg-neutral-700 mt-20 rounded-md shadow-md p-4">
      <h3 className="mb-3 text-primary font-medium text-xl">
        {isSeries ? "جزئیات سریال" : "جزئیات فیلم"}
      </h3>
      <hr />
      {loading ? (
        <SkeletonTheme baseColor="#202020" highlightColor="#3c3c3c">
          <div className="grid grid-cols-2 gap-2 mt-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex items-center">
                <Skeleton width={100} height={20} className="mr-2" />
                <Skeleton width={150} height={20} />
              </div>
            ))}
          </div>
        </SkeletonTheme>
      ) : (
        <div className="grid grid-cols-2 gap-2 mt-3">
          <div className="flex items-center">
            <span className="text-primary font-medium text-base my-1">
              <MovieIcon className="ml-1" />
              نام اصلی:
            </span>
            <p className="mr-2 text-white text-base">
              {detailData.original_name || detailData.original_title}
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-primary font-medium text-base my-1">
              <CategoryIcon className="ml-1" />
              ژانر:
            </span>
            <p className="mr-2 text-white text-base">
              {detailData.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-primary font-medium text-base my-1">
              <PublicIcon className="ml-1" />
              سال انتشار:
            </span>
            <p className="mr-2 text-white text-base">
              {detailData.first_air_date || detailData.release_date}
            </p>
          </div>
          {isSeries ? (
            <div className="flex items-center">
              <span className="text-primary font-medium text-base my-1">
                <LanguageIcon className="ml-1" />
                زبان:
              </span>
              <p className="mr-2 text-white text-base">
                {" "}
                {detailData.languages.map((lang) => lang).join(", ")}
              </p>
            </div>
          ) : (
            <div className="flex items-center">
              <span className="text-primary font-medium text-base my-1">
                <LanguageIcon className="ml-1" />
                زبان:
              </span>
              <p className="mr-2 text-white text-base">
                {detailData.origin_country}
              </p>
            </div>
          )}

          {isSeries ? (
            <div className="flex items-center">
              <span className="text-primary font-medium text-base my-1">
                <SyncIcon className="ml-1" />
                وضعیت:
              </span>

              <p className="mr-2 text-white text-base">
                {detailData.status === "Ended"
                  ? "پایان یافته"
                  : detailData.status === "In Production"
                  ? "در حال تولید"
                  : "در حال پخش"}
              </p>
            </div>
          ) : (
            <div className="flex items-center">
              <span className="text-primary font-medium text-base my-1">
                <AttachMoneyIcon className="ml-1" />
                بودجه:
              </span>

              <p className="mr-2 text-white text-base">{detailData.budget}</p>
            </div>
          )}

          <div className="flex items-center">
            <span className="text-primary font-medium text-base my-1">
              <HowToRegIcon className="ml-1" />
              تعداد رای ها:
            </span>
            <p className="mr-2 text-white text-base">{detailData.vote_count}</p>
          </div>
        </div>
      )}
    </div>
  );
}
