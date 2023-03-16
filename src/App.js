import './App.scss';

import Header from "./components/Header";
import Banner from "./components/Banner";
import Work from "./components/Work";

function App() {
    return (
        <div className="app">
            <Header/>
            <Banner/>
            <Work/>
        </div>
    );
}

export default App;
