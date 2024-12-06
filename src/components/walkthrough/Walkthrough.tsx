import { ArrowDown } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FromTo } from 'sanity';

const Walkthrough = () => {

    const cardLeftRef = useRef(null);
    const CardRightRef = useRef(null);
    const gradientBgRef = useRef(null);
    const CardOneRef = useRef(null);
    const CardTwoRef = useRef(null);
    const CardThreeRef = useRef(null);
    const CardFourRef = useRef(null);
    const CardFiveRef = useRef(null);



    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: CardOneRef.current,
                start: 'top 90%',
                toggleActions: 'play none none none',
                // markers: true
            }
        });

        tl.fromTo(CardOneRef.current, {
            opacity: 0,
            x: 100
        }, {
            opacity: 1,
            x: 0,
            duration: 0.6
        }, "+=0.1")
            .fromTo(CardTwoRef.current, {
                opacity: 0,
                x: -100,
                scale: 0.9
            }, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.7
            }, "+=0.1")
            .fromTo(CardThreeRef.current, {
                opacity: 0,
                x: 100,
                scale: 0.9
            }, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.7
            }, "+=0.1")
            .fromTo(gradientBgRef.current, {
                opacity: 0,
                scale: 0.9
            }, {
                opacity: 1,
                scale: 1,
                duration: 0.5
            });
    }, []);
    return (
        <div className=''>
            <div className='max-w-7xl mx-auto p-5 space-y-36 lg:pt-32 lg:pb-32'>

                {/* paid advertising walkthrough */}
                <div className='relative'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-semibold mb-16'>Paid Advertising Walkthrough</h2>
                    <div className='w-full space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent'>
                        <div className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse gap-2 lg:gap-0 group'>
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <ArrowDown />
                            </div>
                            {/* Card */}
                            <div ref={CardRightRef}
                                className="w-full md:w-[calc(50%-2.5rem)] bg-card p-4 lg:p-8 border border-borderColor shadow rounded-3xl space-y-5">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <h3 className="text-xl lg:text-3xl font-bold text-secondary">Setup & Integration</h3>
                                </div>
                                <div className='space-y-4'>
                                    <div>
                                        <h4 className='text-xl font-semibold text-foreground'>Within 24 Hours of Joining</h4>
                                        <p className='text-lg text-textColorTwo'>Setup Call, Ads Account Creation or Audit and
                                            Optimisation</p>
                                    </div>
                                    <div>
                                        <h4 className='text-xl font-semibold text-foreground'>After Your Setup Call</h4>
                                        <p className='text-lg text-textColorTwo'>Tag Manager & Analytics Integration. Landing Page
                                            Copy, Design Recommendations, and Setup.</p>
                                    </div>
                                </div>

                                <p className='text-sm text-textColorTwo'>Next Strategy & Planning {'->'}</p>
                            </div>
                        </div>

                        <div
                            className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse gap-2 lg:gap-0 group'>
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <ArrowDown />
                            </div>
                            {/* Card */}
                            <div ref={cardLeftRef}
                                className="w-full md:w-[calc(50%-2.5rem)] bg-card p-4  lg:p-8 border border-borderColor shadow rounded-3xl space-y-5">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <h3 className="text-xl lg:text-3xl font-bold text-secondary">Strategy & Planning</h3>
                                </div>
                                <div className='space-y-4'>
                                    <div>
                                        <h4 className='text-lg font-semibold text-foreground'>Technical Setup Complete</h4>
                                        <p className='text-xl text-textColorTwo'>
                                            ICP Definition & Targeting Criteria. & Full Funnel
                                            Campaign Strategy.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className='text-lg font-semibold text-foreground'>Ads Start Running</h4>
                                        <p className='text-xl text-textColorTwo'>
                                            Campaign Setup and Day-to-Day Management.
                                        </p>
                                    </div>
                                </div>

                                <p className='text-sm text-textColorTwo'>Next Reporting {'->'}</p>
                            </div>
                        </div>

                        <div className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse gap-2 lg:gap-0 group'>
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <ArrowDown />
                            </div>
                            {/* Card */}
                            <div ref={CardRightRef}
                                className="w-full md:w-[calc(50%-2.5rem)] bg-card p-4 lg:p-8  border border-borderColor shadow rounded-3xl space-y-5">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <h3 className="text-xl lg:text-3xl font-bold text-secondary">Reporting</h3>
                                </div>
                                <div className='space-y-4'>
                                    <div>
                                        <h4 className='text-lg font-semibold text-foreground'>CRM Integration</h4>
                                        <p className='text-xl text-textColorTwo'>
                                            Connect Pipedrive, Hubspot, etc.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className='text-lg font-semibold text-foreground'>Regular Updates</h4>
                                        <p className='text-xl text-textColorTwo'>
                                            Slack Updates for Transparent Communication.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={gradientBgRef}
                        className="blur-[100px] w-full max-w-[35%] min-h-[90%] absolute left-[30%] top-0 -z-10 animate-spin-slow transition-all">
                        <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                        <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                        <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                    </div>
                </div>

                {/* cold email walkthrough */}
                <div className='relative'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-semibold mb-16'>Paid Advertising Walkthrough</h2>
                    <div className='w-full space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent'>
                        <div className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse gap-2 lg:gap-0 group'>
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <ArrowDown />
                            </div>
                            {/* Card */}
                            <div ref={CardRightRef}
                                className="w-full md:w-[calc(50%-2.5rem)] bg-card p-4 lg:p-8 border border-borderColor shadow rounded-3xl space-y-5">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <h3 className="text-xl lg:text-3xl font-bold text-secondary">Campaign Setup</h3>
                                </div>
                                <div className='space-y-4'>
                                    <div>
                                        <h4 className='text-xl font-semibold text-foreground'>Within 24 Hours of Joining</h4>
                                        <p className='text-lg text-textColorTwo'>Your Setup Call Scheduled</p>
                                    </div>
                                    <div>
                                        <h4 className='text-xl font-semibold text-foreground'>After Your Setup Call</h4>
                                        <p className='text-lg text-textColorTwo'>We Begin Curating Your Data and Writing Copy</p>
                                    </div>
                                </div>

                                <p className='text-sm text-textColorTwo'>Next Client Approval {'->'}</p>
                            </div>
                        </div>

                        <div className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse gap-2 lg:gap-0 group'>
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <ArrowDown />
                            </div>
                            {/* Card */}
                            <div ref={cardLeftRef}
                                className="w-full md:w-[calc(50%-2.5rem)] bg-card p-4 lg:p-8 border border-borderColor shadow rounded-3xl space-y-5">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <h3 className="text-xl lg:text-3xl font-bold text-secondary">Client Approval</h3>
                                </div>
                                <div className='space-y-4'>
                                    <div>
                                        <h4 className='text-xl font-semibold text-foreground'>Within 48 Hours of Joining</h4>
                                        <p className='text-lg text-textColorTwo'>
                                            Read and Approve Copy and Lead List
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-lg text-textColorTwo'>Your campaign will be launched once you’ve
                                            approved the data list and copy. We start
                                            contacting 750 prospects per week.
                                        </p>
                                        <p className='text-lg text-textColorTwo'>We can increase contacts to prospects (on a
                                            winning campaign) to 6,000 per week.</p>
                                    </div>
                                </div>

                                <p className='text-sm text-textColorTwo'>Next Campaign Launch {'->'}</p>
                            </div>
                        </div>

                        <div className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse gap-2 lg:gap-0 group'>
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <ArrowDown />
                            </div>
                            {/* Card */}
                            <div ref={CardRightRef} className="w-full md:w-[calc(50%-2.5rem)] bg-card p-4 lg:p-8 border border-borderColor shadow rounded-3xl">
                                <div className="flex items-center justify-between space-x-2">
                                    <h3 className="text-xl lg:text-3xl font-bold text-secondary">Campaign Launch</h3>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div ref={gradientBgRef}
                        className="blur-[100px] w-full max-w-[35%] min-h-[90%] absolute left-[30%] top-0 -z-10 animate-spin-slow transition-all">
                        <div className="bg-gradientColorOne absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                        <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                        <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Walkthrough;