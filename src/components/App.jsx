import "./App.css";
import Download from "./Download";
import Featured from "./Featured";
import Home from "./Home";
import Images from "./Images";
import Newsletter from "./Newsletter";
import Third from "./Third";
import Inspirations from "./Inspirations";
import Learnmore from "./Learnmore";
import Footer from "./Footer";

function App() {
	return (
		<div className="App">
			<Home />
			<Images />
			<Third />
			<Download />
			<Featured />
			<Newsletter />
			<Inspirations />
			<Learnmore />
			<Footer />
		</div>
	);
}

export default App;
