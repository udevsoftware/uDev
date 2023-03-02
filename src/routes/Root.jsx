import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorScreen } from "../views/screens/ErrorScreen";
import { HomeScreen } from '../views/screens/HomeScreen';

export const Root = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
      errorElement: <ErrorScreen />
    },
  ]);

  return (
    <div className='content'>
      <RouterProvider router={router} />
    </div>
  );
};