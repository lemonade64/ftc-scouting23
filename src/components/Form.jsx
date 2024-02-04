"use client";
import submit from "@/actions/submit";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function Form() {
  // const [formData, setFormData] = useState({});
  const [state, action] = useFormState(submit, { message: "" });
  const { pending } = useFormStatus();

  {
    /* 
  const [teamNumber, setTeamNumber] = useState("");
  const [teamName, setTeamName] = useState("");
  const [qualificationNumber, setQualificationNumber] = useState("");
  const [allianceColour, setAllianceColour] = useState("");
  const [autonomousCycles, setAutonomousCycles] = useState("");
  const [yellowPixel, setYellowPixel] = useState("");
  const [purplePixel, setPurplePixel] = useState("");
  const [teamProp, setTeamProp] = useState("");
  const [drone, setDrone] = useState("");
  const [climbTime, setClimbTime] = useState("");
  const [teleOpCycles, setTeleOpCycles] = useState("");
  const [penalties, setPenalties] = useState("");
  const [notes, setNotes] = useState("");

  const clearFormData = () => {
    setFormData({});
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Form Submitted!");
      } else {
        throw new Error("network error");
      }
    } catch (e) {
      console.error("error: ", e);
    }

    // const content = await response.json();

    // alert(content.data.tableRange);
    clearFormData();

    router.push("/thank-you");
  }; 
*/
  }

  return (
    <main className="h-screen flex items-center justify-center mx-auto sm:max-w-3xl md:max-w-5xl px-6 my-10">
      <form /* onSubmit={handleSubmit} */ action={submit}>
        <h1 className="mt-4 font-bold text-black text-2xl text-center">
          Greybacks FTC Scouting Form
        </h1>
        <div className="mt-10 grid gap-x-8 gap-y-8 grid-cols-6">
          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="teamNumber"
              className="block text-sm font-medium text-black text-center"
            >
              Team Number
            </label>
            <div className="mt-2">
              <input
                /* defaultValue={""} */
                required
                autoComplete="off"
                type="text"
                name="teamNumber"
                id="teamNumber"
                /* value={formData.teamNumber || ""}
                onChange={handleChange} */
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
              />
            </div>
          </div>

          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="teamName"
              className="block text-sm font-medium text-black text-center"
            >
              Team Name
            </label>
            <div className="mt-2">
              <input
                /* defaultValue={""} */
                autoComplete="off"
                type="text"
                name="teamName"
                id="teamName"
                /* value={formData.teamName || ""}
                onChange={handleChange} */
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
              />
            </div>
          </div>

          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="qualificationNumber"
              className="block text-sm font-medium text-black text-center"
            >
              Qualification
            </label>
            <div className="mt-2">
              <input
                /* defaultValue={""} */
                autoComplete="off"
                type="text"
                name="qualificationNumber"
                id="qualificationNumber"
                /* value={formData.qualificationNumber || ""}
                onChange={handleChange} */
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
              />
            </div>
          </div>

          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="allianceColour"
              className="block text-sm font-medium text-black text-center"
            >
              Alliance Colour
            </label>
            <div className="mt-2">
              <select
                /* defaultValue={"Blue"} */
                name="allianceColour"
                id="allianceColour"
                /* value={formData.allianceColour || "Blue"}
                onChange={handleChange} */
                className="block w-full rounded-md border-1 border-gray-300 py-1.5 text-black shadow-sm text-sm focus:ring-0"
              >
                <option>Blue</option>
                <option>Red</option>
              </select>
            </div>
          </div>

          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="autonomousCycles"
              className="block text-sm font-medium text-black text-center"
            >
              Auto Cycles
            </label>
            <div className="mt-2">
              <input
                /* defaultValue={""} */
                required
                autoComplete="off"
                type="text"
                name="autonomousCycles"
                id="autonomousCycles"
                /* value={formData.autonomousCycles || ""}
                onChange={handleChange} */
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
              />
            </div>
          </div>
          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="autonomousPosition"
              className="block text-sm font-medium text-black text-center"
            >
              Auto Position
            </label>
            <div className="mt-2">
              <select
                /* defaultValue={"Audience"} */
                name="autonomousPosition"
                id="autonomousPosition"
                /* value={formData.autonomousPosition || "Audience"} // ""
                onChange={handleChange} */
                className="block w-full rounded-md border-1 border-gray-300 py-1.5 text-black shadow-sm text-sm focus:ring-0"
              >
                <option>Audience</option>
                <option>Backboard</option>
              </select>
            </div>
          </div>

          <label className="block text-sm font-medium text-black md:col-span-4 col-span-6 max-[768px]:row-span-1 text-center">
            Auto Spike Mark
            <div className="mt-4">
              <div className="grid grid-cols-3 gap-x-2 items-center">
                <label
                  htmlFor="yellowPixel"
                  className="inline-flex items-center mx-auto"
                >
                  <input
                    /* defaultValue={"No"} */
                    type="checkbox"
                    name="yellowPixel"
                    id="yellowPixel"
                    /* value={formData.yellowPixel || "Yes"}
                    onChange={handleChange} */
                    className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0"
                  ></input>
                  <span className="ml-2 font-normal">Yellow Pixel</span>
                </label>
                <label
                  htmlFor="purplePixel"
                  className="inline-flex items-center mx-auto"
                >
                  <input
                    /* defaultValue={"No"} */
                    type="checkbox"
                    name="purplePixel"
                    id="purplePixel"
                    /* value={formData.purplePixel || "Yes"}
                    onChange={handleChange} */
                    className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0"
                  ></input>
                  <span className="ml-2 font-normal">Purple Pixel</span>
                </label>
                <label
                  htmlFor="teamProp"
                  className="inline-flex items-center mx-auto"
                >
                  <input
                    /* defaultValue={"No"} */
                    type="checkbox"
                    name="teamProp"
                    id="teamProp"
                    /* value={formData.teamProp || "Yes"}
                    onChange={handleChange} */
                    className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0"
                  ></input>
                  <span className="ml-2 font-normal">Team Prop</span>
                </label>
              </div>
            </div>
          </label>
          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="drone"
              className="block text-sm font-medium text-black text-center"
            >
              Drone
            </label>
            <div className="mt-2">
              <select
                /*  defaultValue={"N/A (+0 Points)"} */
                name="drone"
                id="drone"
                /* value={formData.drone || "N/A (+0 Points)"}
                onChange={handleChange} */
                className="block w-full rounded-md border-1 border-gray-300 py-1.5 text-black shadow-sm text-sm focus:ring-0"
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
              className="block text-sm font-medium text-black text-center"
            >
              Climb Time (seconds)
            </label>
            <div className="mt-2">
              <input
                /*  defaultValue={""} */
                autoComplete="off"
                type="text"
                name="climbTime"
                id="climbTime"
                /* value={formData.climbTime || ""}
                onChange={handleChange} */
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
              />
            </div>
          </div>
          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="teleOpCycles"
              className="block text-sm font-medium text-black text-center"
            >
              TeleOp Cycles
            </label>
            <div className="mt-2">
              <input
                /*  defaultValue={""} */
                required
                autoComplete="off"
                type="text"
                name="teleOpCycles"
                id="teleOpCycles"
                /* value={formData.teleOpCycles || ""}
                onChange={handleChange} */
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
              />
            </div>
          </div>
          <div className="md:col-span-2 col-span-3">
            <label
              htmlFor="penalties"
              className="block text-sm font-medium text-black text-center"
            >
              Penalties
            </label>
            <div className="mt-2">
              <input
                /*  defaultValue={""} */
                autoComplete="off"
                type="text"
                name="penalties"
                id="penalties"
                /* value={formData.penalties || ""}
                onChange={handleChange} */
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
              />
            </div>
          </div>
          <div className="col-span-6 md:row-span-1 pt-6 border-t-[1px] border-gray-300">
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-black text-center"
            >
              Additional Notes
            </label>
            <div className="mt-2">
              <textarea
                /*  defaultValue={""} */
                autoComplete="off"
                name="notes"
                id="notes"
                /* value={formData.notes || ""}
                onChange={handleChange} */
                rows={10}
                placeholder=""
                className="resize-y block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="reset"
            /* onClick={clearFormData} */
            className="text-sm font-semibold text-black"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={pending}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            {pending ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </main>
  );
}
