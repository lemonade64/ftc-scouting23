"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const router = useRouter();
  const [formData, setFormData] = useState({});

  const clearFormData = () => {
    setFormData({});
  };

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [key]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    clearFormData();
    router.push("/thank-you");
  };

  return (
    <main className="h-screen flex items-center justify-center mx-auto max-w-2xl sm:max-w-[800px] px-6">
      <form onSubmit={handleSubmit}>
        <h1 className="mt-4 font-bold text-black text-2xl text-center">
          Greybacks FTC Scouting Form
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-x-4 lg:gap-x-8 gap-y-4 sm:gap-y-10 lg:grid-cols-10 sm:grid-cols-1">
          <div className="sm:col-span-3">
            <label className="block text-sm font-medium text-black text-center">
              Team Number
            </label>
            <div className="mt-2">
              <input
                autoComplete="off"
                type="text"
                name="team-number"
                id="team-number"
                value={"" || formData.teamNumber}
                onChange={handleChange}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-medium text-black text-center">
              Team Name
            </label>
            <div className="mt-2">
              <input
                autoComplete="off"
                type="text"
                name="team-name"
                id="team-name"
                value={"" || formData.teamName}
                onChange={handleChange}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-black text-center">
              Qualification
            </label>
            <div className="mt-2">
              <input
                autoComplete="off"
                type="text"
                name="qualification-number"
                id="qualification-number"
                value={"" || formData.qualificationNumber}
                onChange={handleChange}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-black text-center">
              Alliance Colour
            </label>
            <div className="mt-2">
              <select
                id="colour"
                name="colour"
                value={"Blue" || formData.allianceColour}
                onChange={handleChange}
                className="block w-full rounded-md border-1 border-gray-300 py-1.5 text-black shadow-sm text-sm focus:ring-0"
              >
                <option>Blue</option>
                <option>Red</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-black text-center">
              Auto Cycles
            </label>
            <div className="mt-2">
              <input
                autoComplete="off"
                type="text"
                name="autonomous-cycles"
                id="autonomous-cycles"
                value={"" || formData.autonomousCycles}
                onChange={handleChange}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-black text-center">
              Auto Position
            </label>
            <div className="mt-2">
              <select
                id="position"
                name="position"
                value={"Audience" || formData.position}
                onChange={handleChange}
                className="block w-full rounded-md border-1 border-gray-300 py-1.5 text-black shadow-sm text-sm focus:ring-0"
              >
                <option>Audience</option>
                <option>Backboard</option>
              </select>
            </div>
          </div>

          <label className="block text-sm font-medium text-black col-span-6 text-center">
            Auto Spike Mark
            <div className="mt-4">
              <div className="grid grid-cols-3 gap-x-1 items-center">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="yellow-pixel"
                    id="yellow-pixel"
                    value={"yes" || formData.yellowPixel}
                    onChange={handleChange}
                    className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0"
                  ></input>
                  <span className="ml-2 font-normal">Yellow Pixel</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="purple-pixel"
                    id="purple-pixel"
                    value={"yes" || formData.purplePixel}
                    onChange={handleChange}
                    className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0"
                  ></input>
                  <span className="ml-2 font-normal">Purple Pixel</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="team-prop"
                    id="team-prop"
                    value={"yes" || formData.teamProp}
                    onChange={handleChange}
                    className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0"
                  ></input>
                  <span className="ml-2 font-normal">Team Prop</span>
                </label>
              </div>
            </div>
          </label>
          <div className="sm:col-span-3">
            <label className="block text-sm font-medium text-black text-center">
              Drone
            </label>
            <div className="mt-2">
              <select
                id="drone"
                name="drone"
                value={"N/A (+0 Points)" || formData.drone}
                onChange={handleChange}
                className="block w-full rounded-md border-1 border-gray-300 py-1.5 text-black shadow-sm text-sm focus:ring-0"
              >
                <option>N/A (+0 Points)</option>
                <option>Zone 1 (+30 Points)</option>
                <option>Zone 2 (+20 Points)</option>
                <option>Zone 3 (+10 Points)</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-medium text-black text-center">
              Climb Time (seconds)
            </label>
            <div className="mt-2">
              <input
                autoComplete="off"
                type="text"
                name="climb-time"
                id="climb-time"
                value={"" || formData.climbTime}
                onChange={handleChange}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-black text-center">
              TeleOp Cycles
            </label>
            <div className="mt-2">
              <input
                autoComplete="off"
                type="text"
                name="teleop-cycles"
                id="teleop-cycles"
                value={"" || formData.teleopCycles}
                onChange={handleChange}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-black text-center">
              Penalties
            </label>
            <div className="mt-2">
              <input
                autoComplete="off"
                type="text"
                name="penalties"
                id="penalties"
                value={"" || formData.penalties}
                onChange={handleChange}
                className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
              />
            </div>
          </div>
          <div className="sm:col-span-10 pt-6 border-t-[1px] border-gray-300">
            <label className="block text-sm font-medium text-black text-center">
              Additional Notes
            </label>
            <div className="mt-2">
              <textarea
                autoComplete="off"
                id="notes"
                name="notes"
                value={"" || formData.notes}
                onChange={handleChange}
                rows={10}
                placeholder=""
                className="resize-y block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="reset"
            onClick={clearFormData}
            className="text-sm font-semibold text-black"
          >
            Reset
          </button>
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
}
