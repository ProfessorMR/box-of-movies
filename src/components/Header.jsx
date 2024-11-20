"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { IMAGE_URL } from "@/src/utils/data";
import { searchSeriesOrMovies } from "@/src/services/";

import StarIcon from "@mui/icons-material/Star";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "@/public/images/logo.png";
import EmptySearch from "@/public/images/error/empty-search.svg";
import BlankImage from "@/public/images/error/blank-image.jpg";

import "@/src/styles/header.css";

export default function Header() {
  const [searchName, setSearchName] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    async function fetchSearchData() {
      try {
        const searchData = await searchSeriesOrMovies(searchName);
        setSearchResult(searchData);
      } catch (err) {
        console.error(err);
      }
    }

    if (searchName) {
      fetchSearchData();
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchName]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <header className="w-full flex py-4 bg-transparent z-50 absolute top-0 header-area">
      <div className="container mx-auto px-4">
        <div className="w-full flex justify-between items-center">
          {menuOpen && (
            <div
              className="fixed inset-0 z-40 bg-neutral-900/60 lg:hidden block"
              onClick={handleMenuClose}
            ></div>
          )}
          <div
            className="bg-primary p-2 text-xl shadow rounded-xl text-white cursor-pointer lg:hidden block"
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </div>
          <div
            className={`flex-col px-2 py-3 bg-neutral-800  h-screen w-56 fixed right-0 top-0 z-50 lg:hidden flex transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "translate-x-full overflow-auto"
            }`}
          >
            <Image src={Logo} className="w-40 mx-auto" alt="logo" priority />
            <hr />
            <div className="flex flex-col py-3">
              <Link
                href="/"
                className="text-white font-medium transition ease-in-out px-3 py-1 rounded-md text-lg hover:bg-primary hover:text-white"
              >
                خانه
              </Link>
              <Link
                href="/movies"
                className="text-white font-medium transition ease-in-out px-3 py-1 rounded-md text-lg hover:bg-primary hover:text-white"
              >
                فیلم ها
              </Link>
              <Link
                href="/tv"
                className="text-white font-medium transition ease-in-out px-3 py-1 rounded-md text-lg hover:bg-primary hover:text-white"
              >
                سریال ها
              </Link>
            </div>
            <div
              className="absolute top-2 -left-4 bg-white p-2 rounded-full shadow-xl cursor-pointer"
              onClick={handleMenuClose}
            >
              <CloseIcon />
            </div>
          </div>
          <Image
            src={Logo}
            className="w-40 lg:block hidden"
            alt="logo"
            priority
          />
          <div className="items-center lg:flex hidden">
            <Link
              href="/"
              className="text-white font-medium transition ease-in-out px-3 py-1 rounded-md text-lg hover:bg-primary hover:text-white"
            >
              خانه
            </Link>
            <Link
              href="/movies"
              className="text-white font-medium transition ease-in-out px-3 py-1 rounded-md text-lg hover:bg-primary hover:text-white"
            >
              فیلم ها
            </Link>
            <Link
              href="/tv"
              className="text-white font-medium transition ease-in-out px-3 py-1 rounded-md text-lg hover:bg-primary hover:text-white"
            >
              سریال ها
            </Link>
          </div>
          <form ref={formRef} className="relative w-80 searchbar-form z-10">
            <input
              type="text"
              className="w-full border border-gray-400 rounded py-2.5 px-1.5 text-sm"
              placeholder="فیلم یا سریال خود را جستجو کنید"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              onFocus={() => setShowResults(true)}
            />
            {showResults && (
              <div className="absolute top-10 w-full bg-white rounded-b-md -z-10 py-3 px-2">
                {searchResult !== null && searchResult.results.length !== 0 ? (
                  searchResult.results
                    .filter((item) => item.media_type !== "person")
                    .slice(0, 3)
                    .map((item, index) => (
                      <Link
                        href={
                          item.first_air_date
                            ? `/tv/${item.id}`
                            : `/movies/${item.id}`
                        }
                        className="flex items-center justify-between py-2"
                        key={index}
                      >
                        <div className="flex items-center">
                          <div className="flex items-center justify-center">
                            <StarIcon className="text-base text-primary" />
                            <span className="text-sm">
                              {Number.parseFloat(item.vote_average).toFixed(
                                1
                              ) || "N/A"}
                            </span>
                          </div>
                          <h6 className="mr-2 text-sm">
                            {item.title || item.name}
                          </h6>
                        </div>
                        {/* Changing the static image with the image that comes from the api */}
                        <Image
                          // src={
                          //   item.poster_path
                          //     ? `${IMAGE_URL}${item.poster_path}`
                          //     : BlankImage
                          // }
                          src={BlankImage}
                          alt={item.title || item.name}
                          className="w-28 h-28 object-cover"
                          width={112}
                          height={160}
                          priority
                        />
                      </Link>
                    ))
                ) : (
                  <div className="flex items-center justify-center flex-col p-5">
                    <Image
                      src={EmptySearch}
                      alt="empty search"
                      className="w-28"
                    />
                    <p className="mt-4 text-sm">
                      متاسفانه فیلم یا سریال شما یافت نشد☹️
                    </p>
                  </div>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </header>
  );
}
