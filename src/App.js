import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";

function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather defaultCity="Paris" />
				<footer>
					This project was coded by <a href="#">Judy</a> and is open-sourced on{" "}
					<a href="#">Github</a>
				</footer>
			</div>
		</div>
	);
}

export default App;
