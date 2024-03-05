import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";
// import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
	return (
		<div>
			<h1>{props.data.city} </h1>

			<ul>
				<li>
					<FormattedDate date={props.data.date} />
				</li>
				<li className="text-capitalize">{props.data.description}</li>
			</ul>
			<div className="row p-3">
				<div className="col-6 temp-container">
					<img src={props.data.iconUrl} alt="mostly cloudy" />
					<WeatherTemperature celsius={props.data.temperature} />
					{/* <WeatherIcon code={props.data.icon} /> */}
				</div>
				<div className="col-6">
					<ul>
						<li>Humidity: {props.data.humidity}%</li>
						<li>Wind: {props.data.wind} km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
