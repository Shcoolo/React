import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home, Login } from "../pages";

const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        element: <Home />
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  }
]);

export default router;