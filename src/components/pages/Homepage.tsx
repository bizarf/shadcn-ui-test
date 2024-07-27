import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <>
            <div className="flex h-screen justify-center items-center">
                <div className="text-center">
                    <h1 className="text-5xl">Home page goes here</h1>
                    <Link to={"/login"}>
                        <Button className="m-6 text-xl">Login</Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Homepage;
