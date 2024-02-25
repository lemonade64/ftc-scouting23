import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

async function getOPR(teamKey) {
  try {
    const res = await fetch(
      `https://api.ftcscout.org/rest/v1/teams/${teamKey}/quick-stats?season=2023`,
      {
        method: "GET",
      }
    );
    if (res.ok) {
      console.info("Received OPR");
    } else {
      console.error("Failure: " + res.statusText);
      throw new Error("HTTP " + res.status);
    }
    return await res.json();
  } catch (e) {
    console.error("Failure: ", e);
  }
}

async function getTeamMatches(teamKey) {
  try {
    const res = await fetch(
      `https://theorangealliance.org/api/team/${teamKey}/matches/2324`,
      {
        method: "GET",
        headers: {
          "X-TOA-Key": process.env.ORANGE_ALLIANCE_KEY,
          "X-Application-Origin": process.env.ORANGE_ALLIANCE_APP_ORIGIN,
        },
      }
    );
    if (res.ok) {
      console.info("Received Team Matches");
    } else {
      throw new Error("HTTP " + res.status);
    }
    return await res.json();
  } catch (e) {
    console.error("Failure: ", e);
  }
}

async function getMatchDetails(matchKey) {
  try {
    const res = await fetch(
      `https://theorangealliance.org/api/match/${matchKey}/details`,
      {
        method: "GET",
        headers: {
          "X-TOA-Key": process.env.ORANGE_ALLIANCE_KEY,
          "X-Application-Origin": "FTC Scouting",
        },
      }
    );
    if (res.ok) {
      console.info("Received Match Details");
    } else {
      console.error("Failure: " + res.statusText);
      throw new Error("HTTP " + res.status);
    }
    return await res.json();
  } catch (e) {
    console.error("Failure: ", e);
  }
}

/*
async function getDataAverage(teamName) {
  const teamMatches = await getTeamMatches(teamName);
  return await getTeamMatches(teamName);
  const teamMatchesMap = new Map();
  for (const [key, value] of Object.entries(await teamMatches)) {
    teamMatchesMap.set(key, value);
  }
  return teamMatchesMap;
}
*/

async function getData(teamName) {
  const npOPR = await getOPR(teamName);

  const autonomousOPR = Math.round(npOPR.auto.value);
  const teleOpOPR = Math.round(npOPR.dc.value);
  const endgameOPR = Math.round(npOPR.eg.value);
  const mosaics = "";
  const setLine = "";
  const penalties = "";
  const totalOPR = Math.round(npOPR.tot.value);
  const drone = "";
  const climb = "";

  const statisticsTemplate = [
    {
      id: 1,
      name: "Autonomous OPR",
      value: "",
      dataSet: [
        { id: 1, name: "Team Prop", value: "" },
        { id: 2, name: "Yellow Pixel", value: "" },
        { id: 3, name: "Purple Pixel", value: "" },
      ],
    },
    {
      id: 2,
      name: "TeleOp OPR",
      value: "",
      dataSet: [
        { id: 1, name: "Mosaics", value: "" },
        { id: 2, name: "Set Line", value: "" },
        { id: 3, name: "Penalties", value: "" },
        { id: 4, name: "Total OPR", value: "" },
      ],
    },
    {
      id: 3,
      name: "Endgame OPR",
      value: "",
      dataSet: [
        { id: 1, name: "Drone", value: "" },
        { id: 2, name: "Climb", value: "" },
      ],
    },
  ];

  const valueMappings = {
    "Autonomous OPR": autonomousOPR,
    "TeleOp OPR": teleOpOPR,
    "Endgame OPR": endgameOPR,
    Mosaics: mosaics,
    "Set Line": setLine,
    Penalties: penalties,
    "Total OPR": totalOPR,
    Drone: drone,
    Climb: climb,
  };

  const statistics = statisticsTemplate.map((e) => ({
    ...e,
    value: valueMappings[e.name] || e.value,
    dataSet: e.dataSet.map((e) => ({
      ...e,
      value: valueMappings[e.name] || e.value,
    })),
  }));

  return statistics;
}

export default async function StatisticsList() {
  const teamNumber = 11148;
  const statistics = await getData(teamNumber);

  console.log(statistics);

  return (
    <div className="p-10">
      <div className="px-2 sm:px-0">
        <h1 className="text-xl mb-2 w-fit dark:text-white">Team Data</h1>
        <p className="text-md text-gray-700 w-fit dark:text-gray-300">
          Performance Statistics
        </p>
      </div>
      <div className="mt-6 border-t border-gray-400">
        <dl className="divide-y divide-gray-400">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 dark:text-white">
            <dt className="leading-6 text-md w-fit font-semibold">
              Team Number:
            </dt>
            <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0 text-md w-fit">
              {teamNumber}
            </dd>
          </div>
          {statistics.map(({ id, name, value, dataSet }) => (
            <Disclosure key={id}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="px-4 py-6 sm:flex sm:flex-cols sm:gap-x-4 sm:px-0 w-full dark:text-white">
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 " : ""
                      } h-4 w-4 transition-all duration-300 transform`}
                    />
                    <dt className="leading-6 font-semibold text-md w-fit">
                      {name}:
                    </dt>
                    <dd className="leading-6 sm:col-span-2 sm:mt-0 w-fit">
                      {value}
                    </dd>
                  </Disclosure.Button>
                  {dataSet.map(({ id, name, value }) => (
                    <Disclosure.Panel className="divide-y divide-gray-400">
                      <div
                        key={id}
                        className="ml-16 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 dark:text-white"
                      >
                        <dt className="leading-6 font-semibold text-md w-fit">
                          {name}:
                        </dt>
                        <dd className="leading-6 sm:col-span-2 sm:mt-0 w-fit">
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
  );
}
