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
        .then(m => ({ Component: m.HomePage }))
    }
  },
  {
    label: 'Shader HMR',
    route: {
      path: ROUTES.HMR,
      lazy: () => import('@/pages/HmrPage')
        .then(m => ({ Component: m.HmrPage }))
    },
  },
  {
    label: 'Sun',
    route: {
      path: ROUTES.SUN,
      lazy: () => import('@/pages/SunPage')
        .then(m => ({ Component: m.SunPage }))
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
