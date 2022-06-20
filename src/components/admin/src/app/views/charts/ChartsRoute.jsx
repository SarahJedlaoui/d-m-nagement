import { authRoles } from '../../auth/authRoles';
import Loadable from '../../components/Loadable';
import { lazy } from 'react';

const AppEchart = Loadable(lazy(() => import('./echarts/AppEchart')));

const chartsRoute = [{ path: '/charts/echarts', element: <AppEchart />, auth: authRoles.editor }];

export default chartsRoute;
