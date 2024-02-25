export default function InputWrapper({ value, name, children }) {
  return (
    <div className="md:col-span-2 col-span-3">
      <label
        htmlFor={value}
        className="block text-sm font-medium text-black text-center dark:text-white"
      >
        {name}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
