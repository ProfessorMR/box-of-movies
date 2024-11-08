import { Vazirmatn } from "next/font/google";
import "@/src/styles/globals.css";

const vazirMatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

export const metadata = {
  title: "مووی باکس",
  description: "مشاهده فیلم و سریال های دنیا به همراه نظرات کاربران",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa_IR" dir="rtl">
      <body className={vazirMatn.className}>{children}</body>
    </html>
  );
}
