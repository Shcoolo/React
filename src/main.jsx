import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './router/routes';
import './index.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);