import { createBrowserRouter } from 'react-router';
import { ROUTES } from '@/constants/routes';

const Router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    children: [
      {
        index: true,
        lazy: () => import('@/pages/HomePage')
          .then(m => ({ Component: m.default }))
      }
    ]
  }
]);

export { Router };
