import { FC, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PublicTheme } from '../theme/Public';

const LandingPage = lazy(() => import('../modules/Cms/components/Pages/LandingPage/LandingPage'));

const VisitorRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route element={<PublicTheme.Common.MainLayout />}>
                <Route path={`/`} element={<LandingPage />} />
            </Route>
        </Routes>
    )
}

export default VisitorRoutes