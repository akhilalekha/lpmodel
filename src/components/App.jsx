import "./App.css";
import Download from "./Download";
import Featured from "./Featured";
import Home from "./Home";
import Images from "./Images";
import Newsletter from "./Newsletter";
import Third from "./Third";

function App() {
	return (
		<div className="App">
			<Home />
			<Images />
			<Third />
			<Download />
			<Featured />
			<Newsletter />
		</div>
	);
}

export default App;
