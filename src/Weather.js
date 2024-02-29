import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			city: response.data.city,
			date: "Wednesday 07:00",
			description: response.data.condition.description,
			iconUrl: response.data.condition.icon_url,
			temperature: Math.round(response.data.temperature.current),
			humidity: response.data.temperature.humidity,
			wind: response.data.wind.speed,
		});
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city..."
								className="form-control"
								autoFocus="on"
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
				<h1>{weatherData.city} </h1>
				<ul>
					<li>{weatherData.date} </li>
					<li className="text-capitalize">{weatherData.description}</li>
				</ul>
				<div className="row p-3">
					<div className="col-6 temp-container">
						<img src={weatherData.iconUrl} alt="mostly cloudy" />
						<span className="temperature ">{weatherData.temperature}</span>
						<span className="unit">°C</span>
					</div>

					<div className="col-6">
						<ul>
							<li>Humidity: {weatherData.humidity}%</li>
							<li>Wind: {weatherData.wind} km/h</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "37f37b16a8e706e48te69fa4b2o3e673";
		const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);
		return "loading";
	}
}
