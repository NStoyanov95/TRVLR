import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { DestinationsCatalog } from "./components/DestinationsCatalog";
import { About } from "./components/About";
import { DestinationDetailsCard } from "./components/DestinationDetailsCard";
import { Contacts } from "./components/Contacts";

function App() {
    return (
        <div className="bg-gray-200">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<DestinationsCatalog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />

                <Route
                    path="/destinations/:destinationId"
                    element={<DestinationDetailsCard />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
