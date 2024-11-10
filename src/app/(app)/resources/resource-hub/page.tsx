"use client";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Guide, Webinar, Whitepaper } from "@/types/types";
import axios from "axios";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { motion } from 'framer-motion';
import Link from "next/link";
import { ArrowRight, ArrowUpRightIcon, BookOpen, BookOpenIcon, Loader2, ScrollText, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";

const ResourceHub = () => {

   const [webinars, setWebinars] = useState<Webinar[]>([]);
   const [guides, setGuides] = useState<Guide[]>([]);
   const [whitePapers, setWhitePapers] = useState<Whitepaper[]>([]);
   const [allContents, setAllContents] = useState<any[]>([]);
   const [currentTab, setCurrentTab] = useState("All");
   const [currentPage, setCurrentPage] = useState(1);
   const [isLoading, setIsLoading] = useState(false);
   const ITEMS_PER_PAGE = 6;
   // Fetching content
   const fetchWebinars = useCallback(async () => {
      setIsLoading(true);
      try {
         const response = await axios.get('/api/getwebinar');
         setWebinars(response.data);
      } catch (error) {
         console.log(error);
      } finally {
         setIsLoading(false);
      }
   }, []);

   const fetchWhitePapers = useCallback(async () => {
      setIsLoading(true);
      try {
         const response = await axios.get('/api/getwhitepaper');
         setWhitePapers(response.data);
      } catch (error) {
         console.log(error);
      } finally {
         setIsLoading(false);
      }
   }, []);

   const fetchGuides = useCallback(async () => {
      setIsLoading(true);
      try {
         const response = await axios.get('/api/getguides');
         setGuides(response.data);
      } catch (error) {
         console.log(error);
      } finally {
         setIsLoading(false);
      }
   }, []);

   // Combine all content without duplicates
   useEffect(() => {
      fetchGuides();
      fetchWhitePapers();
      fetchWebinars();
   }, [fetchGuides, fetchWhitePapers, fetchWebinars]);

   useEffect(() => {
      const combinedContent = [...webinars, ...guides, ...whitePapers];
      console.log(combinedContent, 'combinedContent')
      const uniqueContent = Array.from(new Set(combinedContent.map(item => item.slug)))
         .map(slug => combinedContent.find(item => item.slug === slug));
      setAllContents(combinedContent);
   }, [webinars, guides, whitePapers]);

   // Filter content based on the selected tab
   const filteredContent = currentTab === "All"
      ? allContents
      : currentTab === "webinars"
         ? webinars
         : currentTab === "guides"
            ? guides
            : whitePapers;

   // Paginate content
   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
   const paginatedContent = filteredContent.slice(startIndex, startIndex + ITEMS_PER_PAGE);
   const totalPages = Math.ceil(filteredContent.length / ITEMS_PER_PAGE);

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   const renderContent = (content: any) => {

      // Determine the link based on content type
      const contentTypePath = content.content_type === 'webinar'
         ? `/resources/resource-hub/webinar/${content.slug}`
         : content.content_type === 'guide'
            ? `/resources/resource-hub/guide/${content.slug}`
            : `/resources/resource-hub/whitepaper/${content.slug}`;

      return (
         <Link href={contentTypePath} key={content.id}>
            <div className="p-4 rounded-lg shadow-md cursor-pointer h-full">
               <Card className="border border-borderColor h-full max-w-96 rounded-2xl group flex flex-col">
                  <CardHeader className="space-y-3 flex-shrink-0 min-h-[200px]">
                     <div className="overflow-hidden rounded-lg">
                        <Image
                           src={content.thumbnail.asset?.url}
                           width={500}
                           height={500}
                           alt="blog_thumbnail"
                           className="h-60 rounded-lg group-hover:scale-110 transition-all duration-300 border border-borderColor"
                        />
                     </div>
                     <div className="flex justify-start gap-3">
                        <Badge className="bg-buttonColor text-foreground hover:bg-secondary w-fit text-center">
                           {content?.content_type}
                        </Badge>
                     </div>
                  </CardHeader>

                  <CardContent className="flex-grow">
                     <h2 className="text-xl font-bold line-clamp-2">{content?.title}</h2>
                     <p className="text-lg text-textColorTwo line-clamp-2">
                        <PortableText value={content.body} />
                     </p>
                  </CardContent>

                  <CardFooter className="flex justify-end items-end">
                     <ArrowRight size={30} />
                  </CardFooter>
               </Card>
            </div>
         </Link>
      );
   };
   console.log(webinars)
   return (
      <div className="overflow-hidden">
         <div className="space-y-24">
            <div className="max-w-screen-2xl mx-auto">
               <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-16">Resource Hub</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 px-4 relative">
                  {/* Webinars Section */}
                  <div className="row-span-1 md:row-span-4 h-full bg-card border border-borderColor p-7 rounded-2xl space-y-4 group">
                     {
                        isLoading ?
                           <div className="flex justify-center items-center h-full"><Loader2 size={40} className="animate-spin" /></div>
                           :
                           <Link href={`/resources/resource-hub/webinar/${webinars[0].slug}`}>
                              <div className="overflow-hidden relative rounded-xl">
                                 <Image
                                    src={webinars[0]?.thumbnail?.asset?.url}
                                    width={1000}
                                    height={1000}
                                    alt="thumbnail"
                                    className="w-full h-auto rounded-xl group-hover:scale-105 transition-all duration-300 ease-linear"
                                 />
                                 <Badge className="bg-smallCard text-foreground text-base absolute top-4 right-4 group-hover:bg-secondary">Webinar</Badge>
                              </div>
                              <div className="mt-4 space-y-3">
                                 <h1 className="text-2xl font-bold group-hover:text-secondary">{webinars[0]?.title}</h1>
                                 <p className="line-clamp-2 text-lg text-textColorTwo">
                                    <PortableText value={webinars[0]?.body} />
                                 </p>
                              </div>
                           </Link>

                     }
                  </div>

                  {/* Guides Section */}
                  <div className="row-span-1 md:row-span-2 h-full bg-card border border-borderColor p-2 rounded-2xl group">
                     {
                        isLoading ?
                           <div className="flex justify-center items-center h-full"><Loader2 size={40} className="animate-spin" /></div>
                           :
                           <Link href={`/resources/resource-hub/guide/${guides[0].slug}`}>
                              <div className="flex flex-col md:flex-row items-center h-full gap-4">
                                 <div className="w-full min-w-[35%] max-w-[40%] h-full rounded-xl flex justify-center items-center overflow-hidden relative">
                                    <Image
                                       src={guides[0]?.thumbnail?.asset?.url}
                                       width={500}
                                       height={500}
                                       alt="thumbnail"
                                       className="w-full min-h-[85%] bg-white object-cover rounded-xl p-2 group-hover:scale-105 transition-all duration-300 ease-linear"
                                    />
                                    <Badge className="bg-smallCard text-foreground text-base absolute top-8 right-4 group-hover:bg-secondary">Guide</Badge>
                                 </div>
                                 <div className="space-y-4">
                                    <h1 className="text-lg lg:text-2xl font-bold group-hover:text-secondary transition-all duration-300 ease-linear">{guides[0]?.title}</h1>
                                    <p className="line-clamp-3 text-lg text-textColorTwo">
                                       <PortableText value={guides[0]?.body} />
                                    </p>
                                    <p className="text-right flex items-center gap-2 group-hover:text-secondary group-hover:underline">Download PDF
                                       <ArrowUpRightIcon size={20} />
                                    </p>
                                 </div>
                              </div>
                           </Link>
                     }
                  </div>

                  {/* White Papers Section */}
                  <div className="row-span-1 md:row-span-2 col-start-1 md:col-start-2 h-full bg-card border border-borderColor p-5 rounded-2xl group">
                     {
                        isLoading ?
                           <div className="flex justify-center items-center h-full"><Loader2 size={40} className="animate-spin" /></div>
                           :
                           <Link href={`/resources/resource-hub/whitepaper/${whitePapers[0]?.slug}`}>
                              <div className="flex flex-col md:flex-row items-center h-full gap-4">
                                 <div className="w-full min-w-[35%] max-w-[40%] h-full flex justify-center items-center overflow-hidden relative">
                                    <Image
                                       src={whitePapers[0]?.thumbnail?.asset?.url}
                                       width={500}
                                       height={500}
                                       alt="thumbnail"
                                       className="w-full min-h-[85%] object-cover rounded-xl group-hover:scale-105 transition-all duration-300 ease-linear"
                                    />
                                    <Badge className="bg-smallCard text-foreground text-base absolute top-8 right-4 group-hover:bg-secondary">Whitepaper</Badge>
                                 </div>
                                 <div className="space-y-4">
                                    <h1 className="text-lg lg:text-2xl font-bold group-hover:text-secondary transition-all duration-300 ease-linear">{whitePapers[0]?.title}</h1>
                                    <p className="line-clamp-3 text-lg text-textColorTwo">
                                       <PortableText value={whitePapers[0]?.body} />
                                    </p>
                                    <p className="text-right flex items-center gap-2 group-hover:text-secondary group-hover:underline">Download PDF
                                       <ArrowUpRightIcon size={20} />
                                    </p>
                                 </div>
                              </div>
                           </Link>
                     }
                  </div>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.3 }}
                     viewport={{ once: true }}
                     className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:bottom-12 lg:left-1/4 -z-10 transition-all">
                     <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                     <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                     <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                  </motion.div>
               </div>
            </div>

            <div className="max-w-7xl mx-auto">
               <Tabs defaultValue="All" onValueChange={setCurrentTab} className="w-full mx-auto space-y-10">
                  <TabsList className="mx-auto lg:max-w-[70%] bg-card flex justify-between items-center p-5 rounded-full">
                     <TabsTrigger value="All">All</TabsTrigger>
                     <TabsTrigger value="webinars" className="flex flex-col lg:flex-row"><Video className="mr-2" size={25} /> Webinars</TabsTrigger>
                     <TabsTrigger value="guides" className="flex flex-col lg:flex-row"><ScrollText className="mr-2" size={25} /> Guides</TabsTrigger>
                     <TabsTrigger value="whitepapers" className="flex flex-col lg:flex-row"><BookOpenIcon className="mr-2" size={25} />  White Papers</TabsTrigger>
                  </TabsList>

                  <TabsContent value="All">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {paginatedContent.map(renderContent)}
                     </div>
                  </TabsContent>
                  <TabsContent value="webinars">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {paginatedContent.map(renderContent)}
                     </div>
                  </TabsContent>
                  <TabsContent value="guides">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {paginatedContent.map(renderContent)}
                     </div>
                  </TabsContent>
                  <TabsContent value="whitepapers">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {paginatedContent.map(renderContent)}
                     </div>
                  </TabsContent>
               </Tabs>

               {/* Pagination */}
               <Pagination>
                  <PaginationContent>
                     <PaginationItem>
                        <PaginationPrevious onClick={() => handlePageChange(Math.max(1, currentPage - 1))} />
                     </PaginationItem>
                     {[...Array(totalPages)].map((_, index) => (
                        <PaginationItem key={index}>
                           <PaginationLink
                              onClick={() => handlePageChange(index + 1)}
                              isActive={index + 1 === currentPage}
                           >
                              {index + 1}
                           </PaginationLink>
                        </PaginationItem>
                     ))}
                     <PaginationItem>
                        <PaginationNext onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} />
                     </PaginationItem>
                  </PaginationContent>
               </Pagination>
            </div>
         </div>
      </div>
   );
};

export default ResourceHub;


