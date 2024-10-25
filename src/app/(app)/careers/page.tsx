import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import React from 'react';
import HeaderImage from '@/public/assets/campany-culture.jpg'

const Careers = () => {
    return (
        <div>
            <div className='relative'>
                <div
                    className='w-full h-[24rem] bg-no-repeat bg-cover bg-center bg-fixed opacity-20'
                    style={{
                        backgroundImage: `url(${HeaderImage.src})`,
                    }}
                >
                </div>
                <div className='w-full lg:max-w-[50%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-3'>
                    <h1 className='text-3xl lg:text-6xl font-extrabold '>Find your <span className='text-secondary'>Oppurtunities</span> </h1>
                    <p className='text-textColorTwo text-lg text-center font-bold mx-auto'>
                        We’re passionate about helping our clients sell more, and believe having a happy team helps us to do that.
                        We work hard to make Sopro a great place to work, and reward everyone who joins us.
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
                                    <BreadcrumbPage className='text-secondary text-lg'>Carrers</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto'>
                <div className='lg:max-w-[70%] mx-auto text-center space-y-4 my-16 p-5'>
                    <h2 className='text-3xl font-extrabold'>You’ll help businesses grow. We’ll help you grow.</h2>
                    <p className='text-textColorTwo text-md'>
                        We’re passionate about helping our clients sell more, and believe having a happy team helps us to do that.
                        We work hard to make Sopro a great place to work, and reward everyone who joins us.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default Careers;