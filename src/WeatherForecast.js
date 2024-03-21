import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay.js";
import axios from "axios";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	function handleResponse(response) {
		console.log(response.data);
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		console.log(forecast);

		return (
			<div className="WeatherForecast row">
				{forecast.map(function (dailyForecast, index) {
					if (index < 6) {
						return (
							<div className="col" key={index}>
								<WeatherForecastDay data={dailyForecast} />
							</div>
						);
					} else {
						return null;
					}
				})}
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
