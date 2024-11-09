'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award } from '@/types/types';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import HeaderImage from '@/public/assets/campany-culture.jpg'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Loader2 } from 'lucide-react';
import CompanyLogoOne from '@/public/assets/company_logo/logoOne.svg'
import CompanyLogoTwo from '@/public/assets/company_logo/logoTwo.svg'
import CompanyLogoThree from '@/public/assets/company_logo/logoThree.svg'
import Rating from '@/components/rating/RatingComponent';
import { motion } from 'framer-motion';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { awardsandRecognitionPageTextContent } from '@/lib/TextContent';

const ITEMS_PER_PAGE = 6;

const AwardsAndRecognitions = () => {
    const [awards, setAwards] = useState<Award[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [awardCategory, setAwardCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);

    const fetchAwards = useCallback(async () => {
        setIsLoading(true);
        try {
            const getAwards = await axios.get('/api/getawards');
            setAwards(getAwards.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAwards();
    }, [fetchAwards]);

    const handleChange = (category: string) => {
        setAwardCategory(category);
    };

    const filteredAwards = (category: string) => {
        console.log(category)
        return category === 'all'
            ? awards
            : awards.filter((award) => award.category === category);
    };

    const getPaginatedAwards = (category: string) => {
        const filtered = filteredAwards(category);
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return filtered.slice(startIndex, endIndex);
    };

    const getTotalPages = (category: string) => {
        const filtered = filteredAwards(category);
        return Math.ceil(filtered.length / ITEMS_PER_PAGE);
    };


    console.log(awards)
    const renderPagination = (category: string) => {
        const totalPages = getTotalPages(category);
        if (totalPages <= 1) return null;

        return (
            <Pagination className="mt-8">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious 
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                        />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        const isCurrentPage = pageNumber === currentPage;
                        
                        return (
                            <PaginationItem key={pageNumber}>
                                <PaginationLink
                                    onClick={() => setCurrentPage(pageNumber)}
                                    isActive={isCurrentPage}
                                    className="cursor-pointer"
                                >
                                    {pageNumber}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    })}

                    <PaginationItem>
                        <PaginationNext 
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        );
    };

    const renderAwardGrid = (category: string) => {
        const paginatedAwards = getPaginatedAwards(category);
        
        if (paginatedAwards.length === 0) {
            return <p className='text-center text-lg text-textColorTwo'>No awards found.</p>;
        }

        return (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {paginatedAwards.map((award, index) => (
                        <div key={index} className="award-item group">
                            <Link href={award.award_url}>
                                <Card className="border border-borderColor rounded-xl h-full flex flex-col">
                                    <CardHeader className="h-40">
                                        <div className="w-full h-full flex justify-center items-center relative">
                                            <Image
                                                className="w-full h-full object-scale-down"
                                                src={award.thumbnail.asset.url}
                                                width={300}
                                                height={300}
                                                alt="award_thumbnail"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute top-0 left-0 px-3 py-1 rounded-full bg-smallCard group-hover:bg-secondary">
                                                {award.category}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow flex flex-col justify-between">
                                        <p className="text-sm text-gradientColorOne">{award.year}</p>
                                        <h3 className="text-xl font-bold">{award.title}</h3>
                                        <p className="text-lg text-textColorTwo">{award.award_name}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                {renderPagination(category)}
            </>
        );
    };
    console.log(awards)
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
                    <h1 className='text-3xl lg:text-6xl font-extrabold '>An award  <span className='text-secondary'>winning service</span> </h1>
                    <p className='text-textColorTwo text-md lg:text-lg text-center font-bold mx- px-5'>
                        Since our launch, we’ve won multiple awards for the service we provide. All of which spur us on to invest even more in our people and technology. Take a look at our virtual award cabinet below, followed by a summary of our client reviews.
                    </p>
                    <div className='flex justify-center items-center'>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className='text-textColorTwo text-lg' href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-lg'>Result</BreadcrumbPage>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-secondary text-lg'>Awards & Recognitions</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <div className='max-w-6xl mx-auto min-h-screen py-28 space-y-20'>
                <Tabs defaultValue={awardCategory} onValueChange={handleChange} className="w-full mx-auto space-y-8">
                    <h1 className='text-3xl lg:text-4xl font-extrabold text-center'>Our Awards</h1>
                    <TabsList className="w-full mx-auto flex justify-between items-center rounded-full overflow-x-auto lg:overflow-hidden">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
                        <TabsTrigger value="winner">Winner</TabsTrigger>
                        <TabsTrigger value="silver">Silver</TabsTrigger>
                        <TabsTrigger value="gold">Gold</TabsTrigger>
                        <TabsTrigger value="bronze">Bronze</TabsTrigger>
                    </TabsList>

                     {isLoading ? (
                        <div><Loader2 className='animate-spin mx-auto' /></div>
                    ) : (
                        <>
                            <TabsContent value="all">
                                {renderAwardGrid('all')}
                            </TabsContent>
                            <TabsContent value="shortlisted">
                                {renderAwardGrid('Shortlisted')}
                            </TabsContent>
                            <TabsContent value="winner">
                                {renderAwardGrid('Winner')}
                            </TabsContent>
                            <TabsContent value="silver">
                                {renderAwardGrid('Silver')}
                            </TabsContent>
                            <TabsContent value="gold">
                                {renderAwardGrid('Gold')}
                            </TabsContent>
                            <TabsContent value="bronze">
                                {renderAwardGrid('Bronze')}
                            </TabsContent>
                        </>
                    )}
                </Tabs>

                {/* companies trus on us */}
                <div className="space-y-5">
                    <h1 className="text-3xl md:text-3xl font-bold text-center">Clients trust on us</h1>
                    <div className="bg-card grid gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 border border-borderColor rounded-xl p-5 lg:p-10">
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <Image src={CompanyLogoOne} alt="logo" width={200} height={70} />
                            <div className='flex items-center gap-2'>
                                <Rating rating={4.5} />
                                <p className='text-textColorTwo text-lg'>4.0</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <Image src={CompanyLogoTwo} alt="logo" width={200} height={70} />
                            <div className='flex items-center gap-2'>
                                <Rating rating={4.5} />
                                <p className='text-textColorTwo text-lg'>4.0</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <Image src={CompanyLogoThree} alt="logo" width={200} height={70} />
                            <div className='flex items-center gap-2'>
                                <Rating rating={4.5} />
                                <p className='text-textColorTwo text-lg'>4.0</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <Image src={CompanyLogoThree} alt="logo" width={200} height={70} />
                            <div className='flex items-center gap-2'>
                                <Rating rating={4.5} />
                                <p className='text-textColorTwo text-lg'>4.0</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='space-y-10 px-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h1 className='text-3xl font-bold text-start'>Explore Our Success Stories</h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                        <Link href='/result/success-story' className='border border-borderColor rounded-2xl p-5'>
                            <div className='flex flex-col gap-5'>
                                <div>
                                    <Image
                                        src={awardsandRecognitionPageTextContent.success_section.imageLInk}
                                        alt="image"
                                        width={500}
                                        height={500}
                                        className="w-full h-full max-h-44 object-cover rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-bold text-secondary'>{awardsandRecognitionPageTextContent.success_section.heading}</h3>
                                    <p className='text-md lg:text-lg text-textColorTwo flex items-end'>
                                        {awardsandRecognitionPageTextContent.success_section.textContent} →
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AwardsAndRecognitions;
