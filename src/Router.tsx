import { ReactNode } from 'react';
import { createBrowserRouter, Navigate, Outlet, RouteObject } from 'react-router';
import { ROUTES } from '@/constants/routes';
import { Layout } from '@/components/Layout';

type RouteType = {
    label?: ReactNode
    route: RouteObject
}

const Routes: RouteType[] = [
  {
    label: 'Home',
    route: {
      path: ROUTES.ROOT,
      lazy: () => import('@/pages/HomePage')
        .then(m => ({ Component: m.default }))
    }
  },
  {
    label: 'Shader HMR',
    route: {
      path: ROUTES.SHADER_HMR,
      lazy: () => import('@/pages/ShaderHMRPage')
        .then(m => ({ Component: m.default }))
    },
  },
  {
    route: {
      path: ROUTES.ALL,
      element: <Navigate to={ROUTES.ROOT}/>
    }
  }
] as const;

const Router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: (
      <Layout>
        <Outlet/>
      </Layout>
    ),
    children: Routes.map(({ route }) => route)
  }
]);

export { Router, Routes };
export type { RouteType };
