import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import HeaderImage from '@/public/assets/campany-culture.jpg'
const AboutUs = () => {
    return (
        <div className='overflow-hidden'>
            <div className='relative'>
                <div
                    className='w-full h-[24rem] bg-no-repeat bg-cover bg-center bg-fixed opacity-20'
                    style={{
                        backgroundImage: `url(${HeaderImage.src})`,
                    }}
                >
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-3'>
                    <h1 className='text-6xl font-extrabold '>About <span className='text-secondary'>Us</span> </h1>
                    <p className='text-textColorTwo text-lg text-center font-bold mx-auto'>
                        Sopro is more than a tool: we are smart humans with unrivalled expertise and powerful technology. Our teams have doubled in size every year, thanks to the expertise, dedication and passion of our people.
                    </p>
                    <div className='flex justify-center items-center'>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className='text-textColorTwo text-lg' href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-lg'>Company</BreadcrumbPage>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-secondary text-lg'>About us</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto">
                
            </div>
        </div>
    );
};

export default AboutUs;