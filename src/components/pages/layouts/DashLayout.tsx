import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import DashHeader from "../DashHeader";

const MainLayout = () => {
    return (
        <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] min-h-screen">
            <DashHeader />
            <NavBar />
            <Outlet />
        </div>
    );
};

export default MainLayout;
