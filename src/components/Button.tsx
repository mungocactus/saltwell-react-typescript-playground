import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  buttonType: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabledBoolean: boolean;
  buttonText: string;
};

export default function Button({
  buttonType,
  disabledBoolean,
  buttonText,
}: ButtonProps) {
  return (
    <button type={buttonType} disabled={disabledBoolean}>
      {buttonText}
    </button>
  );
}
