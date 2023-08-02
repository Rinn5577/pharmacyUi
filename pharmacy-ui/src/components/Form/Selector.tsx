import React from "react";

interface Props {
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  name: string;
  optionValue: string[];
}
const Selector: React.FC<Props> = ({
  children,
  onChange,
  value,
  name,
  optionValue = ["default"],
  ...rest
}) => {
  return (
    <div className="flex flex-col">
      <label className="inline uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {children}
      </label>

      <select
        value={value}
        name={name}
        onChange={onChange}
        className="appearance-none w-max bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        {optionValue.map((option) => (
          <option value={option}>
            {option === "default" ? "Select" : option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
