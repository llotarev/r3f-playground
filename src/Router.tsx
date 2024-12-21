import { createBrowserRouter, Outlet } from 'react-router';
import { ROUTES } from '@/constants/routes';
import { Layout } from '@/components/Layout';


const Router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: (
      <Layout>
        <Outlet/>
      </Layout>
    ),
    children: [
      {
        index: true,
        lazy: () => import('@/pages/HomePage')
          .then(m => ({ Component: m.default }))
      },
      {
        path: ROUTES.SHADER_HMR,
        lazy: () => import('@/pages/ShaderHMRPage')
          .then(m => ({ Component: m.default }))
      },
    ]
  }
]);

export { Router };
