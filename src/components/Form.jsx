"use client";

import Statistics from "@/components/Statistics";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const router = useRouter();
  const pathname = usePathname();
  const title = pathname.slice(1).replace(/^\w/, (e) => e.toUpperCase());

  const [teamNumber, setTeamNumber] = useState("");
  const [teamName, setTeamName] = useState("");
  const [qualificationNumber, setQualificationNumber] = useState("");
  const [allianceColour, setAllianceColour] = useState("Blue");
  const [autonomousCycles, setAutonomousCycles] = useState("");
  const [autonomousPosition, setautonomousPosition] = useState("Audience");
  const [yellowPixel, setYellowPixel] = useState("No");
  const [purplePixel, setPurplePixel] = useState("No");
  const [teamProp, setTeamProp] = useState("No");
  const [drone, setDrone] = useState("N/A (+0 Points)");
  const [climbTime, setClimbTime] = useState("");
  const [teleOpCycles, setTeleOpCycles] = useState("");
  const [penalties, setPenalties] = useState("");
  const [notes, setNotes] = useState("");

  const [buttonState, setButton] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButton(true);
    const formData = {
      teamNumber,
      teamName,
      qualificationNumber,
      allianceColour,
      autonomousCycles,
      yellowPixel,
      purplePixel,
      teamProp,
      drone,
      climbTime,
      teleOpCycles,
      penalties,
      notes,
      title,
    };
    console.info(formData);
    const data = JSON.stringify(formData);
    console.info(data);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(formData),
        pathname,
        headers: {
          "content-type": "application/json",
        },
      });
      console.info(res);

      if (res.ok) {
        console.info("Success: " + res.statusText);
        console.info("Form Submitted!");
      } else {
        console.warn("Failure: " + res.statusText);
        throw new Error("HTTP " + res.status);
      }
    } catch (e) {
      console.warn("Failure: ", e);
    }

    router.push("/thank-you");
  };

  return (
    <main className="mx-auto sm:max-w-3xl md:max-w-5xl px-6">
      <form onSubmit={handleSubmit} className="py-14">
        <h1 className="mt-4 font-bold text-black text-2xl text-center dark:text-white">
          {title} FTC Scouting Form
        </h1>
        <div className="mt-10 grid gap-x-8 gap-y-8 grid-cols-6">
          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="teamNumber"
              className="block text-sm font-medium text-black text-center dark:text-white"
            >
              Team Number
            </label>
            <div className="mt-2">
              <input
                autoComplete="off"
                type="text"
                name="teamNumber"
                id="teamNumber"
                value={teamNumber}
                onChange={(e) => setTeamNumber(e.target.value)}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
              />
            </div>
          </div>

          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="teamName"
              className="block text-sm font-medium text-black text-center dark:text-white"
            >
              Team Name
            </label>
            <div className="mt-2">
              <input
                autoComplete="off"
                type="text"
                name="teamName"
                id="teamName"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
              />
            </div>
          </div>

          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="qualificationNumber"
              className="block text-sm font-medium text-black text-center dark:text-white"
            >
              Qualification
            </label>
            <div className="mt-2">
              <input
                autoComplete="off"
                type="text"
                name="qualificationNumber"
                id="qualificationNumber"
                value={qualificationNumber}
                onChange={(e) => setQualificationNumber(e.target.value)}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
              />
            </div>
          </div>

          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="allianceColour"
              className="block text-sm font-medium text-black text-center dark:text-white"
            >
              Alliance Colour
            </label>
            <div className="mt-2">
              <select
                name="allianceColour"
                id="allianceColour"
                value={allianceColour}
                onChange={(e) => setAllianceColour(e.target.value)}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
              >
                <option>Blue</option>
                <option>Red</option>
              </select>
            </div>
          </div>

          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="autonomousCycles"
              className="block text-sm font-medium text-black text-center dark:text-white"
            >
              Auto Cycles
            </label>
            <div className="mt-2">
              <input
                autoComplete="off"
                type="text"
                name="autonomousCycles"
                id="autonomousCycles"
                value={autonomousCycles}
                onChange={(e) => setAutonomousCycles(e.target.value)}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
              />
            </div>
          </div>
          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="autonomousPosition"
              className="block text-sm font-medium text-black text-center dark:text-white"
            >
              Auto Position
            </label>
            <div className="mt-2">
              <select
                name="autonomousPosition"
                id="autonomousPosition"
                value={autonomousPosition}
                onChange={(e) => setautonomousPosition(e.target.value)}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
              >
                <option>Audience</option>
                <option>Backboard</option>
              </select>
            </div>
          </div>

          <div className="block text-sm font-medium text-black md:col-span-4 col-span-6 max-[768px]:row-span-1 text-center dark:text-white">
            Auto Spike Mark
            <div className="mt-4">
              <div className="grid grid-cols-3 gap-x-2 items-center">
                <label
                  htmlFor="yellowPixel"
                  className="inline-flex items-center mx-auto"
                >
                  <input
                    type="checkbox"
                    name="yellowPixel"
                    id="yellowPixel"
                    value={yellowPixel}
                    onChange={(e) => setYellowPixel(e.target.value)}
                    className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0 dark:ring-1 dark:ring-white"
                  ></input>
                  <span className="ml-2 font-normal">Yellow Pixel</span>
                </label>
                <label
                  htmlFor="purplePixel"
                  className="inline-flex items-center mx-auto"
                >
                  <input
                    type="checkbox"
                    name="purplePixel"
                    id="purplePixel"
                    value={purplePixel}
                    onChange={(e) => setPurplePixel(e.target.value)}
                    className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0 dark:ring-1 dark:ring-white"
                  ></input>
                  <span className="ml-2 font-normal">Purple Pixel</span>
                </label>
                <label
                  htmlFor="teamProp"
                  className="inline-flex items-center mx-auto"
                >
                  <input
                    type="checkbox"
                    name="teamProp"
                    id="teamProp"
                    value={teamProp}
                    onChange={(e) => setTeamProp(e.target.value)}
                    className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0 dark:ring-1 dark:ring-white"
                  ></input>
                  <span className="ml-2 font-normal">Team Prop</span>
                </label>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="drone"
              className="block text-sm font-medium text-black text-center dark:text-white"
            >
              Drone
            </label>
            <div className="mt-2">
              <select
                name="drone"
                id="drone"
                value={drone}
                onChange={(e) => setDrone(e.target.value)}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
              >
                <option>N/A (+0 Points)</option>
                <option>Zone 1 (+30 Points)</option>
                <option>Zone 2 (+20 Points)</option>
                <option>Zone 3 (+10 Points)</option>
              </select>
            </div>
          </div>

          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="climbTime"
              className="block text-sm font-medium text-black text-center dark:text-white"
            >
              Climb Time
            </label>
            <div className="mt-2">
              <input
                autoComplete="off"
                type="text"
                name="climbTime"
                id="climbTime"
                value={climbTime}
                onChange={(e) => setClimbTime(e.target.value)}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
              />
            </div>
          </div>
          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="teleOpCycles"
              className="block text-sm font-medium text-black text-center dark:text-white"
            >
              TeleOp Cycles
            </label>
            <div className="mt-2">
              <input
                autoComplete="off"
                type="text"
                name="teleOpCycles"
                id="teleOpCycles"
                value={teleOpCycles}
                onChange={(e) => setTeleOpCycles(e.target.value)}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
              />
            </div>
          </div>
          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="penalties"
              className="block text-sm font-medium text-black text-center dark:text-white"
            >
              Penalties
            </label>
            <div className="mt-2">
              <input
                autoComplete="off"
                type="text"
                name="penalties"
                id="penalties"
                value={penalties}
                onChange={(e) => setPenalties(e.target.value)}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
              />
            </div>
          </div>
          <div className="col-span-6 md:row-span-1 pt-6 border-t-[1px] border-gray-300">
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-black text-center dark:text-white"
            >
              Additional Notes
            </label>
            <div className="mt-2">
              <textarea
                autoComplete="off"
                name="notes"
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={10}
                placeholder=""
                className="resize-y block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
              />
            </div>
          </div>
          <div className="flex items-center justify-between col-span-6">
            <Statistics className="justify-start" />
            <div>
              <button
                type="reset"
                className="text-sm font-semibold text-black mr-6 dark:text-white"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={buttonState}
                className="inline-flex rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm dark:bg-white dark:text-black"
              >
                <svg
                  className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${
                    buttonState ? "" : "hidden"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {buttonState ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
