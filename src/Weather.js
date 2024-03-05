import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			city: response.data.city,
			date: new Date(response.data.time * 1000),
			description: response.data.condition.description,
			iconUrl: response.data.condition.icon_url,
			temperature: Math.round(response.data.temperature.current),
			humidity: response.data.temperature.humidity,
			wind: response.data.wind.speed,
		});
	}
	function handleSubmit(event) {
		event.preventDefault();
		search();
	}
	function handleCityChange(event) {
		// event.preventDefault();
		setCity(event.target.value);
	}
	function search() {
		const apiKey = "37f37b16a8e706e48te69fa4b2o3e673";
		const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city..."
								className="form-control"
								autoFocus="on"
								onChange={handleCityChange}
							/>
						</div>
						<div className="col-3">
							<input
								type="submit"
								value="search"
								className="btn btn-primary w-100"
							/>
						</div>
					</div>
				</form>
				<WeatherInfo data={weatherData} />
			</div>
		);
	} else {
		search();
		return "loading";
	}
}
