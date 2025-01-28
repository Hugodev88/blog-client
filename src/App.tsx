import Mainlayout from "./features/common/layouts/Main.layout";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Mainlayout />} />
            </Routes>
        </div>
    );
}

export default App;
