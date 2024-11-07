// @ts-nocheck

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { legalPageContent } from "@/lib/TextContent";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const UsCompliance = () => {


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
            { threshold: 0.5 }
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
                <section className='space-y-5 py-5 text-lg text-textColorTwo'>
                    <h2 className="text-3xl text-secondary">{legalPageContent.usCompliance.title}</h2>
                    <p>{legalPageContent.usCompliance.textContent}</p>
                </section>

                <section className='space-y-5 py-5 text-lg text-textColorTwo' id={legalPageContent.usCompliance.sections[0].id}>
                    <h2 className="text-3xl text-secondary">{legalPageContent.usCompliance.sections[0].title}</h2>
                    <p >{legalPageContent.usCompliance.sections[0].textContent}
                        <span> <Link className="text-gradientColorOne" href={legalPageContent.usCompliance.sections[0].textLink}>
                            {legalPageContent.usCompliance.sections[0].textContentLink}
                        </Link> </span>
                    </p>
                </section>

                <section className='space-y-5 py-5 text-textColorTwo text-lg' id={legalPageContent.usCompliance.sections[1].id}>
                    <h2 className="text-3xl text-secondary">{legalPageContent.usCompliance.sections[1].title}</h2>
                    {
                        legalPageContent.usCompliance.sections[1].contents?.map((content, index) =>
                            <p key={index}>{content}</p>)
                    }
                    <div className="space-y-5">
                        <p >{legalPageContent.usCompliance.sections[1].textUlContents?.contentOne.title}</p>
                        <ul className="custom-marker-legal list-disc space-y-5 ml-5 md:ml-10">
                            {legalPageContent.usCompliance.sections[1].textUlContents?.contentOne.ulContents.map((content, index) =>
                                <li key={index}>{content}</li>
                            )}
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <p >{legalPageContent.usCompliance.sections[1].textUlContents?.contentTwo.title}</p>
                        <ul className="custom-marker-legal list-disc space-y-5 ml-5 md:ml-10">
                            {legalPageContent.usCompliance.sections[1].textUlContents?.contentTwo.ulContents.map((content, index) =>
                                <li key={index}>{content}</li>
                            )}
                        </ul>
                    </div>
                </section>

                <section className='space-y-5 py-5 text-textColorTwo text-lg' id={legalPageContent.usCompliance.sections[2].id}>
                    <h2 className="text-3xl text-secondary">3. {legalPageContent.usCompliance.sections[2].title}</h2>
                    <p>{legalPageContent.usCompliance.sections[2].textContent}</p>
                </section>

                <section className='space-y-5 py-5 text-textColorTwo text-lg' id={legalPageContent.usCompliance.sections[3].id}>
                    <h2 className="text-3xl text-secondary">4. {legalPageContent.usCompliance.sections[3].title}</h2>
                    {legalPageContent.usCompliance.sections[3].contents?.map((content, index) =>
                        <p key={index}>{content}</p>
                    )}
                </section>

                <section className='space-y-5 py-5 text-textColorTwo text-lg' id={legalPageContent.usCompliance.sections[4].id}>
                    <h2 className="text-3xl text-secondary">5. {legalPageContent.usCompliance.sections[4].title}</h2>
                    {legalPageContent.usCompliance.sections[4].contents?.map((content, index) =>
                        <p key={index}>{content}</p>
                    )}
                </section>

                <section className='space-y-5 py-5 text-textColorTwo text-lg' id={legalPageContent.usCompliance.sections[5].id}>
                    <h2 className="text-3xl text-secondary">6. {legalPageContent.usCompliance.sections[5].title}</h2>
                    <p>
                    <span className="font-bold">{legalPageContent.usCompliance.sections[5].contents[0].title}</span> -
                        {legalPageContent.usCompliance.sections[5].contents[0].textContent[0]}
                        <span><Link className='text-gradientColorOne' href={legalPageContent.usCompliance.sections[5].contents[0].textContent[1]}> {legalPageContent.usCompliance.sections[5].contents[0].textContent[1]}.</Link> </span>
                        {legalPageContent.usCompliance.sections[5].contents[0].textContent[2]}
                    </p>
                    <p>
                    <span className="font-bold">{legalPageContent.usCompliance.sections[5].contents[1].title}</span> -
                        {legalPageContent.usCompliance.sections[5].contents[1].textContent}
                    </p>
                    <p>
                    <span className="font-bold">{legalPageContent.usCompliance.sections[5].contents[2].title}</span> -
                        {legalPageContent.usCompliance.sections[5].contents[2].textContent}
                    </p>
                    <p>
                       <span className="font-bold">{legalPageContent.usCompliance.sections[5].contents[3].title}</span> -
                        {legalPageContent.usCompliance.sections[5].contents[3].textContent}
                    </p>
                </section>

                <section className='space-y-5 py-5 text-textColorTwo text-lg' id={legalPageContent.usCompliance.sections[6].id}>
                    <h2 className="text-3xl text-secondary">7. {legalPageContent.usCompliance.sections[6].title}</h2>
                    <p>{legalPageContent.usCompliance.sections[6].textContent}</p>
                </section>

                <section className='space-y-5 py-5 text-textColorTwo text-lg' id={legalPageContent.usCompliance.sections[7].id}>
                    <h2 className="text-3xl text-secondary">8. {legalPageContent.usCompliance.sections[7].title}</h2>
                    <p>{legalPageContent.usCompliance.sections[7].textContent}</p>
                </section>

                <section className='space-y-5 py-5 text-textColorTwo text-lg' id={legalPageContent.usCompliance.sections[8].id}>
                    <h2 className="text-3xl text-secondary">9. {legalPageContent.usCompliance.sections[8].title}</h2>
                    <p>{legalPageContent.usCompliance.sections[8].textContent}</p>
                </section>
            </div>
        </div>
    );
};

export default UsCompliance;