import Link from "next/link";
import BackgroundBoxes from "@/components/ui/BackgroundBoxes";

export default function Home() {
  const greybacksColors = ["--gray-600", "--zinc-600", "--neutral-600"];
  const redbacksColours = ["--red-500", "--red-600", "--red-700"];

  return (
    <>
      <main className="flex flex-row">
        <Link
          href={"/greybacks"}
          className="h-screen relative w-[50vw] overflow-hidden dark:bg-black bg-white flex flex-col items-center justify-center"
        >
          <div className="absolute inset-0 w-full h-full" />
          <BackgroundBoxes colours={greybacksColors} />
          <h1 className="md:text-4xl text-xl dark:text-gray-300 text-gray-600 relative z-20">
            Greybacks
          </h1>
        </Link>
        <Link
          href={"/redbacks"}
          className="h-screen relative w-[50vw] overflow-hidden dark:bg-black bg-white flex flex-col items-center justify-center"
        >
          <div className="absolute inset-0 w-full h-full" />
          <BackgroundBoxes colours={redbacksColours} />
          <h1 className="md:text-4xl text-xl text-red-400 relative z-20">
            Redbacks
          </h1>
        </Link>
      </main>
    </>
  );
}
