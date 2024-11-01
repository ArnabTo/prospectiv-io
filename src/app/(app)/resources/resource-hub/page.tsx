'use client';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Guide, Webinar, Whitepaper } from "@/types/types";
import axios from "axios";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { motion } from 'framer-motion';
import Link from "next/link";
import { ArrowRight, ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const ResourceHub = () => {

   const [webinars, setWebinars] = useState<Webinar[]>([]);
   const [guides, setGuides] = useState<Guide[]>([]);
   const [whitePapers, setWhitePapers] = useState<Whitepaper[]>([]);
   const [allContents, setAllContents] = useState<any[]>([]);
   const [currentTab, setCurrentTab] = useState("All");
   const [currentPage, setCurrentPage] = useState(1);

   // Fetching content
   const fetchWebinars = useCallback(async () => {
      try {
         const response = await axios.get('/api/getwebinars');
         setWebinars(response.data);
         setAllContents(prev => [...prev, ...response.data]);
      } catch (error) {
         console.log(error);
      }
   }, []);

   const fetchWhitePapers = useCallback(async () => {
      try {
         const response = await axios.get('/api/getwhitepaper');
         setWhitePapers(response.data);
         setAllContents(prev => [...prev, ...response.data]);
      } catch (error) {
         console.log(error);
      }
   }, []);

   const fetchGuides = useCallback(async () => {
      try {
         const response = await axios.get('/api/getguides');
         setGuides(response.data);
         setAllContents(prev => [...prev, ...response.data]);
      } catch (error) {
         console.log(error);
      }
   }, []);

   useEffect(() => {
      fetchGuides();
      fetchWhitePapers();
      fetchWebinars();
   }, [fetchGuides, fetchWhitePapers, fetchWebinars]);

   // Filter content based on the selected tab
   const filteredContent = currentTab === "All"
      ? allContents
      : currentTab === "webinars"
         ? webinars
         : currentTab === "guides"
            ? guides
            : whitePapers;

   // Paginate content
   const startIndex = (currentPage - 1) * 9;
   const paginatedContent = filteredContent.slice(startIndex, startIndex + 9);
   const totalPages = Math.ceil(filteredContent.length / 9);

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };


   const renderContent = (content: any) => {
      console.log(content)
      return (
         <div key={content.id} className="p-4 rounded-lg shadow-md">
            <Link href=''>
               <Card className="border border-borderColor h-full max-w-96 rounded-2xl group">
                  <CardHeader className="space-y-3">
                     <div className="overflow-hidden">
                        <Image
                        src={content.thumbnail.assets?.url}
                        width={500}
                        height={500}
                        alt='blog_thumbnail'
                        className="rounded-lg group-hover:scale-110 transition-all duration-300 border border-borderColor"
                     />
                     </div>
                     <div className="flex justify-start gap-3">
                        {
                           content.categories == null ? <>"Unknown"</>
                              :
                              <Badge className="bg-buttonColor text-foreground hover:bg-secondary w-fit text-center">
                                 {content.categories.map((category:any, index:number) => (<span key={index}>{category.title}</span>))}
                              </Badge>
                        }
                        <p>{new Date(content?._createdAt).toDateString()}</p>
                     </div>
                  </CardHeader>
                  <CardContent>
                     <h2 className="text-xl font-bold line-clamp-2">{content.title}</h2>
                     <p className="text-lg text-textColorTwo line-clamp-2"><PortableText value={content.body} /></p>
                  </CardContent>
                  <CardFooter>
                     <div className="w-full flex justify-end items-end">
                        <ArrowRight size={30} />
                     </div>
                  </CardFooter>
               </Card>
            </Link>
         </div>
      )
   }
   // console.log(allContents)
   return (
      <div className="overflow-hidden">
         <div className="space-y-24">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center">Resource Hub</h1>

            <div className="max-w-screen-2xl mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 px-4 relative">
                  {/* Webinars Section */}
                  <div className="row-span-1 md:row-span-4 h-full bg-card border border-borderColor p-4 rounded-2xl space-y-4 group">
                     <Link href=''>
                        <div className="overflow-hidden relative">
                           <Image
                              src={webinars[0]?.thumbnail?.asset?.url}
                              width={500}
                              height={500}
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
                  </div>

                  {/* Guides Section */}
                  <div className="row-span-1 md:row-span-2 h-full bg-card border border-borderColor p-2 rounded-2xl group">
                     <Link href=''>
                        <div className="flex flex-col md:flex-row items-center h-full gap-4">
                           <div className="w-full min-w-[40%] h-full flex justify-center items-center overflow-hidden relative">
                              <Image
                                 src={guides[0]?.thumbnail?.asset?.url}
                                 width={500}
                                 height={500}
                                 alt="thumbnail"
                                 className="w-full  min-h-[85%] bg-white rounded-xl p-2 group-hover:scale-105 transition-all duration-300 ease-linear"
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
                  </div>

                  {/* White Papers Section */}
                  <div className="row-span-1 md:row-span-2 col-start-1 md:col-start-2 h-full bg-card border border-borderColor p-2 rounded-2xl group">
                     <Link href=''>
                        <div className="flex flex-col md:flex-row items-center h-full gap-4">
                           <div className="w-full min-w-[40%] h-full flex justify-center items-center overflow-hidden relative">
                              <Image
                                 src={whitePapers[0]?.thumbnail?.asset?.url}
                                 width={500}
                                 height={500}
                                 alt="thumbnail"
                                 className="w-full min-h-[85%] rounded-xl group-hover:scale-105 transition-all duration-300 ease-linear p-2"
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
               <Tabs defaultValue="All" onValueChange={setCurrentTab} className="w-full mx-auto">
                  <TabsList className="mx-auto w-fit bg-card flex justify-center p-5 rounded-full">
                     <TabsTrigger value="All">All</TabsTrigger>
                     <TabsTrigger value="webinars">Webinars</TabsTrigger>
                     <TabsTrigger value="guides">Guides</TabsTrigger>
                     <TabsTrigger value="whitepapers">White Papers</TabsTrigger>
                  </TabsList>

                  <TabsContent value="All">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {paginatedContent.map(renderContent)}
                     </div>
                  </TabsContent>
                  <TabsContent value="webinars">
                     {paginatedContent.map(renderContent)}
                  </TabsContent>
                  <TabsContent value="guides">
                     {paginatedContent.map(renderContent)}
                  </TabsContent>
                  <TabsContent value="whitepapers">
                     {paginatedContent.map(renderContent)}
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


