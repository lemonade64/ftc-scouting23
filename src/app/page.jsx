import Link from "next/link";

export default function Home() {
  return (
    <main className="grid h-screen place-items-center px-6 py-12 sm:py-32">
      <div className="text-center">
        <h1 className="mt-4 font-bold text-black text-5xl">Choose a Team</h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href={"/greybacks"}
            className="rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Greybacks
          </Link>
          <Link
            href={"/redbacks"}
            className="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Redbacks
          </Link>
        </div>
      </div>
    </main>
  );
}
