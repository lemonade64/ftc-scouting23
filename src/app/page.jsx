export default function Home() {
  return (
    <form className="select-none">
      <div className="mx-auto max-w-2xl sm:max-w-3xl px-6 pt-14">
        <div className="border-b border-gray-300 pb-8">
          <h1 className="text-xl font-semibold text-black mx-auto text-center">
            Greybacks FTC Scouting Form
          </h1>
          <div>
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
                        className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0"
                      ></input>
                      <span className="ml-2 font-normal">Yellow Pixel</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox rounded bg-gray-200 border-white focus:bg-gray-200 text-black focus:ring-0"
                      ></input>
                      <span className="ml-2 font-normal">Purple Pixel</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
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
                    className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-black text-center">
                  Teleop Cycles
                </label>
                <div className="mt-2">
                  <input
                    autoComplete="off"
                    type="text"
                    name="teleop-cycles"
                    id="teleop-cycles"
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
                    className="block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
                  />
                </div>
              </div>
              <div className="col-span-10">
                <label className="block text-sm font-medium text-black text-center pb-2">
                  Rating
                </label>
                <input
                  type="range"
                  list="range"
                  className="text-white cursor-pointer appearance-none focus:ring-0 w-full"
                  name="rating"
                  id="id"
                  min="0"
                  max="10"
                  step="1"
                ></input>
                <datalist id="range">
                  <option value="0"></option>
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3"></option>
                  <option value="4"></option>
                  <option value="5"></option>
                  <option value="6"></option>
                  <option value="7"></option>
                  <option value="8"></option>
                  <option value="9"></option>
                  <option value="10"></option>
                </datalist>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label className="block text-sm font-medium text-black text-center">
              Additional Notes
            </label>
            <div className="mt-2">
              <textarea
                autoComplete="off"
                id="notes"
                name="notes"
                rows={10}
                placeholder=""
                className="resize-y block w-full rounded-md border-1 border-gray-300 focus:border-black py-1.5 text-black shadow-sm placeholder:text-gray-400 text-sm focus:ring-0"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="reset" className="text-sm font-semibold text-black">
            Reset
          </button>
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
// decodeURIComponent()
// map
// component
// responsive
