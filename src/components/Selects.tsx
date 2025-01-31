import { type ChangeEvent } from "react";

type SelectProps = {
	selectLabelTitle: string;
	selectId: string;
	selectName: string;
	selectRef: any;
	getSelectValue: (event: ChangeEvent<HTMLSelectElement>) => void;
	selectOptions: any;
};

export default function Selects({
	selectLabelTitle,
	selectId,
	selectName,
	selectRef,
	getSelectValue,
	selectOptions,
}: SelectProps) {
	return (
		<div className="input-container">
			<label htmlFor={selectId}>{selectLabelTitle}</label>
			<select
				ref={selectRef}
				name={selectName}
				id={selectId}
				onChange={getSelectValue}
			>
				{selectOptions}
			</select>
		</div>
	);
}
