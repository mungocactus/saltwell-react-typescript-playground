import { type ChangeEvent } from "react";

type InputProps = {
	labelTitle: string;
	inputType: string;
	inputId: string;
	inputValue: string;
	inputRef: any;
	inputPlaceholder: string;
	getInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
	error: string;
};

export default function Inputs({
	labelTitle,
	inputType,
	inputId,
	inputValue,
	inputRef,
	inputPlaceholder,
	getInputValue,
	error,
}: InputProps) {
	return (
		<div className="input-container">
			<label htmlFor={inputId}>{labelTitle}</label>
			<input
				ref={inputRef}
				type={inputType}
				id={inputId}
				name={inputId}
				defaultValue={inputValue}
				placeholder={inputPlaceholder}
				onChange={getInputValue}
			></input>
			<p className="input-error">{error}</p>
		</div>
	);
}
