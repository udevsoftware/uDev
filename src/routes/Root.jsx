import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomeScreen } from '../views/screens/HomeScreen';

export const Root = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
  ]);

  return (
    <div className='content'>
      <RouterProvider router={router} />
    </div>
  );
};