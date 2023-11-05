import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Components/Create&Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {

        }
      ]
    },
    {
        path:"/login",
        element: <Login></Login>
    }
  ]);

  export default router;