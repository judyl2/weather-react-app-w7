import React from "react";

export default function WeatherForecastDay(props) {
	function maxTemperature() {
		return Math.round(props.data.temperature.maximum);
	}
	function minTemperature() {
		return Math.round(props.data.temperature.minimum);
	}
	function day() {
		let date = new Date(props.data.time * 1000);
		let day = date.getDay();
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		return days[day];
	}

	return (
		<div>
			<div className="wf-weather-day">{day()}</div>
			<img
				src={props.data.condition.icon_url}
				alt="mostly cloudy"
				className="wf-icon"
			/>{" "}
			<div>
				<span className="wf-temp-max">{maxTemperature()}°</span>
				<span className="wf-temp-min">{minTemperature()}°</span>{" "}
			</div>
		</div>
	);
}
