"use client";

import { Fragment, Suspense, useEffect, useState } from "react";
import StatisticsList from "@/components/StatisticsList";
import StatisticsSkeleton from "@/components/StatisticsSkeleton";
import { Dialog, Transition } from "@headlessui/react";

export default function StatisticsModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onkeydown(e) {
      (e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/"
        ? setIsOpen(!isOpen)
        : null;
    }

    window.addEventListener("keydown", onkeydown);
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
        className="text-sm font-semibold text-black dark:text-white"
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
            <div className="fixed inset-0 bg-black/25 dark:bg-white/20 backdrop-blur-md" />
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
                <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white dark:bg-black m-6 align-middle shadow-xl transition-all mx-auto max-w-6xl">
                  <Suspense fallback={<StatisticsSkeleton />}>
                    <StatisticsList />
                  </Suspense>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
