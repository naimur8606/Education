import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import Assignments from "../Components/Assignments/Assignments";
import AddAssignment from "../Components/CURD/AddAssignment";
// import Login from "../Components/Create&Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:"",
          element:<Home></Home>
        },
        {
          path:"/assignments",
          element:<Assignments></Assignments>
        },
        {
          path:"/create-assignment",
          element:<AddAssignment></AddAssignment>
        }
      ]
    },
    // {
    //     path:"/login",
    //     element: <Login></Login>
    // }
  ]);

  export default router;