import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors/Instructors";

import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

import Dashboard from "../Layout/Dashboard";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

import AddClasses from "../pages/Dashboard/AddClasses/AddClasses";

import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses/MySelectedClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";

import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import InstructorHome from "../pages/Dashboard/InstructorHome/InstructorHome";
import Classes from "../pages/Classes/Classes/Classes";
import Errorpage from "../pages/Errorpage/Errorpage";
import Enrolledclasses from "../pages/Dashboard/Enrolledclasses/Enrolledclasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // admin routes
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "manageclasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },

      {
        path: "instructorhome",
        element: <InstructorHome></InstructorHome>,
      },

      {
        path: "addClasses",
        element: <AddClasses></AddClasses>,
      },

      {
        path: "myclasses",
        element: <MyClasses></MyClasses>,
      },

      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },

      {
        path: "myselectedclasses",
        element: <MySelectedClasses></MySelectedClasses>,
      },

      {
        path: "enrolledclasses",
        element: <Enrolledclasses></Enrolledclasses>,
      },
    ],
  },
]);
