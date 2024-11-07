// @ts-nocheck
'use client';
import { Card } from "@/components/ui/card";
import { legalPageContent } from "@/lib/TextContent";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import '../../../app/custom.css'
const TermsComponent = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    // const [activeTab, setActiveTab] = useState('cookies');
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
            { threshold: 0.5 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    // useEffect(() => {
    //     const tab = searchParams.get('tab') || 'cookies'; // Default to 'cookies' tab
    //     setActiveTab(tab);
    // }, [searchParams]);

    return (

        <div className='grid grid-cols-4 gap-6 py-10 pb-24'>
            <Card className="hidden lg:block p-5 sticky top-4 h-fit col-span-1 border border-borderColor">
                <h3 className='text-lg font-semibold'>Table of contents</h3>
                <nav className="space-y-2">
                    {
                        legalPageContent.terms.sections.map((section) =>
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
                <section id={legalPageContent.terms.sections[0].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">1. {legalPageContent.terms.sections[0].title}</h2>
                    {
                        legalPageContent.terms.sections[0].contents.map((content, index) =>
                            <p key={index} className="text-lg text-textColorTwo">{content}</p>)
                    }
                </section>

                <section id={legalPageContent.terms.sections[1].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">2. {legalPageContent.terms.sections[1].title}</h2>
                    <ul className="custom-marker-legal list-disc space-y-5 ml-5 md:ml-16">
                        {
                            legalPageContent.terms.sections[1].ulContents?.map((content, index) => (
                                <li key={index} className="text-textColorTwo text-lg">
                                    <p key={content._id}>
                                        {content.textContent}
                                    </p>
                                    {
                                        content.subContents ?
                                            <div className="ml-5 md:ml-10">
                                                {content.subContents?.map((subContent, index) => (
                                                    <li key={index} className="text-textColorTwo text-lg">
                                                        <p key={index}>
                                                            {subContent}
                                                        </p>
                                                    </li>
                                                ))}
                                            </div>
                                            :
                                            <></>
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </section>

                <section id={legalPageContent.terms.sections[2].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">3. {legalPageContent.terms.sections[2].title}</h2>
                    <ul className="custom-marker-legal list-inside list-disc space-y-5 md:ml-10">
                        <li className="text-lg text-textColorTwo">{legalPageContent.terms.sections[2].textContent}</li>
                    </ul>
                    <ul className="custom-marker-legal list-inside list-disc space-y-5 md:ml-16">
                        {legalPageContent.terms.sections[2].subContents?.map((content, index) =>
                            <li className="text-lg text-textColorTwo" key={index}>{content}</li>)}
                    </ul>
                </section>

                <section id={legalPageContent.terms.sections[3].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">4. {legalPageContent.terms.sections[3].title}</h2>
                    <ul className="custom-marker-legal list-inside list-disc space-y-5 md:ml-10">
                        {legalPageContent.terms.sections[3].contents?.map((content, index) =>
                            <li className="text-lg text-textColorTwo" key={index}>{content}</li>)}
                    </ul>
                </section>

                <section id={legalPageContent.terms.sections[4].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">5. {legalPageContent.terms.sections[4].title}</h2>
                    <ul className="custom-marker-legal list-inside list-disc space-y-5 md:ml-10">
                        <li className="text-lg text-textColorTwo">{legalPageContent.terms.sections[4].textContent}
                            <p>
                                <Link className="text-gradientColorOne" href={legalPageContent.terms.sections[4].linkOne}>{legalPageContent.terms.sections[4].linkOne}</Link>
                                <span> and </span>
                                <Link className="text-gradientColorOne" href={legalPageContent.terms.sections[4].linkTwo}>{legalPageContent.terms.sections[4].linkTwo}</Link>
                            </p>
                        </li>
                    </ul>
                </section>

                <section id={legalPageContent.terms.sections[5].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">6. {legalPageContent.terms.sections[5].title}</h2>
                    <ul className="custom-marker-legal list-inside list-disc space-y-5 md:ml-10">
                        {legalPageContent.terms.sections[5].contents?.map((content, index) =>
                            <li className="text-lg text-textColorTwo" key={index}>{content}</li>)}
                    </ul>
                </section>

                <section id={legalPageContent.terms.sections[6].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">7. {legalPageContent.terms.sections[6].title}</h2>
                    <ul className="custom-marker-legal list-disc space-y-5 ml-5 md:ml-16">
                        {
                            legalPageContent.terms.sections[6].contents?.map((content) => (
                                <li key={content._id} className="text-textColorTwo text-lg">
                                    <p>
                                        {content.textContent}
                                    </p>
                                    {
                                        content.subContents ?
                                            <div className="ml-5 md:ml-10">
                                                {content.subContents?.map((subContent, index) => (
                                                    <li key={index} className="text-textColorTwo text-lg">
                                                        <p key={index}>
                                                            {subContent}
                                                        </p>
                                                    </li>
                                                ))}
                                            </div>
                                            :
                                            <></>
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </section>

                <section id={legalPageContent.terms.sections[7].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">8. {legalPageContent.terms.sections[7].title}</h2>
                    <ul className="custom-marker-legal list-inside list-disc space-y-5 md:ml-10">
                        {legalPageContent.terms.sections[7].contents?.map((content, index) =>
                            <li className="text-lg text-textColorTwo" key={index}>{content}</li>)}
                    </ul>
                </section>

                <section id={legalPageContent.terms.sections[8].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">9. {legalPageContent.terms.sections[8].title}</h2>
                    <p className="text-lg text-textColorTwo">{legalPageContent.terms.sections[8].textContent}
                      <span> <Link className="text-gradientColorOne" href={legalPageContent.terms.sections[8].websiteUrl}>{legalPageContent.terms.sections[8].websiteUrl}</Link> </span>
                        {legalPageContent.terms.sections[8].textContentPart}
                    </p>
                </section>

                <section>
                    <p className="text-lg text-textColorTwo">{legalPageContent.terms.endTextContent}</p>
                </section>
            </div>
        </div>

    );
};

export default TermsComponent;