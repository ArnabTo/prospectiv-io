'use client'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SuccessStoryType } from "@/types/types";

interface PaginatedSuccessStoriesProps {
    successStories: SuccessStoryType[];
}

const PaginatedSuccessStories = ({ successStories }: PaginatedSuccessStoriesProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    
    // Calculate total pages
    const totalPages = Math.ceil(successStories.length / itemsPerPage);
    
    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = successStories.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Generate page numbers
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;
        
        if (totalPages <= maxVisiblePages) {
            // Show all pages if total pages is less than max visible
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // Always show first page
            pageNumbers.push(1);
            
            if (currentPage > 3) {
                pageNumbers.push('ellipsis');
            }
            
            // Show current page and surrounding pages
            for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
                pageNumbers.push(i);
            }
            
            if (currentPage < totalPages - 2) {
                pageNumbers.push('ellipsis');
            }
            
            // Always show last page
            pageNumbers.push(totalPages);
        }
        
        return pageNumbers;
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">All success stories</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {currentItems.map((story, index) => (
                    <Link href={`/result/success-story/${story.slug}`} key={index}>
                        <Card className="border-none relative group">
                            <CardHeader>
                                <div className="h-40 bg-foreground rounded-xl">
                                    <Image 
                                        className="w-full h-full rounded-xl object-contain"
                                        src={story?.company_logo?.asset?.url}
                                        width={200} 
                                        height={200} 
                                        alt={story.title || 'Company logo'} 
                                    />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-textColorTwo">
                                    {story.title}
                                </p>
                            </CardContent>

                            <CardFooter className="p-5 border border-borderColor rounded-xl flex justify-center items-center">
                                <div className="flex justify-between items-center gap-5">
                                    <span className="text-center">
                                        <p className="text-2xl text-center font-bold text-secondary">${story?.cost_per_lead}</p>
                                        <p className="text-xs text-textColorTwo uppercase">cost per lead</p>
                                    </span>
                                    <span className="text-center">
                                        <p className="text-2xl text-center font-bold text-secondary">{story?.response_rate}%</p>
                                        <p className="text-xs text-textColorTwo uppercase">Response rate</p>
                                    </span>
                                    <span className="flex flex-col justify-center items-center">
                                        <p className="text-2xl text-center font-bold text-secondary">{story?.lead_rate}%</p>
                                        <p className="text-xs text-textColorTwo uppercase">Lead rate</p>
                                    </span>
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>

            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious 
                            href="#" 
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                        />
                    </PaginationItem>
                    
                    {getPageNumbers().map((pageNumber, index) => (
                        <PaginationItem key={index}>
                            {pageNumber === 'ellipsis' ? (
                                <PaginationEllipsis />
                            ) : (
                                <PaginationLink
                                    href="#"
                                    onClick={() => handlePageChange(pageNumber as number)}
                                    isActive={currentPage === pageNumber}
                                >
                                    {pageNumber}
                                </PaginationLink>
                            )}
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext 
                            href="#" 
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default PaginatedSuccessStories;