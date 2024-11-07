// @ts-nocheck

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { legalPageContent } from "@/lib/TextContent";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const GdprFaq = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);


    return (
        <div className='grid grid-cols-4 gap-6 py-10 pb-24'>
            <Card className="hidden lg:block p-5 sticky top-4 h-fit col-span-1 border border-borderColor">
                <h3 className='text-lg font-semibold'>Table of contents</h3>
                <Separator orientation="horizontal" />
                <nav className="space-y-2 my-3">
                    {
                        legalPageContent.faq.sections.map((section) =>
                            <Link key={section.id} href={`#${section.id}`}
                                className={`block text-md py-1 px-2 ${activeSection === section.id ? 'text-primary font-bold transition-colors border-l-2 border-secondary bg-secondary/5' : 'hover:text-primary'
                                    }`}
                            >
                                {section.title}
                            </Link>)
                    }
                </nav>
            </Card>

            <div className='col-span-4 lg:col-span-3 space-y-5 p-5'>
                <section className='space-y-5 mt-5 text-lg text-textColorTwo' id={legalPageContent.faq.sections[0].id}>
                    <h2 className="text-3xl text-secondary">{legalPageContent.faq.sections[0].title}</h2>
                    {
                        legalPageContent.faq.sections[0].contents.map((content, index) =>
                            <p key={index}>{content}</p>)
                    }
                </section>

                <section className='space-y-5 mt-5 text-lg text-textColorTwo' id={legalPageContent.faq.sections[1].id}>
                    <h2 className="text-3xl text-secondary">{legalPageContent.faq.sections[1].title}</h2>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="faq-1">
                            <AccordionTrigger className="text-xl font-semibold">{legalPageContent.faq.sections[1].faqs[0].question}</AccordionTrigger>
                            <AccordionContent className="space-y-3">
                                {legalPageContent.faq.sections[1].faqs[0].contents?.map((content, index) =>
                                    <p className="text-base font-light" key={index}>{content}</p>)}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-2">
                            <AccordionTrigger className="text-xl font-semibold">{legalPageContent.faq.sections[1].faqs[1].question}</AccordionTrigger>
                            <AccordionContent className="space-y-3">
                                {legalPageContent.faq.sections[1].faqs[1].contents?.map((content, index) =>
                                    <p className="text-base font-light" key={index}>{content}</p>)}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-3">
                            <AccordionTrigger className="text-xl font-semibold">{legalPageContent.faq.sections[1].faqs[2].question}</AccordionTrigger>
                            <AccordionContent className="space-y-3">
                                <p>{legalPageContent.faq.sections[1].faqs[2].textContent}</p>
                                <ul className="custom-marker-legal list-disc space-y-5 ml-5 md:ml-10">
                                    {legalPageContent.faq.sections[1].faqs[2].ulTextContents?.map((content, index) =>
                                        <li className="text-base font-light" key={index}>{content}</li>)}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-4">
                            <AccordionTrigger className="text-xl font-semibold">{legalPageContent.faq.sections[1].faqs[3].question}</AccordionTrigger>
                            <AccordionContent className="space-y-3">
                                {legalPageContent.faq.sections[1].faqs[3].textContentOne?.map((content, index) =>
                                    <p className="text-base font-light" key={index}>{content}
                                    </p>
                                )}
                                <h3 className="text-xl font-bold">{legalPageContent.faq.sections[1].faqs[3].textContentTwo}</h3>
                                {legalPageContent.faq.sections[1].faqs[3].textContentThree?.map((content, index) =>
                                    <p className="text-base font-light" key={index}>{content}
                                    </p>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-5">
                            <AccordionTrigger className="text-xl font-semibold">{legalPageContent.faq.sections[1].faqs[4].question}</AccordionTrigger>
                            <AccordionContent className="space-y-3">
                                <p className="text-base font-light">{legalPageContent.faq.sections[1].faqs[4].textContent}</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-6">
                            <AccordionTrigger className="text-xl font-semibold">{legalPageContent.faq.sections[1].faqs[5].question}</AccordionTrigger>
                            <AccordionContent className="space-y-3">
                                {legalPageContent.faq.sections[1].faqs[5].contents?.map((content, index) =>
                                    <p className="text-base font-light" key={index}>{content}</p>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-7">
                            <AccordionTrigger className="text-xl font-semibold">{legalPageContent.faq.sections[1].faqs[6].question}</AccordionTrigger>
                            <AccordionContent className="space-y-3">
                                {legalPageContent.faq.sections[1].faqs[6].contents?.map((content, index) =>
                                    <p className="text-base font-light" key={index}>{content}</p>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-8">
                            <AccordionTrigger className="text-xl font-semibold">{legalPageContent.faq.sections[1].faqs[7].question}</AccordionTrigger>
                            <AccordionContent className="space-y-3">
                                {legalPageContent.faq.sections[1].faqs[7].contents?.map((content, index) =>
                                    <p className="text-base font-light" key={index}>{content}</p>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-9">
                            <AccordionTrigger className="text-xl font-semibold">{legalPageContent.faq.sections[1].faqs[8].question}</AccordionTrigger>
                            <AccordionContent className="space-y-3">
                                {legalPageContent.faq.sections[1].faqs[8].contents?.map((content, index) =>
                                    <p className="text-base font-light" key={index}>{content}</p>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-10">
                            <AccordionTrigger className="text-xl font-semibold">{legalPageContent.faq.sections[1].faqs[9].question}</AccordionTrigger>
                            <AccordionContent className="space-y-3">
                                {legalPageContent.faq.sections[1].faqs[9].contents?.map((content, index) =>
                                    <p className="text-base font-light" key={index}>{content}</p>
                                )}
                                <span><Link className="text-gradientColorOne" href={legalPageContent.faq.sections[1].faqs[9].textlink}>
                                    {legalPageContent.faq.sections[1].faqs[9].textlink}
                                </Link></span>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-11">
                            <AccordionTrigger className="text-xl font-semibold">{legalPageContent.faq.sections[1].faqs[10].question}</AccordionTrigger>
                            <AccordionContent className="space-y-3">
                                {legalPageContent.faq.sections[1].faqs[10].contents?.map((content, index) =>
                                    <p className="text-base font-light" key={index}>{content}</p>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </section>
            </div>
        </div>
    );
};

export default GdprFaq;