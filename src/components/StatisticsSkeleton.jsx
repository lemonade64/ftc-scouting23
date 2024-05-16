import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function StatisticsSkeleton() {
  const statistics = [
    {
      id: 1,
      name: "Autonomous OPR",
      value: "000",
      dataSet: [
        {
          id: 1,
          name: "Team Prop",
          value: "Yes",
        },
        { id: 2, name: "Yellow Pixel", value: "Yes" },
        { id: 3, name: "Purple Pixel", value: "Yes" },
      ],
    },
    {
      id: 2,
      name: "TeleOp OPR",
      value: "111",
      dataSet: [
        {
          id: 1,
          name: "Mosaics",
          value: "222",
        },
        { id: 2, name: "Set Line", value: "333" },
        { id: 3, name: "Penalties", value: "444" },
        { id: 4, name: "Total Points", value: "555" },
      ],
    },
    {
      id: 3,
      name: "Endgame OPR",
      value: "666",
      dataSet: [
        {
          id: 1,
          name: "Drone",
          value: "10",
        },
        { id: 2, name: "Climb", value: "Backstage" },
      ],
    },
  ];

  return (
    <>
      <div className="p-10">
        <div className="px-2 sm:px-0 animate-pulse">
          <h1 className="rounded-full bg-slate-700 dark:bg-slate-400 h-4 text-transparent w-fit my-4">
            Team Data
          </h1>
          <p className="rounded-full bg-slate-700 dark:bg-slate-400 h-3 text-transparent w-fit">
            Performance Statistics
          </p>
        </div>
        <div className="mt-6 border-t border-gray-400">
          <dl className="divide-y divide-gray-400">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 animate-pulse">
              <dt className="leading-6 rounded-full bg-slate-700 dark:bg-slate-400 h-2 text-transparent w-fit">
                Team Number:
              </dt>
              <dd className="leading-6 rounded-full bg-slate-700 dark:bg-slate-400 h-2 text-transparent w-fit">
                11148
              </dd>
            </div>
            {statistics.map(({ id, name, value, dataSet }) => (
              <Disclosure key={id}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="px-4 py-6 sm:flex sm:flex-cols sm:gap-x-4 sm:px-0 w-full">
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 " : ""
                        } h-4 w-4 transition-all duration-300 transform`}
                      />
                      <dt className="leading-6 rounded-full bg-slate-700 dark:bg-slate-400 h-2 text-transparent w-fit animate-pulse">
                        {name}:
                      </dt>
                      <dd className="leading-6 sm:col-span-2 sm:mt-0 bg-slate-700 dark:bg-slate-400 h-2 text-transparent rounded-full w-fit animate-pulse">
                        {value}
                      </dd>
                    </Disclosure.Button>
                    {dataSet.map(({ id, name, value }) => (
                      <Disclosure.Panel className="!animate-none divide-y divide-gray-400">
                        <div
                          key={id}
                          className="ml-16 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                        >
                          <dt className="leading-6 rounded-full bg-slate-700 dark:bg-slate-400 h-2 text-transparent w-fit animate-pulse">
                            {name}:
                          </dt>
                          <dd className="leading-6 sm:col-span-2 sm:mt-0 bg-slate-700 dark:bg-slate-400 h-2 text-transparent rounded-full w-fit animate-pulse">
                            {value}
                          </dd>
                        </div>
                      </Disclosure.Panel>
                    ))}
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
