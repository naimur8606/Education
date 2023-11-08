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
import ErrorPage from "../Components/Error/ErrorPage";
import TakenAssignments from "../Components/TakenAssignments/TakenAssignments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
        loader: ()=> fetch(`https://friends-communication-server.vercel.app/assignments?page=${0}&size=${9}`)
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
        loader: () => fetch("https://friends-communication-server.vercel.app/assignmentsCount")
      },
      {
        path: "/assignments/:id",
        element: <PrivateRoute><Assignment></Assignment></PrivateRoute>,
        loader: ({ params }) => fetch(`https://friends-communication-server.vercel.app/assignments/${params?.id}`)
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
        path: "/manage-assignment",
        element: <PrivateRoute><ManageAssignment></ManageAssignment></PrivateRoute>,
      },
      {
        path: "/takenAssignment",
        element: <PrivateRoute><TakenAssignments></TakenAssignments></PrivateRoute>,
      },
      {
        path: "/my-assignment/:email",
        element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>,
        loader: ({ params }) => fetch(`https://friends-communication-server.vercel.app/assignments/my-assignmentsCount?email=${params?.email}`)
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