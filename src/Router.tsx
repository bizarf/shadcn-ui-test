import { createHashRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import MainLayout from "./components/pages/MainLayout";

const Router = () => {
    const router = createHashRouter([
        {
            path: "/",
            element: <Homepage />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/dash",
            element: <MainLayout />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
