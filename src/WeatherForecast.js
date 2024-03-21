import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay.js";
import axios from "axios";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	function handleResponse(response) {
		console.log(response.data);
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		console.log(forecast);
		return (
			<div className="WeatherForecast row">
				<div className="col">
					<WeatherForecastDay data={forecast[0]} />
				</div>
			</div>
		);
	} else {
		let apiKey = "37f37b16a8e706e48te69fa4b2o3e673";
		let longitude = props.coordinates.longitude;
		let latitude = props.coordinates.latitude;
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}
// let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
// 37f37b16a8e706e48te69fa4b2o3e673
