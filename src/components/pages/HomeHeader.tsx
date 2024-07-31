import { Link } from "react-router-dom";
import { Menu, House } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeHeader = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-20">
            <nav className="container px-6 py-4 mx-auto md:px-12">
                <div className="items-center justify-between md:flex">
                    <div className="flex items-center justify-between">
                        <Link to={"/"} className="text-white">
                            <House />
                        </Link>
                        <div className="md:hidden">
                            <button className="text-white focus:outline-none">
                                <Menu />
                            </button>
                        </div>
                    </div>
                    <div className="items-center hidden md:flex">
                        <Link
                            to={"#"}
                            className="mx-3 text-lg text-white uppercase hover:text-gray-300 font-bold"
                        >
                            About us
                        </Link>
                        <Link
                            to={"#"}
                            className="mx-3 text-lg text-white uppercase hover:text-gray-300 font-bold"
                        >
                            Calendar
                        </Link>
                        <Link
                            to={"#"}
                            className="mx-3 text-lg text-white uppercase hover:text-gray-300 font-bold"
                        >
                            Contact us
                        </Link>
                    </div>
                    <div className="hidden md:flex">
                        <Link to={"/login"}>
                            <Button className="mr-4">Login</Button>
                        </Link>
                        <Link to={"/sign-up"}>
                            <Button>Sign Up</Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HomeHeader;
