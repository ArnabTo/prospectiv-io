// @ts-nocheck

import { Card } from "@/components/ui/card";
import { legalPageContent } from "@/lib/TextContent";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const GdprComponent = () => {

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
                        legalPageContent.gdpr_statement.sections.map((section) =>
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
                <secton className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">{legalPageContent.gdpr_statement.title}</h2>
                    <p className="text-lg text-textColorTwo">{legalPageContent.gdpr_statement.textContent}</p>
                </secton>
                <section id={legalPageContent.gdpr_statement.sections[0].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">1. {legalPageContent.gdpr_statement.sections[0].title}</h2>
                    {
                        legalPageContent.gdpr_statement.sections[0].contents.map((content, index) =>
                            <p key={index} className="text-lg text-textColorTwo">{content}</p>)
                    }
                </section>

                <section id={legalPageContent.gdpr_statement.sections[1].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">2. {legalPageContent.gdpr_statement.sections[1].title}</h2>
                    <p className="text-lg text-textColorTwo">{legalPageContent.gdpr_statement.sections[1].textContent}</p>
                </section>

                <section id={legalPageContent.gdpr_statement.sections[2].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">3. {legalPageContent.gdpr_statement.sections[2].title}</h2>
                    <p className="text-lg text-textColorTwo">{legalPageContent.gdpr_statement.sections[2].textContent}</p>
                    <ul className="custom-marker-legal list-disc space-y-5 ml-5 md:ml-10">
                        {legalPageContent.gdpr_statement.sections[2].textUlContents?.map((content, index) =>
                            <li key={index} className="text-lg text-textColorTwo">{content}</li>)
                        }
                    </ul>
                </section>

                <section id={legalPageContent.gdpr_statement.sections[3].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">4. {legalPageContent.gdpr_statement.sections[3].title}</h2>
                    <p className="text-lg text-textColorTwo">{legalPageContent.gdpr_statement.sections[3].textContent}</p>
                    <h3 className="text-secondary text-xl">{legalPageContent.gdpr_statement.sections[3].textContentHeadline}</h3>
                    {
                        legalPageContent.gdpr_statement.sections[3].textContents.map((content, index) =>
                            <p key={index} className="text-lg text-textColorTwo">{content}</p>)
                    }
                    <ul className="custom-marker-legal list-disc space-y-5 ml-5 md:ml-10">
                        {legalPageContent.gdpr_statement.sections[3].textContentUl?.map((content, index) =>
                            <li key={index} className="text-lg text-textColorTwo">{content}</li>)
                        }
                    </ul>
                </section>

                <section id={legalPageContent.gdpr_statement.sections[4].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">5. {legalPageContent.gdpr_statement.sections[4].title}</h2>
                    <p className="text-lg text-textColorTwo">{legalPageContent.gdpr_statement.sections[4].textContent}</p>
                </section>

                <section id={legalPageContent.gdpr_statement.sections[5].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">6. {legalPageContent.gdpr_statement.sections[5].title}</h2>
                    <ul className="custom-marker-legal list-disc space-y-5 ml-5 md:ml-10 text-lg text-textColorTwo">
                        <li>
                            {legalPageContent.gdpr_statement.sections[5].textContents[0]}
                            <span> <Link className="text-gradientColorOne" href={legalPageContent.gdpr_statement.sections[5].textContents[1]}>{legalPageContent.gdpr_statement.sections[5].textContents[1]}</Link> </span>
                            {legalPageContent.gdpr_statement.sections[5].textContents[2]}
                        </li>
                        <li>
                            {legalPageContent.gdpr_statement.sections[5].textContents[3]}
                        </li>
                        <li>
                            {legalPageContent.gdpr_statement.sections[5].textContents[4]}
                            <span> <Link className="text-gradientColorOne" href={`mailto:${legalPageContent.gdpr_statement.sections[5].textContents[5]}`}>
                                {legalPageContent.gdpr_statement.sections[5].textContents[5]}
                            </Link> </span>
                            {legalPageContent.gdpr_statement.sections[5].textContents[6]}
                        </li>
                        <li> {legalPageContent.gdpr_statement.sections[5].textContents[7]}</li>
                    </ul>
                </section>

                <section id={legalPageContent.gdpr_statement.sections[6].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">7. {legalPageContent.gdpr_statement.sections[6].title}</h2>
                    <p className="text-lg text-textColorTwo">{legalPageContent.gdpr_statement.sections[6].textContent}</p>
                </section>

                <section id={legalPageContent.gdpr_statement.sections[7].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">8. {legalPageContent.gdpr_statement.sections[7].title}</h2>
                    <p className="text-lg text-textColorTwo">{legalPageContent.gdpr_statement.sections[7].textContent}</p>
                </section>

                <section id={legalPageContent.gdpr_statement.sections[8].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">9. {legalPageContent.gdpr_statement.sections[8].title}</h2>
                    <p className="text-lg text-textColorTwo">{legalPageContent.gdpr_statement.sections[8].textContent}</p>
                </section>

                <section id={legalPageContent.gdpr_statement.sections[9].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">10. {legalPageContent.gdpr_statement.sections[9].title}</h2>
                    <p className="text-lg text-textColorTwo">{legalPageContent.gdpr_statement.sections[9].textContent}</p>
                </section>
            </div>
        </div>
    );
};

export default GdprComponent;