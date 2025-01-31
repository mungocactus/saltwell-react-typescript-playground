import { useEffect, useState, useRef } from "react";
import Inputs from "./Inputs.tsx";
import Selects from "./Selects.tsx";
import NavMenu from "./NavMenu.tsx";
import fewClouds from "../assets/weather-few-clouds.jpg";

export default function PageCurrencyConverter() {
	let [currencyData, setCurrencyData] = useState([]);
	let [currencyConverted, setCurrencyConverted] = useState(1);

	const currencyFromSelect = useRef<HTMLSelectElement>(null);
	const currencyToSelect = useRef<HTMLSelectElement>(null);
	const currencyInitialAmount = useRef<HTMLInputElement>(null);

	// Populate Select Options on page load with useEffect
	useEffect(() => {
		let currencyListapi = `https://api.currencybeacon.com/v1/currencies?api_key=wOaB3DNGN9CleUy4OgtCIgsGbR0xeIQK`;

		fetch(currencyListapi)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.response);
				setCurrencyData(data.response);
			})
			.catch((error) => console.log(error));
	}, []);

	currencyData.sort(function (a, b) {
		let textA = a.name;
		let textB = b.name;
		return textA.localeCompare(textB);
	});

	const getCurrencyOptions = currencyData.map((currency) => (
		<option key={currency.id} value={currency.short_code}>
			{currency.name}
		</option>
	));

	// end of populating Select Options

	// Get various current values on change of any one of them
	function getCurrentValue() {
		let currencyFrom = currencyFromSelect.current!.value;
		let currencyTo = currencyToSelect.current!.value;
		let currencyAmount = currencyInitialAmount.current!.value;
		let currencyConvertapi = `https://api.currencybeacon.com/v1/convert?api_key=wOaB3DNGN9CleUy4OgtCIgsGbR0xeIQK&from=${currencyFrom}&to=${currencyTo}&amount=${currencyAmount}`;

		fetch(currencyConvertapi)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.value);
				setCurrencyConverted(data.value.toFixed(2));
			})
			.catch((error) => console.log(error));
	}

	return (
		<>
			<div className="weatherpage">
				<section className="right-column">
					<NavMenu />
					<div className="currency">
						<section className="weather-left">
							<header>
								<div className="heading">
									<h1 className="header-title">Currency</h1>
									<h1 className="header-title">Converter</h1>
								</div>
							</header>
						</section>
						<section className="currency-right">
							<div className="converter">
								<Selects
									selectRef={currencyFromSelect}
									selectId="currency-1"
									selectLabelTitle="Select Currency"
									selectName="currency-from"
									getSelectValue={getCurrentValue}
									selectOptions={getCurrencyOptions}
								/>
								<Inputs
									inputRef={currencyInitialAmount}
									labelTitle="Amount"
									inputType="number"
									inputId="amount"
									inputValue="1"
									inputPlaceholder="0"
									getInputValue={getCurrentValue}
									error=""
								/>
							</div>
							<h4>Converts to</h4>
							<div className="converter">
								<Selects
									selectRef={currencyToSelect}
									selectId="currency-2"
									selectLabelTitle="Select Currency"
									selectName="currency-to"
									getSelectValue={getCurrentValue}
									selectOptions={getCurrencyOptions}
								/>
								<div className="input-container">
									<label>Amount</label>
									<div className="exchange-amount">
										<p>{currencyConverted}</p>
									</div>
								</div>
							</div>
						</section>
					</div>
				</section>
				<section className="left-column">
					<img src={fewClouds} alt="Cloud Image" />
				</section>
			</div>
		</>
	);
}
