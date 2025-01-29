import Posts from "./features/post/pages/Posts";
import Mainlayout from "./features/common/layouts/Main.layout";
import { Route, Routes } from "react-router-dom";
import Auth from "features/auth/pages/Auth";
import { selectTheme } from "features/common/slice/themeSlice";
import { useAppSelector } from "app/hooks";

function App() {
    const { dark } = useAppSelector(selectTheme)

    return (
        <div className={`App ${dark ? 'dark' : ''}`}>
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
