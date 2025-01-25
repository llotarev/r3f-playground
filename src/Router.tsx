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
    label: 'Cube Shader',
    route: {
      path: ROUTES.CUBE,
      lazy: () => import('@/pages/CubeShader')
        .then(m => ({ Component: m.CubeShader }))
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
