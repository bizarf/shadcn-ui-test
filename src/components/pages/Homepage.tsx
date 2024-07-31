import { Button } from "@/components/ui/button";

const Homepage = () => {
    return (
        <>
            <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
                    <h1 className="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
                        Let yourself be carried
                        <br />
                        by nature
                    </h1>
                    <Button variant={"secondary"} className="mt-6 text-xl">
                        Discover
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Homepage;
