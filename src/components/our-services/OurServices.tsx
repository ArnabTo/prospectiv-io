import CarouselComp from "../omni-channel/CarouselComp";

const OurServices = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto pt-16">
                <h1 className="text-3xl md:text-5xl font-bold text-center">Our Services</h1>
                <p className="text-md md:text-xl text-textColorTwo text-center">High-impact marketing services to grow your startup</p>
                <CarouselComp/>
            </div>
        </div>
    );
};

export default OurServices;