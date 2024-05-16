"use-client";

import StatisticsSkeleton from "@/components/StatisticsSkeleton";
import { Fragment, Suspense, useEffect, useState } from "react";
import { Combobox, Dialog, Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

async function fetchOPR(teamNumber) {
  try {
    const res = await fetch(
      `https://api.ftcscout.org/rest/v1/teams/${teamNumber}/quick-stats?season=2023`,
      {
        method: "GET",
      }
    );
    if (res.ok) {
      console.info("Received OPR");
    } else {
      console.error("Failure: " + res.statusText);
    }
    return await res.json();
  } catch (e) {
    console.error("Failure: ", e);
  }
}

async function fetchTeamMatches(teamKey) {
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

async function fetchMatchDetails(matchKey) {
  try {
    const res = await fetch(
      `https://theorangealliance.org/api/match/${matchKey}/details`,
      {
        method: "GET",
        headers: {
          "X-TOA-Key": process.env.ORANGE_ALLIANCE_KEY,
          "X-Application-Origin": process.env.ORANGE_ALLIANCE_APP_ORIGIN,
        },
      }
    );
    if (res.ok) {
      console.info("Received Match Details");
    } else {
      console.error("Failure: " + res.statusText);
    }
    return await res.json();
  } catch (e) {
    console.error("Failure: ", e);
  }
}

async function fetchData(teamNumber) {
  const data = [
    {
      match_participant_key: "2324-AUS-SYQ-Q005-1-B1",
      match_key: "2324-AUS-SYQ-Q005-1",
      team_key: "11148",
      station: 21,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
    {
      match_participant_key: "2324-AUS-SYQ-Q012-1-R1",
      match_key: "2324-AUS-SYQ-Q012-1",
      team_key: "11148",
      station: 11,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
    {
      match_participant_key: "2324-AUS-SYQ-Q017-1-B1",
      match_key: "2324-AUS-SYQ-Q017-1",
      team_key: "11148",
      station: 21,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
    {
      match_participant_key: "2324-AUS-SYQ-Q023-1-B2",
      match_key: "2324-AUS-SYQ-Q023-1",
      team_key: "11148",
      station: 22,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
    {
      match_participant_key: "2324-AUS-SYQ-Q030-1-R2",
      match_key: "2324-AUS-SYQ-Q030-1",
      team_key: "11148",
      station: 12,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
    {
      match_participant_key: "2324-AUS-SYQ-E101-1-B2",
      match_key: "2324-AUS-SYQ-E101-1",
      team_key: "11148",
      station: 22,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
    {
      match_participant_key: "2324-AUS-SYQ-E102-1-B2",
      match_key: "2324-AUS-SYQ-E102-1",
      team_key: "11148",
      station: 22,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
    {
      match_participant_key: "2324-AUS-CMP-Q002-1-B1",
      match_key: "2324-AUS-CMP-Q002-1",
      team_key: "11148",
      station: 21,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
    {
      match_participant_key: "2324-AUS-CMP-Q015-1-R2",
      match_key: "2324-AUS-CMP-Q015-1",
      team_key: "11148",
      station: 12,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
    {
      match_participant_key: "2324-AUS-CMP-Q031-1-R2",
      match_key: "2324-AUS-CMP-Q031-1",
      team_key: "11148",
      station: 12,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
    {
      match_participant_key: "2324-AUS-CMP-Q042-1-B1",
      match_key: "2324-AUS-CMP-Q042-1",
      team_key: "11148",
      station: 21,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
    {
      match_participant_key: "2324-AUS-CMP-Q049-1-B2",
      match_key: "2324-AUS-CMP-Q049-1",
      team_key: "11148",
      station: 22,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
    {
      match_participant_key: "2324-AUS-CMP-E101-1-R1",
      match_key: "2324-AUS-CMP-E101-1",
      team_key: "11148",
      station: 11,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
    {
      match_participant_key: "2324-AUS-CMP-E102-1-R1",
      match_key: "2324-AUS-CMP-E102-1",
      team_key: "11148",
      station: 11,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
    {
      match_participant_key: "2324-AUS-CMP-E901-1-R1",
      match_key: "2324-AUS-CMP-E901-1",
      team_key: "11148",
      station: 11,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
    {
      match_participant_key: "2324-AUS-CMP-E902-1-R1",
      match_key: "2324-AUS-CMP-E902-1",
      team_key: "11148",
      station: 11,
      station_status: 1,
      ref_status: 0,
      team: {
        team_key: "11148",
        region_key: "AUS",
        league_key: "",
        team_number: 11148,
        team_name_short: "Barker Greybacks",
        team_name_long: "Barker College",
        robot_name: "",
        last_active: "2324",
        city: "Hornsby",
        state_prov: "NSW",
        zip_code: 2077,
        country: "Australia",
        rookie_year: 2016,
        website: "",
      },
    },
  ];
  // const teamMatches = await fetchTeamMatches(teamNumber);
  const slicedData = data.slice(0, 1);
  const matchData = slicedData.map((match) => {
    return {
      match_participant_key: match.match_participant_key,
      match_key: match.match_key,
    };
  });
  const allianceColour =
    matchData[0].match_participant_key.slice(-2, -1) == "B" ? "blue" : "red";
  const robotNumber = matchData[0].match_participant_key.slice(-1);
  const matchKey = matchData[0].match_key;

  const matchDetails = await fetchMatchDetails(matchKey);
  const colourData = matchDetails[0][allianceColour];
  const teamData = [];
  for (const key in colourData) {
    key.endsWith(robotNumber) ? teamData.push(colourData[key]) : null;
  }
  console.log(teamData);

  const allianceData = [];
  const allianceDataSet = [
    "mosaics",
    "max_set_line",
    "penalty_points_comitted",
  ];
  for (const key in colourData) {
    if (allianceDataSet.includes(key)) {
      allianceData.push(colourData[key]);
    }
  }
  console.log(allianceData);

  return teamData.concat(allianceData);
  // [teamProp, yellowPixel, purplePixel, drone, climb, mosaics, setLine, penalties]
}

async function getData(teamNumber) {
  try {
    const npOPR = await fetchOPR(teamNumber);
    const data = await fetchData(teamNumber);

    const autonomousOPR = Math.round(npOPR.auto.value);
    const teamProp = "";
    const yellowPixel = "";
    const purplePixel = "";
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
      "Team Prop": teamProp,
      "Yellow Pixel": yellowPixel,
      "Purple Pixel": purplePixel,
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
  } catch (e) {
    console.error("Failure: ", e);
    return [];
  }
}

async function StatisticsList({ teamNumber }) {
  const statistics = await getData(teamNumber);
  console.info(statistics);

  return (
    <>
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
                      <>
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
                      </>
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

export default function CommandPalette() {
  const [isOpenCommandPalette, setIsOpenCommandPalette] = useState(false);
  const [teamNumber, setTeamNumber] = useState(11148);
  const [isOpenStatisticsModal, setIsOpenStatisticsModal] = useState(false);

  useEffect(() => {
    function onkeydown(e) {
      (e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/"
        ? setIsOpenCommandPalette(!isOpenCommandPalette)
        : e.key === "Enter" && isOpenCommandPalette
        ? (closeCommandPalette(), openStatisticsModal())
        : null;
    }
    window.addEventListener("keydown", onkeydown);
    return () => {
      window.removeEventListener("keydown", onkeydown);
    };
  }, [isOpenCommandPalette]);

  function closeCommandPalette() {
    setIsOpenCommandPalette(false);
  }

  function openCommandPalette() {
    setIsOpenCommandPalette(true);
  }

  function closeStatisticsModal() {
    setIsOpenStatisticsModal(false);
  }

  function openStatisticsModal() {
    setIsOpenStatisticsModal(true);
  }

  function StatisticsModal({ teamNumber }) {
    return (
      <>
        <Transition show={isOpenStatisticsModal} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={closeStatisticsModal}
          >
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
                      <StatisticsList teamNumber={teamNumber} />
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
  return (
    <>
      <button
        type="button"
        onClick={openCommandPalette}
        className="text-sm font-semibold text-black dark:text-white"
      >
        View Statistics
      </button>
      <StatisticsModal teamNumber={teamNumber} />

      <Transition show={isOpenCommandPalette} as={Fragment}>
        <Dialog as="div" className="relative z-5" onClose={closeCommandPalette}>
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
                <Dialog.Panel className="transform overflow-hidden dark:bg-black m-6 align-middle shadow-xl transition-all mx-auto">
                  <Combobox
                    value={teamNumber}
                    onChange={setTeamNumber}
                    as="div"
                    className="relative shadow-2xl"
                  >
                    <Combobox.Input
                      onChange={(e) => {
                        setTeamNumber(e.target.value);
                      }}
                      className="block w-[680px] h-[50px] text-xl rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 focus:ring-0"
                      placeholder="Team Number"
                      autoComplete="off"
                    />
                  </Combobox>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

// todo
// copy link
// try catch for invalid team
