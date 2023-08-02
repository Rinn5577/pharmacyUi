import React from "react";

interface Props {
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant: string;
  disabled?: boolean;
  name: string;
  value: string;
  placeholder: string;
}
const formInput: React.FC<Props> = ({
  children,
  onChange,
  variant,
  disabled,
  name,
  value,
  placeholder,
  ...rest
}) => {
  return (
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {children}
      </label>
      <input
        className={`input` + (disabled ? ` disabled` : ``)}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
        placeholder={placeholder}
        type={variant}
        {...rest}
      />
    </>
  );
};

export default formInput;
