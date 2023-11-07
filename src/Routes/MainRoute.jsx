import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import Assignments from "../Components/Assignments/Assignments";
import AddAssignment from "../Components/CURD/AddAssignment";
import Login from "../Components/Create&Login/Login";
import CreateUser from "../Components/Create&Login/CreateUser";
import PrivateRoute from "./PrivateRoute";
import Assignment from "../Components/Assignments/Assignment";
import MyAssignments from "../Components/MyAssignments/MyAssignments";
import ManageAssignment from "../Components/ManageAssignments/ManageAssignment";
import UpdateAssignment from "../Components/CURD/UpdateAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
        loader: () => fetch("http://localhost:5000/assignments")
      },
      {
        path: "/assignments/:id",
        element: <Assignment></Assignment>,
        loader: ({ params }) => fetch(`http://localhost:5000/assignments/${params?.id}`)
      },
      {
        path: "/create-assignment",
        element: <PrivateRoute><AddAssignment></AddAssignment></PrivateRoute>
      },
      {
        path: "/update-assignment/:id",
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>
      },
      {
        path: "/manage-assignment/:email",
        element: <PrivateRoute><ManageAssignment></ManageAssignment></PrivateRoute>,
        loader: () => fetch(`http://localhost:5000/takeAssignments`)
      },
      {
        path: "/my-assignment",
        element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>,
        // loader: ({ params }) => fetch(`http://localhost:5000/assignments/my-assignments/${params?.email}`)
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/registration",
    element: <CreateUser></CreateUser>
  }
]);

export default router;