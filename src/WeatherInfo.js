import React from "react";
import FormattedDate from "./FormattedDate";

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
					<span className="temperature ">{props.data.temperature}</span>
					<span className="unit">°C</span>
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
