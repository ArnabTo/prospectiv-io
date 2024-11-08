// @ts-nocheck

import { Card } from "@/components/ui/card";
import { legalPageContent } from "@/lib/TextContent";
import Link from "next/link";
import { useEffect, useState } from "react";
const PrivacyComponent = () => {

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
                <nav className="space-y-2">
                    {
                        legalPageContent.privacy_policy.section.map((section) =>
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
                <section id={legalPageContent.privacy_policy.section[0].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">1. {legalPageContent.privacy_policy.section[0].title}</h2>
                    <p className='text-lg text-textColorTwo'>{legalPageContent.privacy_policy.section[0].textContent}</p>
                    <div className="border border-borderColor rounded-xl md:ml-5 w-fit p-2 md:p-10">
                        <span>
                            <p>By email to our Data Protection Officer:
                                <Link className="text-gradientColorOne" href='mailto:dpo@Prospectiv.io'> {legalPageContent.privacy_policy.section[0].contactContent?.email}</Link>
                            </p>
                            <p>By telephone on: <Link className="text-gradientColorOne" href={`tel:${legalPageContent.privacy_policy.section[0].contactContent?.telephone}`}>{legalPageContent.privacy_policy.section[0].contactContent?.telephone}</Link> </p>
                        </span>
                        <p>or</p>
                        <span>
                            <p>By post to: {legalPageContent.privacy_policy.section[0].contactContent?.address}
                            </p>
                            <p>By telephone on: <Link className="text-gradientColorOne" href={`tel:${legalPageContent.privacy_policy.section[0].contactContent?.telephoneTwo}`}>{legalPageContent.privacy_policy.section[0].contactContent?.telephoneTwo}</Link> </p>
                        </span>
                    </div>
                </section>

                <section id={legalPageContent.privacy_policy.section[1].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">2. {legalPageContent.privacy_policy.section[1].title}</h2>
                    <div className="space-y-4">
                        {legalPageContent.privacy_policy.section[1].contents?.map((content) =>
                            <p className='text-lg text-textColorTwo' key={content.id}>
                                <span className="text-secondary">{content.id}.   </span>
                                {content.textContent}
                            </p>)}
                    </div>
                </section>

                <section id={legalPageContent.privacy_policy.section[2].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">3. {legalPageContent.privacy_policy.section[2].title}</h2>
                    <p className='text-lg text-textColorTwo'>{legalPageContent.privacy_policy.section[2].textContent}</p>
                    <div className="space-y-4">
                        {legalPageContent.privacy_policy.section[2].contents?.map((content) =>
                            <p className='text-lg text-textColorTwo' key={content.id}>
                                <span className="text-secondary">{content.id} {content?.title}. </span>
                                {content.textContent}
                            </p>)}
                    </div>

                    <p className='my-4'>{legalPageContent.privacy_policy.section[2].endTextCotent}</p>
                </section>

                <section id={legalPageContent.privacy_policy.section[3].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">4. {legalPageContent.privacy_policy.section[3].title}</h2>
                    <p className='text-lg text-textColorTwo'>
                        <span className="text-secondary">{legalPageContent.privacy_policy.section[3].content?._id}  </span>
                        {legalPageContent.privacy_policy.section[3].content?.textContent}
                    </p>
                </section>

                <section id={legalPageContent.privacy_policy.section[4].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">5. {legalPageContent.privacy_policy.section[4].title}</h2>
                    <p className='text-lg text-textColorTwo'>
                        <span className="text-secondary">{legalPageContent.privacy_policy.section[4].content?._id}  </span>
                        {legalPageContent.privacy_policy.section[4].content?.textContent}
                    </p>
                </section>

                <section id={legalPageContent.privacy_policy.section[5].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">6. {legalPageContent.privacy_policy.section[5].title}</h2>
                    <div className="space-y-4">
                        {legalPageContent.privacy_policy.section[5].contents?.map((content) =>
                            <p className='text-lg text-textColorTwo' key={content.id}>
                                <span className="text-secondary">{content.id}. </span>
                                {content.textContent}
                            </p>)}
                    </div>
                </section>

                <section id={legalPageContent.privacy_policy.section[6].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">7. {legalPageContent.privacy_policy.section[6].title}</h2>
                    <div className="space-y-4">
                        {legalPageContent.privacy_policy.section[6].contents?.map((content) =>
                            <p className='text-lg text-textColorTwo' key={content.id}>
                                <span className="text-secondary">{content.id}. </span>
                                {content.textContent}
                            </p>)}
                    </div>
                </section>

                <section id={legalPageContent.privacy_policy.section[7].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">8. {legalPageContent.privacy_policy.section[7].title}</h2>
                    <div className="space-y-4">
                        {legalPageContent.privacy_policy.section[7].contents?.map((content) =>
                            <p className='text-lg text-textColorTwo' key={content.id}>
                                <span className="text-secondary">{content.id}. </span>
                                {content.textContent}
                            </p>)}
                    </div>
                </section>

                <section id={legalPageContent.privacy_policy.section[8].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">9. {legalPageContent.privacy_policy.section[8].title}</h2>
                    <p className='text-lg text-textColorTwo'>
                        <span className="text-secondary">{legalPageContent.privacy_policy.section[8].content?._id}  </span>
                        {legalPageContent.privacy_policy.section[8].content?.textContent}
                    </p>
                </section>

                <section id={legalPageContent.privacy_policy.section[9].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">10. {legalPageContent.privacy_policy.section[9].title}</h2>
                    <p className='text-lg text-textColorTwo'>
                        <span className="text-secondary">{legalPageContent.privacy_policy.section[9].content?._id}  </span>
                        {legalPageContent.privacy_policy.section[9].content?.textContent}
                    </p>
                </section>

                <section id={legalPageContent.privacy_policy.section[10].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">11. {legalPageContent.privacy_policy.section[10].title}</h2>
                    <div className="space-y-4">

                        {legalPageContent.privacy_policy.section[10].contents?.map((content) =>
                            <div key={content?._id} className="space-y-2">
                                <p className="text-lg text-textColorTwo"><span className="text-secondary">{content?._id}.  </span>
                                    {content.textContent}</p>

                                {
                                    content.subContents ?
                                        <div className="border border-borderColor p-2 md:p-5 w-fit rounded-xl md:ml-5">
                                            {content.subContents.map((subCont) =>
                                                <p className="text-lg text-textColorTwo" key={subCont._id}>
                                                    <span className="text-secondary">{subCont._id}. </span>
                                                    {subCont.textContent}
                                                </p>)}
                                        </div>
                                        :
                                        <></>
                                }
                            </div>
                        )}
                    </div>
                </section>

                <section id={legalPageContent.privacy_policy.section[11].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">12. {legalPageContent.privacy_policy.section[11].title}</h2>
                    <div className="space-y-4">
                        {legalPageContent.privacy_policy.section[11].contents?.map((content) =>
                            <div key={content?._id} className="space-y-2">
                                <p className="text-lg text-textColorTwo"><span className="text-secondary">{content?._id}.  </span>
                                    {content.textContent}
                                </p>

                                {
                                    content.subContents ?
                                        <div className="border border-borderColor p-2 md:p-5 w-fit rounded-xl md:ml-5">
                                            <p>{content.subContents[0].textContent}</p>
                                            <p>By email at: <Link className="text-gradientColorOne" href={`mailto:${content.subContents[1].textContent}`}>{content.subContents[1].textContent}</Link></p>
                                            <p>By telephone: <Link className="text-gradientColorOne" href={`tel:${content.subContents[2].textContent}`}>{content.subContents[2].textContent}</Link></p>
                                        </div>
                                        :
                                        <></>

                                }
                                {
                                    content.address && content.website ?
                                        <div className="border border-borderColor p-2 md:p-5 w-fit rounded-xl md:ml-5">
                                            <p className=" break-words max-w-32  mb-5">{content.address}</p>
                                            or
                                            <p>
                                                <Link className="text-gradientColorOne" href={content.website}>{content.website}</Link>
                                            </p>
                                        </div>
                                        :
                                        <></>
                                }
                            </div>
                        )}
                    </div>
                </section>
                
                <section id={legalPageContent.privacy_policy.section[12].id} className='space-y-5 py-5'>
                    <h2 className="text-3xl text-secondary">13. {legalPageContent.privacy_policy.section[12].title}</h2>
                    <div className="space-y-4">
                        {legalPageContent.privacy_policy.section[12].contents?.map((content) =>
                            <p className='text-lg text-textColorTwo' key={content._id}>
                                <span className="text-secondary">{content._id}. </span>
                                {content.textContent}
                            </p>)}
                    </div>
                </section>

                <section>
                    <p className="text-lg text-textColorTwo">{legalPageContent.privacy_policy.update.textContent}</p>
                </section>
            </div>
        </div>

    );
};

export default PrivacyComponent;