"use client";

import { Fragment, useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { Dialog, Transition } from "@headlessui/react";

async function getOPR(teamKey) {
  try {
    const res = await fetch(
      `https://api.ftcscout.org/rest/v1/teams/${teamKey}/quick-stats?season=2023`,
      {
        method: "GET",
      }
    );
    if (res.ok) {
      console.info("Success: " + res.statusText);
      console.info("Received OPR");
    } else {
      console.warn("Failure: " + res.statusText);
      throw new Error("HTTP " + res.status);
    }
    const data = await res.json();
    return data;
  } catch (e) {
    console.warn("Failure: ", e);
  }
}

async function getData(teamName) {
  const npOPR = await getOPR(teamName);
  const totalOPR = Math.round(npOPR.tot.value);
  const autoOPR = Math.round(npOPR.auto.value);
  const teleOpORP = Math.round(npOPR.dc.value);
  const endgameOPR = Math.round(npOPR.eg.value);
  console.info(totalOPR, autoOPR, teleOpORP, endgameOPR);
}

// async function getMatchDetails(teamKey) {
//   try {
//     const res = await fetch(
//       `https://theorangealliance.org/api/team/${teamKey}/matches/2324`,
//       {
//         method: "GET",
//         headers: {
//           "content-type": "application/json",
//           "X-TOA-Key": process.env.ORANGE_ALLIANCE_KEY,
//           "X-Application-Origin": "FTC Scouting",
//         },
//       }
//     );
//     if (res.ok) {
//       console.info("Success: " + res.statusText);
//       console.info("Received Match Details");
//     } else {
//       console.warn("Failure: " + res.statusText);
//       throw new Error("HTTP " + res.status);
//     }
//     return await res.json();
//   } catch (e) {
//     console.warn("Failure: ", e);
//   }
// }

export default function TeamData() {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onkeydown(event) {
      (event.key === "k" && (event.metaKey || event.ctrlKey)) ||
      event.key === "/"
        ? setIsOpen(!isOpen)
        : null;
    }

    window.addEventListener(`keydown`, onkeydown);
    return () => {
      window.removeEventListener("keydown", onkeydown);
    };
  }, [isOpen]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="text-sm font-semibold text-black"
      >
        View Statistics
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white m-6 align-middle shadow-xl transition-all mx-auto max-w-6xl">
                  <Loading />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
