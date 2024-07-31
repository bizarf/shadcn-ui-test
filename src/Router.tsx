import { createHashRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import HomeLayout from "./components/pages/layouts/HomeLayout";
import DashLayout from "./components/pages/layouts/DashLayout";
import Dashboard from "./components/pages/Dashboard";
import SignUp from "./components/pages/SignUp";
import TestLayout from "./components/pages/layouts/TestLayout";

const Router = () => {
    const router = createHashRouter([
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {
                    index: true,
                    element: <Homepage />,
                },
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/sign-up",
                    element: <SignUp />,
                },
            ],
        },
        {
            path: "/dash",
            element: <DashLayout />,
            children: [
                {
                    index: true,
                    element: <Dashboard />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
