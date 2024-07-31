import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const Dashboard = () => {
    const features = [
        {
            id: 1,
            title: "Feature 1",
            description: "Lorem ipsum dolor sit.",
        },
        {
            id: 2,
            title: "Feature 2",
            description: "Lorem ipsum, dolor sit amet consectetur",
        },
    ];

    return (
        <div className="ml-16 row-start-2 col-start-2 overflow-auto mt-20">
            <div>
                <h2 className="ml-10 mb-4 font-bold text-xl">
                    You might like to try...
                </h2>
                <div className="container">
                    <Carousel>
                        <CarouselContent>
                            {features.map((feature) => {
                                return (
                                    <CarouselItem
                                        className="basis-40"
                                        key={feature.id}
                                    >
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-3xl font-semibold">
                                                    {feature.id}
                                                </span>
                                            </CardContent>
                                            <CardFooter className="flex flex-col">
                                                <CardTitle>
                                                    {feature.title}
                                                </CardTitle>
                                                <CardDescription>
                                                    {feature.description}
                                                </CardDescription>
                                            </CardFooter>
                                        </Card>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
