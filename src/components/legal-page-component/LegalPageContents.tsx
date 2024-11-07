// @ts-nocheck

'use client';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import PrivacyComponent from './privacy-component/PrivacyComponent';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { legalPageContent } from '@/lib/TextContent';
import Link from 'next/link';
import { Card } from '../ui/card';
import { useRouter, useSearchParams } from 'next/navigation';
import TermsComponent from './terms-component/TermsComponent';



const LegalPageContents = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState('cookies');
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
            { threshold: 0.5, rootMargin: '0px 0px -100px 0px' } // Adjust for desired sensitivity
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const tab = searchParams.get('tab') || 'cookies'; // Default to 'cookies' tab
        setActiveTab(tab);
    }, [searchParams]);

    return (
        <div>
            <Tabs defaultValue={activeTab} className="w-full">
                <TabsList className="w-full justify-between items-center rounded-full overflow-x-auto lg:overflow-hidden">
                    <TabsTrigger value="cookies">Cookie Policy</TabsTrigger>
                    <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
                    <TabsTrigger value="terms">Terms</TabsTrigger>
                    <TabsTrigger value="gdpr">GDPR Compliance Statement</TabsTrigger>
                    <TabsTrigger value="us">US Complaiance Statement</TabsTrigger>
                    <TabsTrigger value="faq">GDPR FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="cookies">
                    <div className='grid grid-cols-4 gap-6 py-10'>
                        <Card className="hidden lg:block p-5 sticky top-4 h-fit col-span-1 border border-borderColor">
                            <h3 className='text-lg font-semibold'>Table of contents</h3>
                            <nav className="space-y-2">
                                {
                                    legalPageContent.cookies.section.map((section) =>
                                        <Link key={section.id} href={`#${section.id}`}
                                            className={`block text-md py-1 px-2 ${activeSection === section.id ? 'text-primary font-bold transition-colors border-l-2 border-secondary bg-secondary/5' : 'hover:text-primary'
                                                }`}
                                        >
                                            {section.title}
                                        </Link>)
                                }
                            </nav>
                        </Card>

                        {/* Content */}
                        <div className='col-span-4 lg:col-span-3 space-y-5'>
                            <section className='space-y-5 py-8' id={legalPageContent.cookies.section[0].id} >
                                <h2 className="text-3xl text-secondary">1. {legalPageContent.cookies.section[0].title}</h2>
                                {legalPageContent.cookies.section[0].contents?.map((content: any) =>
                                    'id' in content ? (
                                        <p key={content.id} className='text-lg text-textColorTwo'>
                                            <span className='text-secondary font-bold'>{content.id}</span> {content.content}
                                        </p>
                                    ) : null
                                )}
                            </section>

                            <section id={legalPageContent.cookies.section[1].id} className=' space-y-5 py-5'>
                                <h2 className="text-3xl text-secondary">2. {legalPageContent.cookies.section[1].title}</h2>
                                <p className='text-lg text-textColorTwo'>{legalPageContent.cookies.section[1].textContent}</p>
                            </section>

                            <section id={legalPageContent.cookies.section[2].id} className=' space-y-5 py-5'>
                                <h2 className="text-3xl text-secondary">3. {legalPageContent.cookies.section[2].title}</h2>
                                <p className='text-lg text-textColorTwo'>{legalPageContent.cookies.section[2].textContent}</p>
                            </section>

                            <section id={legalPageContent.cookies.section[3].id} className='space-y-5 py-5'>
                                <h2 className='text-3xl text-secondary'>4. {legalPageContent.cookies.section[3].title}</h2>
                                <p className='text-lg text-textColorTwo'><span className='font-medium'>Update:</span> {legalPageContent.cookies.section[3].update}</p>
                                <div className='overflow-x-auto max-h-72 space-y-8'>
                                    {
                                        legalPageContent.cookies.section[3].contents &&
                                        legalPageContent.cookies.section[3].contents[0] &&
                                        <div className='space-y-3  border border-borderColor rounded-2xl p-5'>
                                            <h3 className='text-xl text-secondary'>{legalPageContent.cookies.section[3].contents[0].title}</h3>
                                            <p className='text-lg text-textColorTwo'>{legalPageContent.cookies.section[3].contents[0].textContent}</p>

                                            <div className='w-full'>
                                                <Table className='w-full h-96'>
                                                    <TableHeader>
                                                        <TableRow>
                                                            {legalPageContent.cookies.section[3].contents[0].headers.map((header, index) =>
                                                                <TableHead key={index}>{header}</TableHead>)}
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {
                                                            legalPageContent.cookies.section[3].contents[0].rows.map((content, index) =>
                                                                <TableRow key={index}>
                                                                    <TableCell className='text-base font-bold break-words max-w-28'>{content.name}</TableCell>
                                                                    <TableCell className='w-full text-textColorTwo'>{content.purpose}</TableCell>
                                                                    <TableCell className='text-textColorTwo'>{content.domain}</TableCell>
                                                                    <TableCell className='text-textColorTwo'>{content.expiration}</TableCell>
                                                                    <TableCell className='text-gradientColorOne'>
                                                                        <Link href={content.provider.sitelink ?? ''}>
                                                                            {content.provider.title}
                                                                        </Link>
                                                                    </TableCell>
                                                                    <TableCell className='text-base font-bold'>{content.type}</TableCell>
                                                                </TableRow>)
                                                        }
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </div>
                                    }
                                    {
                                        legalPageContent.cookies.section[3].contents &&
                                        legalPageContent.cookies.section[3].contents[1] &&
                                        <div className='space-y-3  border border-borderColor rounded-2xl p-5'>
                                            <h3 className='text-xl text-secondary'>{legalPageContent.cookies.section[3].contents[1].title}</h3>
                                            <p className='text-lg text-textColorTwo'>{legalPageContent.cookies.section[3].contents[1].textContent}</p>

                                            <div className='w-full'>
                                                <Table className='w-full h-96'>
                                                    <TableHeader>
                                                        <TableRow>
                                                            {legalPageContent.cookies.section[3].contents[1].headers.map((header, index) =>
                                                                <TableHead key={index}>{header}</TableHead>)}
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {
                                                            legalPageContent.cookies.section[3].contents[1].rows.map((content, index) =>
                                                                <TableRow key={index}>
                                                                    <TableCell className='text-base font-bold break-words max-w-28'>{content.name}</TableCell>
                                                                    <TableCell className='w-full text-textColorTwo'>{content.purpose}</TableCell>
                                                                    <TableCell className='text-textColorTwo'>{content.domain}</TableCell>
                                                                    <TableCell className='text-textColorTwo'>{content.expiration}</TableCell>
                                                                    <TableCell className='text-gradientColorOne'>
                                                                        <Link href={content.provider.sitelink ?? ''}>
                                                                            {content.provider.title}
                                                                        </Link>
                                                                    </TableCell>
                                                                    <TableCell className='text-base font-bold'>{content.type}</TableCell>
                                                                </TableRow>)
                                                        }
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </div>
                                    }
                                    {
                                        legalPageContent.cookies.section[3].contents &&
                                        legalPageContent.cookies.section[3].contents[2] &&
                                        <div className='space-y-3  border border-borderColor rounded-2xl p-5'>
                                            <h3 className='text-xl text-secondary'>{legalPageContent.cookies.section[3].contents[2].title}</h3>
                                            <p className='text-lg text-textColorTwo'>{legalPageContent.cookies.section[3].contents[2].textContent}</p>

                                            <div className='w-full'>
                                                <Table className='w-full h-96'>
                                                    <TableHeader>
                                                        <TableRow>
                                                            {legalPageContent.cookies.section[3].contents[2].headers.map((header, index) =>
                                                                <TableHead key={index}>{header}</TableHead>)}
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {
                                                            legalPageContent.cookies.section[3].contents[2].rows.map((content, index) =>
                                                                <TableRow key={index}>
                                                                    <TableCell className='text-base font-bold break-words max-w-28'>{content.name}</TableCell>
                                                                    <TableCell className='w-full text-textColorTwo'>{content.purpose}</TableCell>
                                                                    <TableCell className='text-textColorTwo'>{content.domain}</TableCell>
                                                                    <TableCell className='text-textColorTwo'>{content.expiration}</TableCell>
                                                                    <TableCell className='text-gradientColorOne'>
                                                                        <Link href={content.provider.sitelink ?? ''}>
                                                                            {content.provider.title}
                                                                        </Link>
                                                                    </TableCell>
                                                                    <TableCell className='text-base font-bold'>{content.type}</TableCell>
                                                                </TableRow>)
                                                        }
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </div>
                                    }
                                    {
                                        legalPageContent.cookies.section[3].contents &&
                                        legalPageContent.cookies.section[3].contents[3] &&
                                        <div className='space-y-2  border border-borderColor rounded-2xl p-5'>
                                            <h3 className='text-xl text-secondary'>{legalPageContent.cookies.section[3].contents[3].title}</h3>
                                            <p className='text-lg text-textColorTwo'>{legalPageContent.cookies.section[3].contents[3].textContent}</p>

                                            <div className='w-full'>
                                                <Table className='w-full h-96'>
                                                    <TableHeader>
                                                        <TableRow>
                                                            {legalPageContent.cookies.section[3].contents[3].headers.map((header, index) =>
                                                                <TableHead key={index}>{header}</TableHead>)}
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {
                                                            legalPageContent.cookies.section[3].contents[3].rows.map((content, index) =>
                                                                <TableRow key={index}>
                                                                    <TableCell className='text-base font-bold break-words max-w-28'>{content.name}</TableCell>
                                                                    <TableCell className='w-full text-textColorTwo'>{content.purpose}</TableCell>
                                                                    <TableCell className='text-textColorTwo'>{content.domain}</TableCell>
                                                                    <TableCell className='text-textColorTwo'>{content.expiration}</TableCell>
                                                                    <TableCell className='text-gradientColorOne'>
                                                                        <Link href={content.provider.sitelink ?? ''}>
                                                                            {content.provider.title}
                                                                        </Link>
                                                                    </TableCell>
                                                                    <TableCell className='text-base font-bold'>{content.type}</TableCell>
                                                                </TableRow>)
                                                        }
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </section>

                            <section id={legalPageContent.cookies.section[4].id} className=' space-y-5 py-5'>
                                <h2 className="text-3xl text-secondary">5. {legalPageContent.cookies.section[4].title}</h2>
                                <div>
                                    <div className='my-3 space-y-3'>
                                        <p className='text-lg text-textColorTwo'>{legalPageContent.cookies.section[4].content[0].id} {legalPageContent.cookies.section[4].content[0].textContent}</p>
                                        <div className='w-full border border-borderColor lg:ml-7 p-5 flex flex-col gap-5 rounded-xl'>
                                            {legalPageContent.cookies.section[4].content[0].link_content?.map((cont, index) =>
                                                <Link className='text-gradientColorOne break-words max-w-full'
                                                    key={index} href={cont}><span className='text-textColorTwo'>{index + 1}.</span>   {cont}</Link>)}
                                        </div>
                                    </div>
                                    <div className='my-3'>
                                        <p className='text-md text-textColorTwo'>{legalPageContent.cookies.section[4].content[1].id} {legalPageContent.cookies.section[4].content[1].textContent}</p>
                                    </div>
                                    <div className='my-3'>
                                        <p className='text-md text-textColorTwo'>{legalPageContent.cookies.section[4].content[2].id} {legalPageContent.cookies.section[4].content[2].textContent}</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="privacy">
                    <PrivacyComponent />
                </TabsContent>

                <TabsContent value="terms">
                    <TermsComponent/>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default LegalPageContents;