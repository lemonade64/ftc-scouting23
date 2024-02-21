"use client";

import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="grid h-screen place-items-center px-6 py-12 sm:py-32">
      <div className="text-center">
        <h1 className="mt-4 font-bold text-black dark:text-white text-5xl">
          Submitted!
        </h1>
        <p className="mt-6 text-base text-gray-600 dark:text-[#797979]">
          Thanks for submitting the form.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href={"/"}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm dark:text-black dark:bg-white"
          >
            Submit Another Form
          </Link>
        </div>
      </div>
    </main>
  );
}
