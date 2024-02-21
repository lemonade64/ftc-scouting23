"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import disclosure from "@/data/disclosure";

export default function StatisticsSkeleton() {
  return (
    <div className="p-10">
      <div className="animate-pulse px-4 sm:px-0">
        <h1 className="rounded-full bg-slate-700 h-4 text-transparent w-fit my-4">
          Team Data
        </h1>
        <p className="rounded-full bg-slate-700 h-3 text-transparent w-fit">
          Performance Statistics
        </p>
      </div>
      <div className="mt-6 border-t border-gray-400">
        <dl className="divide-y divide-gray-400">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 animate-pulse">
            <dt className="leading-6 rounded-full bg-slate-700 h-2 text-transparent w-fit">
              Team Number:
            </dt>
            <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0 bg-slate-700 h-2 text-transparent rounded-full w-fit">
              11148
            </dd>
          </div>
          {disclosure.map(({ id, title, metrics }) => (
            <Disclosure key={id}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="px-4 py-6 sm:flex sm:flex-cols sm:gap-x-4 sm:px-0 w-full animate-pulse">
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 " : ""
                      } h-4 w-4 transition-all duration-300 transform`}
                    />
                    <dt className="leading-6 rounded-full bg-slate-700 h-2 text-transparent w-fit">
                      {title} OPR:
                    </dt>
                    <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0 bg-slate-700 h-2 text-transparent rounded-full w-fit">
                      111
                    </dd>
                  </Disclosure.Button>
                  <Disclosure.Panel className="!animate-none divide-y divide-gray-400">
                    {metrics.map(({ id, name }) => (
                      <div
                        key={id}
                        className="ml-4 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 animate-pulse"
                      >
                        <dt className="leading-6 rounded-full bg-slate-700 h-2 text-transparent w-fit">
                          {name}:
                        </dt>
                        <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0 bg-slate-700 h-2 text-transparent rounded-full w-fit">
                          aaa
                        </dd>
                      </div>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
