import { lazy } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';

const Main = lazy(() => import('../page/Main'));

const Router = () => {
  useRoutes([
    {
      path: '/',
      element: (
        <Main />
      ),
    }
  ]);
};

export default Router;
