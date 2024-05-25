"use client";

import Image from "next/image";
import Nav from "@/app/Components/nav";

function darkMode() {
  const tag = document.documentElement;
  tag.classList.toggle("dark");
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative min-h-screen min-w-screen flex-col justify-between">
        <button
          className="bg-white dark:bg-black dark:text-white"
          onClick={darkMode}
        >
          dark mode
        </button>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
      </main>
    </>
  );
}
