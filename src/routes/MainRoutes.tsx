import { FC, lazy } from "react"
import VisitorRoutes from "./VisitorRoutes"
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";

const NotFound = lazy(() => import('../components/Error/NotFound/NotFound'));


const MainRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={"/*"} element={<VisitorRoutes />} />
            <Route path={"/admin/*"} element={<AdminRoutes />} />

            <Route element={<NotFound />} />
        </Routes>
    )
}

export default MainRoutes