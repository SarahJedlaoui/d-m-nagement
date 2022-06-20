import AuthGuard from './auth/AuthGuard';
import chartsRoute from './views/charts/ChartsRoute';
import dashboardRoutes from './views/dashboard/DashboardRoutes';
import materialRoutes from './views/material-kit/MaterialRoutes';
import NotFound from './views/sessions/NotFound';
import sessionRoutes from './views/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [...dashboardRoutes, ...chartsRoute, ...materialRoutes],
  },
  ...sessionRoutes,
  { path: '/', element: <Navigate to="dashboard/default" /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
