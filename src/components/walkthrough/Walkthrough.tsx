import { ArrowDown } from 'lucide-react';
import React from 'react';

const Walkthrough = () => {
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-semibold mb-16'>Paid Advertising Walkthrough</h2>
            <div className='w-full space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent'>
                <div className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse gap-2 lg:gap-0 group'>
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <ArrowDown />
                    </div>
                    {/* Card */}
                    <div className="w-full md:w-[calc(50%-2.5rem)] bg-card p-4 border border-borderColor shadow rounded-3xl space-y-5">
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

                <div className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse gap-2 lg:gap-0 group'>
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <ArrowDown />
                    </div>
                    {/* Card */}
                    <div className="w-full md:w-[calc(50%-2.5rem)] bg-card p-4 border border-borderColor shadow rounded-3xl space-y-5">
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
                    <div className="w-full md:w-[calc(50%-2.5rem)] bg-card p-4 border border-borderColor shadow rounded-3xl space-y-5">
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
        </div>
    );
};

export default Walkthrough;