"use client";

import Dropdown from "@/src/components/Dropdown";
import { useState } from "react";
import { DROPDOWN_DATA } from "@/src/utils/data";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";

export default function FilterSearch({ isSeries }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <>
      <section className="relative inline-block text-left my-10 bg-neutral-800 w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start justify-center py-8">
            <div className="flex items-center text-white">
              <FilterAltIcon className="text-2xl" />
              <h1 className="text-xl font-medium">جستجوی پیشرفته</h1>
            </div>
            <div className="mt-6 flex gap-x-5">
              {isSeries
                ? DROPDOWN_DATA.results.tv.map((item, index) => (
                    <Dropdown
                      key={index}
                      data={item}
                      isOpen={openDropdown === index}
                      setOpenDropdown={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                    />
                  ))
                : DROPDOWN_DATA.results.movies.map((item, index) => (
                    <Dropdown
                      key={index}
                      data={item}
                      isOpen={openDropdown === index}
                      setOpenDropdown={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                    />
                  ))}
              <button className="bg-primary text-black px-8 py-2 rounded-md">
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
