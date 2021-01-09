import "./App.css";
import Download from "./Download";
import Featured from "./Featured";
import Home from "./Home";
import Images from "./Images";
import Third from "./Third";

function App() {
	return (
		<div className="App">
			<Home />
			<Images />
			<Third />
			<Download />
			<Featured />
		</div>
	);
}

export default App;
