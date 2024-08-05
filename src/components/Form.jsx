// "use client";

// import InputWrapper from "@/components/InputWrapper";
// import CommandPalette from "@/components/CommandPalette";
// import { usePathname, useRouter } from "next/navigation";
// import { useState } from "react";

// export default function Form() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const title = pathname.slice(1).replace(/^\w/, (e) => e.toUpperCase());

//   const [teamNumber, setTeamNumber] = useState("");
//   const [teamName, setTeamName] = useState("");
//   const [qualificationNumber, setQualificationNumber] = useState("");
//   const [allianceColour, setAllianceColour] = useState("Blue");
//   const [autonomousCycles, setAutonomousCycles] = useState(0);
//   const [autonomousPosition, setautonomousPosition] = useState("Audience");
//   const [yellowPixel, setYellowPixel] = useState("No");
//   const [purplePixel, setPurplePixel] = useState("No");
//   const [teamProp, setTeamProp] = useState("No");
//   const [drone, setDrone] = useState("N/A (+0 Points)");
//   const [climbTime, setClimbTime] = useState("");
//   const [teleOpCycles, setTeleOpCycles] = useState(0);
//   const [penalties, setPenalties] = useState("");
//   const [notes, setNotes] = useState("");

//   const [buttonState, setButton] = useState(false);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setButton(true);
//     const formData = {
//       teamNumber,
//       teamName,
//       qualificationNumber,
//       allianceColour,
//       autonomousCycles,
//       yellowPixel,
//       purplePixel,
//       teamProp,
//       drone,
//       climbTime,
//       teleOpCycles,
//       penalties,
//       notes,
//       title,
//     };
//     console.info(formData);
//     const data = JSON.stringify(formData);
//     console.info(data);
//     try {
//       const res = await fetch("/api/submit", {
//         method: "POST",
//         body: JSON.stringify(formData),
//         pathname,
//         headers: {
//           "content-type": "application/json",
//         },
//       });
//       console.info(res);

//       if (res.ok) {
//         console.info("Form Submitted!");
//       } else {
//         console.error("Failure: " + res.statusText);
//         throw new Error("HTTP " + res.status);
//       }
//     } catch (e) {
//       console.error("Failure: ", e);
//     }

//     router.push("/thank-you");
//   }

//   return (
//     <>
//       <main className="mx-auto sm:max-w-3xl md:max-w-5xl px-6">
//         <form onSubmit={handleSubmit} className="py-14">
//           <h1 className="mt-4 font-bold text-black text-2xl text-center dark:text-white">
//             {title} FTC Scouting Form
//           </h1>
//           <div className="mt-10 grid gap-x-8 gap-y-8 grid-cols-6">
//             <InputWrapper value="teamNumber" name="Team Number">
//               <input
//                 autoComplete="off"
//                 type="text"
//                 name="teamNumber"
//                 id="teamNumber"
//                 value={teamNumber}
//                 onChange={(e) => setTeamNumber(e.target.value)}
//                 className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
//               />
//             </InputWrapper>

//             <InputWrapper value="teamName" name="Team Name">
//               <input
//                 autoComplete="off"
//                 type="text"
//                 name="teamName"
//                 id="teamName"
//                 value={teamName}
//                 onChange={(e) => setTeamName(e.target.value)}
//                 className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
//               />
//             </InputWrapper>

//             <InputWrapper
//               value="qualificationNumber"
//               name="Qualification Number"
//             >
//               <input
//                 autoComplete="off"
//                 type="text"
//                 name="qualificationNumber"
//                 id="qualificationNumber"
//                 value={qualificationNumber}
//                 onChange={(e) => setQualificationNumber(e.target.value)}
//                 className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
//               />
//             </InputWrapper>

//             <InputWrapper value="allianceColour" name="Alliance Colour">
//               <select
//                 name="allianceColour"
//                 id="allianceColour"
//                 value={allianceColour}
//                 onChange={(e) => setAllianceColour(e.target.value)}
//                 className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
//               >
//                 <option>Blue</option>
//                 <option>Red</option>
//               </select>
//             </InputWrapper>

//             <InputWrapper value="autonomousCycles" name="Autonomous Cycles">
//               <input
//                 autoComplete="off"
//                 type="text"
//                 name="autonomousCycles"
//                 id="autonomousCycles"
//                 value={autonomousCycles}
//                 onChange={(e) => setAutonomousCycles(e.target.value)}
//                 className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
//               />
//             </InputWrapper>

//             <InputWrapper value="autonomousPosition" name="Auto Position">
//               <select
//                 name="autonomousPosition"
//                 id="autonomousPosition"
//                 value={autonomousPosition}
//                 onChange={(e) => setautonomousPosition(e.target.value)}
//                 className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
//               >
//                 <option>Audience</option>
//                 <option>Backboard</option>
//               </select>
//             </InputWrapper>

//             <div className="block text-sm font-medium text-black md:col-span-4 col-span-6 max-[768px]:row-span-1 text-center dark:text-white">
//               Auto Spike Mark
//               <div className="mt-4">
//                 <div className="grid grid-cols-3 gap-x-2 items-center">
//                   <label
//                     htmlFor="yellowPixel"
//                     className="inline-flex items-center mx-auto"
//                   >
//                     <input
//                       type="checkbox"
//                       name="yellowPixel"
//                       id="yellowPixel"
//                       value={yellowPixel}
//                       onChange={(e) => setYellowPixel(e.target.value)}
//                       className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0 dark:ring-1 dark:ring-white"
//                     ></input>
//                     <span className="ml-2 font-normal">Yellow Pixel</span>
//                   </label>
//                   <label
//                     htmlFor="purplePixel"
//                     className="inline-flex items-center mx-auto"
//                   >
//                     <input
//                       type="checkbox"
//                       name="purplePixel"
//                       id="purplePixel"
//                       value={purplePixel}
//                       onChange={(e) => setPurplePixel(e.target.value)}
//                       className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0 dark:ring-1 dark:ring-white"
//                     ></input>
//                     <span className="ml-2 font-normal">Purple Pixel</span>
//                   </label>
//                   <label
//                     htmlFor="teamProp"
//                     className="inline-flex items-center mx-auto"
//                   >
//                     <input
//                       type="checkbox"
//                       name="teamProp"
//                       id="teamProp"
//                       value={teamProp}
//                       onChange={(e) => setTeamProp(e.target.value)}
//                       className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0 dark:ring-1 dark:ring-white"
//                     ></input>
//                     <span className="ml-2 font-normal">Team Prop</span>
//                   </label>
//                 </div>
//               </div>
//             </div>

//             <InputWrapper value="drone" name="Drone">
//               <select
//                 name="drone"
//                 id="drone"
//                 value={drone}
//                 onChange={(e) => setDrone(e.target.value)}
//                 className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
//               >
//                 <option>N/A (+0 Points)</option>
//                 <option>Zone 1 (+30 Points)</option>
//                 <option>Zone 2 (+20 Points)</option>
//                 <option>Zone 3 (+10 Points)</option>
//               </select>
//             </InputWrapper>

//             <InputWrapper value="climbTime" name="Climb Time">
//               <input
//                 autoComplete="off"
//                 type="text"
//                 name="climbTime"
//                 id="climbTime"
//                 value={climbTime}
//                 onChange={(e) => setClimbTime(e.target.value)}
//                 className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
//               />
//             </InputWrapper>

//             <InputWrapper value="teleOpCycles" name="TeleOp Cycles">
//               <input
//                 autoComplete="off"
//                 type="number"
//                 name="teleOpCycles"
//                 id="teleOpCycles"
//                 value={teleOpCycles}
//                 onChange={(e) => setTeleOpCycles(e.target.value)}
//                 className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
//               />
//             </InputWrapper>

//             <InputWrapper value="penalties" name="Penalties">
//               <input
//                 autoComplete="off"
//                 type="text"
//                 name="penalties"
//                 id="penalties"
//                 value={penalties}
//                 onChange={(e) => setPenalties(e.target.value)}
//                 className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
//               />
//             </InputWrapper>
//             <div className="grid grid-cols-4 md:col-span-6 border-gray-300">
//               {["Increase", "Decrease"].map((action) => (
//                 <div
//                   key={`auto-${action}`}
//                   onClick={() =>
//                     setAutonomousCycles(
//                       action === "Increase"
//                         ? autonomousCycles + 1
//                         : autonomousCycles - 1
//                     )
//                   }
//                   className="flex flex-row justify-center cursor-pointer"
//                 >
//                   Auto Cycles {action}
//                 </div>
//               ))}
//               {["Increase", "Decrease"].map((action) => (
//                 <div
//                   key={`teleop-${action}`}
//                   onClick={() =>
//                     setTeleOpCycles(
//                       action === "Increase"
//                         ? teleOpCycles + 1
//                         : teleOpCycles - 1
//                     )
//                   }
//                   className="flex flex-row justify-center cursor-pointer"
//                 >
//                   TeleOp Cycles {action}
//                 </div>
//               ))}
//             </div>

//             <div className="col-span-6 md:row-span-1 pt-6 border-t-[1px] border-gray-300">
//               <label
//                 htmlFor="notes"
//                 className="block text-sm font-medium text-black text-center dark:text-white"
//               >
//                 Additional Notes
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   autoComplete="off"
//                   name="notes"
//                   id="notes"
//                   value={notes}
//                   onChange={(e) => setNotes(e.target.value)}
//                   rows={10}
//                   placeholder=""
//                   className="resize-y block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center justify-between col-span-6">
//               <CommandPalette className="justify-start" />
//               <div>
//                 <button
//                   type="reset"
//                   onClick={() => location.reload()}
//                   className="text-sm font-semibold text-black mr-6 dark:text-white"
//                 >
//                   Reset
//                 </button>

//                 <button
//                   type="submit"
//                   disabled={buttonState}
//                   className={`inline-flex rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm dark:bg-white dark:text-black ${
//                     buttonState ? "opacity-70" : ""
//                   }`}
//                 >
//                   <svg
//                     className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${
//                       buttonState ? "" : "hidden"
//                     }`}
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                     ></path>
//                   </svg>
//                   {buttonState ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </main>
//     </>
//   );
// }
// "use client";

// import React, { useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import InputWrapper from "@/components/InputWrapper";
// import CommandPalette from "@/components/CommandPalette";

// const initialFormState = {
//   teamNumber: "",
//   teamName: "",
//   qualificationNumber: "",
//   allianceColour: "Blue",
//   autonomousCycles: 0,
//   autonomousPosition: "Audience",
//   yellowPixel: false,
//   purplePixel: false,
//   teamProp: false,
//   drone: "N/A (+0 Points)",
//   climbTime: "",
//   teleOpCycles: 0,
//   penalties: "",
//   notes: "",
// };

// export default function Form() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const title = pathname.slice(1).replace(/^\w/, (e) => e.toUpperCase());

//   const [formData, setFormData] = useState(initialFormState);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleCycleChange = (field, action) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: action === "Increase" ? prev[field] + 1 : prev[field] - 1,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const res = await fetch("/api/submit", {
//         method: "POST",
//         body: JSON.stringify({ ...formData, title }),
//         headers: { "content-type": "application/json" },
//       });

//       if (res.ok) {
//         console.info("Form Submitted!");
//         router.push("/thank-you");
//       } else {
//         throw new Error("HTTP " + res.status);
//       }
//     } catch (error) {
//       console.error("Submission Failed:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <main className="mx-auto sm:max-w-3xl md:max-w-5xl px-6">
//       <form onSubmit={handleSubmit} className="py-14">
//         <h1 className="mt-4 font-bold text-black text-2xl text-center dark:text-white">
//           {title} FTC Scouting Form
//         </h1>
//         <div className="mt-10 grid gap-x-8 gap-y-8 grid-cols-6">
//           {Object.entries(formData).map(([key, value]) => (
//             <InputWrapper
//               key={key}
//               value={key}
//               name={key.replace(/([A-Z])/g, " $1").trim()}
//             >
//               {key === "allianceColour" ||
//               key === "autonomousPosition" ||
//               key === "drone" ? (
//                 <select
//                   name={key}
//                   id={key}
//                   value={value}
//                   onChange={handleChange}
//                   className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
//                 >
//                   {key === "allianceColour" && (
//                     <>
//                       <option value="Blue">Blue</option>
//                       <option value="Red">Red</option>
//                     </>
//                   )}
//                   {key === "autonomousPosition" && (
//                     <>
//                       <option value="Audience">Audience</option>
//                       <option value="Backboard">Backboard</option>
//                     </>
//                   )}
//                   {key === "drone" && (
//                     <>
//                       <option value="N/A (+0 Points)">N/A (+0 Points)</option>
//                       <option value="Zone 1 (+30 Points)">
//                         Zone 1 (+30 Points)
//                       </option>
//                       <option value="Zone 2 (+20 Points)">
//                         Zone 2 (+20 Points)
//                       </option>
//                       <option value="Zone 3 (+10 Points)">
//                         Zone 3 (+10 Points)
//                       </option>
//                     </>
//                   )}
//                 </select>
//               ) : key === "yellowPixel" ||
//                 key === "purplePixel" ||
//                 key === "teamProp" ? (
//                 <input
//                   type="checkbox"
//                   name={key}
//                   id={key}
//                   checked={value}
//                   onChange={handleChange}
//                   className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0 dark:ring-1 dark:ring-white"
//                 />
//               ) : key === "notes" ? (
//                 <textarea
//                   name={key}
//                   id={key}
//                   value={value}
//                   onChange={handleChange}
//                   rows={10}
//                   className="resize-y block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
//                 />
//               ) : (
//                 <input
//                   type={
//                     key === "teleOpCycles" || key === "autonomousCycles"
//                       ? "number"
//                       : "text"
//                   }
//                   name={key}
//                   id={key}
//                   value={value}
//                   onChange={handleChange}
//                   className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
//                 />
//               )}
//             </InputWrapper>
//           ))}

//           <div className="grid grid-cols-4 md:col-span-6 border-gray-300">
//             {["Increase", "Decrease"].map((action) => (
//               <React.Fragment key={action}>
//                 <div
//                   onClick={() => handleCycleChange("autonomousCycles", action)}
//                   className="flex flex-row justify-center cursor-pointer"
//                 >
//                   Auto Cycles {action}
//                 </div>
//                 <div
//                   onClick={() => handleCycleChange("teleOpCycles", action)}
//                   className="flex flex-row justify-center cursor-pointer"
//                 >
//                   TeleOp Cycles {action}
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>

//           <div className="flex items-center justify-between col-span-6">
//             <CommandPalette className="justify-start" />
//             <div>
//               <button
//                 type="reset"
//                 onClick={() => setFormData(initialFormState)}
//                 className="text-sm font-semibold text-black mr-6 dark:text-white"
//               >
//                 Reset
//               </button>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`inline-flex rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm dark:bg-white dark:text-black ${
//                   isSubmitting ? "opacity-70" : ""
//                 }`}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Submitting...
//                   </>
//                 ) : (
//                   "Submit"
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </main>
//   );
// }

"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import InputWrapper from "@/components/InputWrapper";
import CommandPalette from "@/components/CommandPalette";

const initialFormState = {
  teamNumber: "",
  teamName: "",
  qualificationNumber: "",
  allianceColour: "Blue",
  autonomousCycles: 0,
  autonomousPosition: "Audience",
  yellowPixel: false,
  purplePixel: false,
  teamProp: false,
  drone: "N/A (+0 Points)",
  climbTime: 0,
  teleOpCycles: 0,
  penalties: 0,
  notes: "",
};

export default function Form() {
  const router = useRouter();
  const pathname = usePathname();
  const title = pathname.slice(1).replace(/^\w/, (e) => e.toUpperCase());

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.info(formData);
  };

  const handleCycleChange = (field, action) => {
    setFormData((prev) => ({
      ...prev,
      [field]: action === "Increase" ? prev[field] + 1 : prev[field] - 1,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({ ...formData, title }),
        headers: { "content-type": "application/json" },
      });

      if (res.ok) {
        console.info("Form Submitted!");
        router.push("/thank-you");
      } else {
        throw new Error("HTTP " + res.status);
      }
    } catch (error) {
      console.error("Submission Failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto sm:max-w-3xl md:max-w-5xl px-6">
      <form onSubmit={handleSubmit} className="py-14">
        <h1 className="mt-4 font-bold text-black text-2xl text-center dark:text-white">
          {title} FTC Scouting Form
        </h1>
        <div className="mt-10 grid gap-x-8 gap-y-8 grid-cols-6">
          {Object.entries(formData).map(([key, value]) => (
            <>
              {key === "allianceColour" ||
              key === "autonomousPosition" ||
              key === "drone" ? (
                <InputWrapper
                  key={key}
                  value={key}
                  name={key
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                    .replace(/^./, (str) => str.toUpperCase())}
                >
                  <select
                    name={key}
                    id={key}
                    value={value}
                    onChange={handleChange}
                    className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
                  >
                    {key === "allianceColour" && (
                      <>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                      </>
                    )}
                    {key === "autonomousPosition" && (
                      <>
                        <option value="Audience">Audience</option>
                        <option value="Backboard">Backboard</option>
                      </>
                    )}
                    {key === "drone" && (
                      <>
                        <option value="N/A (+0 Points)">N/A (+0 Points)</option>
                        <option value="Zone 1 (+30 Points)">
                          Zone 1 (+30 Points)
                        </option>
                        <option value="Zone 2 (+20 Points)">
                          Zone 2 (+20 Points)
                        </option>
                        <option value="Zone 3 (+10 Points)">
                          Zone 3 (+10 Points)
                        </option>
                      </>
                    )}
                  </select>
                </InputWrapper>
              ) : key === "teamNumber" ||
                key === "teamName" ||
                key === "qualificationNumber" ||
                key === "climbTime" ||
                key === "penalties" ? (
                <InputWrapper
                  key={key}
                  value={key}
                  name={key
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                    .replace(/^./, (str) => str.toUpperCase())}
                >
                  <input
                    type={key === "teamName" ? "text" : "number"}
                    name={key}
                    id={key}
                    value={value}
                    onChange={handleChange}
                    className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
                  />
                </InputWrapper>
              ) : key === "yellowPixel" ? (
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
                          onChange={handleChange}
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
                          onChange={handleChange}
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
                          onChange={handleChange}
                          className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0 dark:ring-1 dark:ring-white"
                        ></input>
                        <span className="ml-2 font-normal">Team Prop</span>
                      </label>
                    </div>
                  </div>
                </div>
              ) : key === "notes" ? (
                <div className="col-span-6 md:row-span-1 pt-6 border-t-[1px] border-gray-300">
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-black text-center dark:text-white"
                  >
                    Additional Notes
                  </label>
                  <div className="mt-2">
                    <textarea
                      name={key
                        .replace(/([A-Z])/g, " $1")
                        .trim()
                        .replace(/^./, (str) => str.toUpperCase())}
                      id={key}
                      value={value}
                      onChange={handleChange}
                      rows={10}
                      placeholder=""
                      className="resize-y block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
                    />
                  </div>
                </div>
              ) : key === "teleOpCycles" || key === "autonomousCycles" ? (
                <InputWrapper
                  key={key}
                  value={key}
                  name={key
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                    .replace(/^./, (str) => str.toUpperCase())}
                >
                  <input
                    type={
                      key === "teleOpCycles" || key === "autonomousCycles"
                        ? "number"
                        : "text"
                    }
                    name={key}
                    id={key}
                    value={value}
                    onChange={handleChange}
                    className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0 dark:border-[#797979] dark:focus:border-white dark:placeholder:text-[#b4aa9c] dark:text-white dark:bg-black dark:shadow-[0_1px_2px_0px_rgba(225,225,225,0.5)]"
                  />
                </InputWrapper>
              ) : (
                <></>
              )}
            </>
          ))}

          <div className="grid grid-cols-4 md:col-span-6 border-gray-300">
            {["Increase", "Decrease"].map((action) => (
              <React.Fragment key={action}>
                <div
                  onClick={() => handleCycleChange("autonomousCycles", action)}
                  className="flex flex-row justify-center cursor-pointer"
                >
                  Auto Cycles {action}
                </div>
                <div
                  onClick={() => handleCycleChange("teleOpCycles", action)}
                  className="flex flex-row justify-center cursor-pointer"
                >
                  TeleOp Cycles {action}
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center justify-between col-span-6">
            <CommandPalette className="justify-start" />
            <div>
              <button
                type="reset"
                onClick={() => setFormData(initialFormState)}
                className="text-sm font-semibold text-black mr-6 dark:text-white"
              >
                Reset
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm dark:bg-white dark:text-black ${
                  isSubmitting ? "opacity-70" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
