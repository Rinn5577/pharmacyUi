import React from "react";

interface Props {
  children?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant: string;
  disabled?: boolean;
  name: string;
  value?: string;
  placeholder?: string;
  size: string // inputMd, inputLg
}
const FormInput: React.FC<Props> = ({
  children,
  onChange,
  variant,
  disabled,
  name,
  value,
  placeholder,
  size,
  ...rest
}) => {
  return (
    <div className="flex flex-col">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {children}
      </label>
      <input
        className={`input ${size}` + (disabled ? ` disabled` : ``)}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
        placeholder={placeholder}
        type={variant}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
