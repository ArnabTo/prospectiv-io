'use client';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Openings } from "@/types/types";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import RichTextComponent from "@/components/rich-text-component/RichTextComponent";
import Link from "next/link";

interface Vacancy {
    title: string;
    slug: string;
    type: string;
    location: string;
    description: any;
    link: string;
    _createdAt: string;
    deadline: string;
}
const VacancyDetails = () => {
    const params = useParams();
    console.log(params)
    const [vacancy, setVacancy] = useState<Vacancy | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchVacancy = useCallback(async () => {
        setIsLoading(true);
        try {
            const getVacancy = await axios.get(`/api/vacancy/${params.slug}`);
            setVacancy(getVacancy.data)
        } catch (error) {
            console.log(error, 'error on fetch Vacancy')
        } finally {
            setIsLoading(false)
        }
    }, [params.slug])

    useEffect(() => {
        fetchVacancy()
    }, [fetchVacancy])


    console.log(vacancy)
    return (
        <div>
            <div className="max-w-screen-2xl mx-auto">
                {
                    isLoading ?
                        <div className="flex justify-center items-center h-screen">
                            <Loader2 size={60} className="w-10 h-10 mx-auto animate-spin" />
                        </div>
                        :
                        <div className="max-w-7xl ml-auto md:grid md:grid-cols-4 gap-5 px-5 lg:px-10">
                            <div className="col-span-4 lg:col-span-3 py-16 space-y-5">
                                <div className='flex justify-start items-start'>
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink className='text-textColorTwo text-lg' href="/">Home</BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                                <BreadcrumbPage className='text-textColorTwo text-lg'>Company</BreadcrumbPage>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                                <BreadcrumbLink className='text-textColorTwo text-lg' href="/careers">Careers</BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                                <BreadcrumbPage className='text-secondary text-lg'>{vacancy?.title}</BreadcrumbPage>
                                            </BreadcrumbItem>
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                </div>
                                <article>
                                    <section className="space-y-5">
                                        <h1 className="text-2xl md:text-5xl font-bold">{vacancy?.title}</h1>
                                        <div>
                                            <PortableText value={vacancy?.description} components={RichTextComponent} />
                                        </div>
                                    </section>
                                </article>

                                <div className="lg:hidden border border-borderColor rounded-2xl p-5 space-y-4 hover:shadow-2xl group cursor-pointer">
                                    <p><strong>Type: </strong>{vacancy?.location}</p>
                                    <p><strong>Location: </strong>{vacancy?.type}</p>
                                    <p><strong>Posted on: </strong>{new Date(vacancy?._createdAt ?? '').toDateString()}</p>
                                    <p><strong>Deadline: </strong>{new Date(vacancy?.deadline ?? '').toDateString()}</p>
                                    <div className="w-60 lg:w-full flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105">
                                        <Link href={vacancy?.link || '/'} className="flex-1 font-semibold text-lg text-center bg-buttonColor text-foreground hover:scale-95 transition-all duration-300 py-2 rounded-full hover:bg-buttonHoverColor">
                                            Apply
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    height: `calc(100vh - 150px)`
                                }}
                                className="hidden lg:block col-span-1 sticky top-16 lg:border-l border-borderColor px-3 py-16">
                                <div className="border border-borderColor rounded-2xl p-5 space-y-4 hover:shadow-2xl group cursor-pointer">
                                    <p><strong>Type: </strong>{vacancy?.location}</p>
                                    <p><strong>Location: </strong>{vacancy?.type}</p>
                                    <p><strong>Posted on: </strong>{new Date(vacancy?._createdAt ?? '').toDateString()}</p>
                                    <p><strong>Deadline: </strong>{new Date(vacancy?.deadline ?? '').toDateString()}</p>
                                    <div className="w-60 lg:w-full flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105">
                                        <Link href={vacancy?.link || '/'} className="flex-1 font-semibold text-lg text-center bg-buttonColor text-foreground hover:scale-95 transition-all duration-300 py-2 rounded-full hover:bg-buttonHoverColor">
                                            Apply
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default VacancyDetails;