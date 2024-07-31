import backgroundImage from "../../../assets/images/pexels-8moments-1323550.jpg";

import HomeHeader from "../HomeHeader";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <div className="relative h-screen overflow-hidden bg-indigo-900">
            <img
                src={backgroundImage}
                className="absolute object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
            <div className="z-20 relative">
                <HomeHeader />
                <Outlet />
            </div>
        </div>
    );
};

export default HomeLayout;
