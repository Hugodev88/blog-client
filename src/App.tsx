import Posts from "./features/post/pages/Posts";
import Mainlayout from "./features/common/layouts/Main.layout";
import { Route, Routes } from "react-router-dom";
import Auth from "features/auth/pages/Auth";
import { selectTheme } from "features/common/slice/themeSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { authApi } from "features/auth/api/authApi";

function App() {
    const { dark } = useAppSelector(selectTheme)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(authApi.endpoints.me.initiate())
    })

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
