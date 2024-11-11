import Link from 'next/link';
import React from 'react';
import LinkedInLogo from '@/public/assets/icons8-linkedin-480.png'
import InstagramLogo from '@/public/assets//icons8-instagram-480.png'
import FacebookLogo from '@/public/assets/icons8-facebook-480.png'
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className='max-w-screen-2xl px-10 lg:px-32 mx-auto pt-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 space-y-5'>
                {/* <div className='space-y-5'>
                    <h3 className='text-xl font-bold border-b-2 border-secondary pb-2 max-w-[30%]'>Solutions</h3>
                    <ul className='text-md lg:text-lg text-textColorTwo space-y-1'>
                        <li className='hover:text-secondary'><Link href="#">Businesses with sales teams</Link></li>
                        <li className='hover:text-secondary'><Link href="#">Businesses without sales teams</Link></li>
                        <li className='hover:text-secondary'><Link href="#">Enterprise businesses</Link></li>
                        <li className='hover:text-secondary'><Link href="#">Industry solutions</Link></li>
                        <li className='hover:text-secondary'><Link href="#">Lead generation service</Link></li>
                        <li className='hover:text-secondary'><Link href="#">Email marketing agency</Link></li>
                        <li className='hover:text-secondary'><Link href="#">Demand generation agency</Link></li>
                        <li className='hover:text-secondary'><Link href="#">B2B appointment setting services</Link></li>
                        <li className='hover:text-secondary'><Link href="#">Multi-channel marketing agency</Link></li>
                        <li className='hover:text-secondary'><Link href="#">Account based marketing service</Link></li>
                    </ul>
                </div> */}

                <div className='space-y-5'>
                    <div className='flex flex-col justify-center gap-5'>
                        <h3 className='text-xl font-bold border-b-2 border-secondary pb-2 max-w-[30%]'>Company</h3>
                        <ul className='text-md lg:text-lg text-textColorTwo space-y-1'>
                            <li className='hover:text-secondary'><Link href="/company/about-us">About us</Link></li>
                            <li className='hover:text-secondary'><Link href="/company/life-at-prospectiv">Life at Prospectiv</Link></li>
                            <li className='hover:text-secondary'><Link href="/company/careers">Careers</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-5'>
                    <div className='flex flex-col justify-center gap-5'>
                        <h3 className='text-xl font-bold border-b-2 border-secondary pb-2 max-w-[30%]'>Results</h3>
                        <ul className='text-md lg:text-lg text-textColorTwo space-y-1'>
                            <li className='hover:text-secondary'><Link href="/result/success-story">Success stories</Link></li>
                            <li className='hover:text-secondary'><Link href="/result/awards-and-recognitions">Awards and recognition</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-5 lg:flex justify-end'>
                    <div className='flex flex-col justify-center gap-5'>
                        <h3 className='text-xl font-bold border-b-2 border-secondary pb-2 max-w-[30%]'>Legal</h3>
                        <ul className='text-md lg:text-lg text-textColorTwo space-y-1'>
                            <li className='hover:text-secondary'><Link href="/legal?tab=cookies">Cookie Policy</Link></li>
                            <li className='hover:text-secondary'><Link href="/legal?tab=privacy">Privacy Policy</Link></li>
                            <li className='hover:text-secondary'><Link href="/legal?tab=terms">Terms</Link></li>
                            <li className='hover:text-secondary'><Link href="/legal?tab=gdpr">GDPR Compliance</Link></li>
                            <li className='hover:text-secondary'><Link href="/legal?tab=us">US Compliance Statement</Link></li>
                            <li className='hover:text-secondary'><Link href="/legal?tab=faq">GDPR FAQ</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='space-y-5 flex justify-start lg:justify-end items-center lg:items-start'>
                    <div className='flex flex-col justify-center gap-5'>
                        <div>
                            <h3 className='text-xl font-bold border-b-2 border-secondary pb-2 max-w-[30%]'>Resources</h3>
                            <ul className='text-md lg:text-lg text-textColorTwo space-y-1'>
                                <li className='hover:text-secondary'><Link href="/resources/resource-hub">Resources hub</Link></li>
                                <li className='hover:text-secondary'><Link href="/resources/blog">Blog</Link></li>
                                <li className='hover:text-secondary'><Link href="/resources/resource-hub">20224 Whitepaper</Link></li>
                            </ul>
                        </div>
                        <ul className='text-md lg:text-lg text-textColorTwo space-y-1'>
                            <li className='hover:text-secondary'>
                                <Link href="/demo"><h3 className='text-xl font-bold border-b-2 border-secondary pb-2 max-w-[30%]'>Contact</h3></Link></li>
                            <li className='hover:text-secondary'>
                                <Link href="/pricing">
                                    <h3 className='text-xl font-bold border-b-2 border-secondary pb-2 max-w-[30%]'>Pricing</h3>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <div className='h-0.5 w-full bg-borderColor my-3'></div>
            </div>

            <div className='mb-3 flex flex-row justify-between items-center'>
                <div>
                    <Link href='/'><h1 className='text-3xl font-bold'>Prospectiv</h1></Link>
                </div>
                {/* social links */}
                <div className='flex justify-between items-center gap-2'>
                    <div className='bg-smallCard rounded-lg'>
                        <Link href='https://www.linkedin.com/company/prospectivdotio/'><Image className='w-10 max-w-12 p-2' src={LinkedInLogo} width={200} height={200} alt="LinkedIn" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;