"use client";

import Link from "next/link";

export default function ErrorPage({ message }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-900 my-10">
      <div className="text-center bg-gray-800 p-6 rounded-md shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-4xl font-extrabold text-red-600 mb-4">
          خطای فیلم یا سریال
        </h2>
        <p className="text-white text-lg mb-6">
          {message || "مشکلی در دریافت اطلاعات رخ داده است."}
        </p>
        <Link
          href="/"
          className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition duration-300"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
