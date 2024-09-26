import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { DestinationsCatalog } from "./components/DestinationsCatalog";

function App() {
    return (
        <div className="bg-gray-200">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<DestinationsCatalog />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
