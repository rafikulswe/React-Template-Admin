import { FC, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminTheme } from '../theme/Admin';

const Dashboard = lazy(() => import('../modules/Dashboard/Dashboard'));
const ExampleListController = lazy(() => import('../modules/Example/List/ExampleList.controller'));

const AdminRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route element={<AdminTheme.Common.MainLayout />}>
                <Route path={`/`} element={<Dashboard />} />
                <Route path={`/users`} element={<ExampleListController />} />
            </Route>
        </Routes>
    )
}

export default AdminRoutes