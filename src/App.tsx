import Posts from "./features/post/pages/Posts";
import Mainlayout from "./features/common/layouts/Main.layout";
import { Route, Routes } from "react-router-dom";
import Auth from "features/auth/pages/Auth";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Mainlayout />}>
                    <Route index element={<Posts />} />
                    <Route path="auth" element={<Auth />} />
                </Route>

            </Routes>
        </div>
    );
}

export default App;
