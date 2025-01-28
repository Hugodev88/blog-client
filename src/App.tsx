import Posts from "./features/post/pages/Posts";
import Mainlayout from "./features/common/layouts/Main.layout";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Mainlayout />}>
                    <Route index element={<Posts />}></Route>
                </Route>

            </Routes>
        </div>
    );
}

export default App;
