"use client";

import { useContext, useEffect, useRef, useState } from "react";
import DropdownContext from "../context/DropdownContext";

export default function Dropdown({ data, isOpen, setOpenDropdown }) {
  const { setSelectedItem } = useContext(DropdownContext);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const [selectedText, setSelectedText] = useState(data.btn_name);

  const toggleDropdown = () => {
    setOpenDropdown();
  };

  const handleItemClick = (data, item) => {
    setSelectedText(item.name || item);
    setSelectedItem((prev) => ({
      ...prev,
      [data.name]: item.id || item,
    }));

    setOpenDropdown(null);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenDropdown]);

  return (
    <div className="flex flex-col relative">
      <button
        ref={buttonRef}
        id="dropdownDefaultButton"
        className="text-white bg-neutral-600 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={toggleDropdown}
      >
        {selectedText}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          id="dropdown"
          className="z-10 absolute top-12 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200 max-h-80 overflow-y-auto [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          dark:[&::-webkit-scrollbar-track]:bg-neutral-700
          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
          >
            {data.inside_dropdown.map((item, index) => (
              <li
                key={index}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                onClick={() => handleItemClick(data, item)}
              >
                {item.name || item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
