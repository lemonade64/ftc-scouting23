"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Loading() {
  return (
    <div className="p-10">
      <div className="animate-pulse px-4 sm:px-0">
        <h1 className="rounded-full bg-slate-700 h-4 w-20 my-4"></h1>
        <p className="rounded-full bg-slate-700 h-4 w-40"></p>
      </div>
      <div className="mt-6 border-t border-gray-400">
        <dl className="divide-y divide-gray-400">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 animate-pulse">
            <dt className="leading-6 rounded-full bg-slate-700 h-2 text-transparent w-fit">
              Team Number
            </dt>
            <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0 bg-slate-700 h-2 text-transparent rounded-full w-fit">
              11148
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 animate-pulse">
            <dt className="leading-6 rounded-full bg-slate-700 h-2 text-transparent w-fit">
              Team Name
            </dt>
            <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0 bg-slate-700 h-2 text-transparent rounded-full w-fit">
              Greybacks
            </dd>
          </div>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 animate-pulse">
                  <dt className="leading-6 rounded-full bg-slate-700 h-2 text-transparent w-fit">
                    Autonomous OPR
                  </dt>
                  <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0 bg-slate-700 h-2 text-transparent rounded-full w-fit">
                    000
                  </dd>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 " : ""
                    } h-5 w-5 transition-all duration-300 transform`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="!animate-none divide-y divide-black">
                  <div className="mx-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 animate-pulse">
                    <dt className="leading-6 rounded-full bg-slate-700 h-2 text-transparent w-fit">
                      Team Prop
                    </dt>
                    <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0 bg-slate-700 h-2 text-transparent rounded-full w-fit">
                      Yes
                    </dd>
                  </div>
                  <div className="mx-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 animate-pulse">
                    <dt className="leading-6 rounded-full bg-slate-700 h-2 text-transparent w-fit">
                      Yellow Pixel
                    </dt>
                    <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0 bg-slate-700 h-2 text-transparent rounded-full w-fit">
                      Yes
                    </dd>
                  </div>
                  <div className="mx-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 animate-pulse">
                    <dt className="leading-6 rounded-full bg-slate-700 h-2 text-transparent w-fit">
                      Purple Pixel
                    </dt>
                    <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0 bg-slate-700 h-2 text-transparent rounded-full w-fit">
                      Yes
                    </dd>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 animate-pulse">
            <dt className="leading-6 rounded-full bg-slate-700 h-2 text-transparent w-fit">
              TeleOp OPR
            </dt>
            <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0 bg-slate-700 h-2 text-transparent rounded-full w-fit">
              000
            </dd>
          </div>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 animate-pulse">
                  <dt className="leading-6 rounded-full bg-slate-700 h-2 text-transparent w-fit">
                    Endgame OPR
                  </dt>
                  <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0 bg-slate-700 h-2 text-transparent rounded-full w-fit">
                    000
                  </dd>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 " : ""
                    } h-5 w-5 transition-all duration-300 transform`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="!animate-none divide-y divide-black">
                  <div className="mx-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 animate-pulse">
                    <dt className="leading-6 rounded-full bg-slate-700 h-2 text-transparent w-fit">
                      Drone
                    </dt>
                    <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0 bg-slate-700 h-2 text-transparent rounded-full w-fit">
                      Yes
                    </dd>
                  </div>
                  <div className="mx-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 animate-pulse">
                    <dt className="leading-6 rounded-full bg-slate-700 h-2 text-transparent w-fit">
                      Climb
                    </dt>
                    <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0 bg-slate-700 h-2 text-transparent rounded-full w-fit">
                      Yes
                    </dd>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </dl>
      </div>
    </div>
  );
}
