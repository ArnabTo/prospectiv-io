import Link from 'next/link';
import React from 'react';
import LinkedInLogo from '@/public/assets/icons8-linkedin-480.png'
import InstagramLogo from '@/public/assets//icons8-instagram-480.png'
import FacebookLogo from '@/public/assets/icons8-facebook-480.png'
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className='px-10 lg:px-32 mx-auto pt-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
                <div className='space-y-5'>
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
                </div>


                <div className='space-y-5'>
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-xl font-bold border-b-2 border-secondary pb-2 max-w-[30%]'>Results</h3>
                        <ul className='text-md lg:text-lg text-textColorTwo space-y-1'>
                            <li className='hover:text-secondary'><Link href="#">Success stories</Link></li>
                            <li className='hover:text-secondary'><Link href="#">Awards and recognition</Link></li>
                            <li className='hover:text-secondary'><Link href="#">Enterprise businesses</Link></li>
                            <li className='hover:text-secondary'><Link href="#">Live stats - all campaigns</Link></li>
                            <li className='hover:text-secondary'><Link href="#">Interactive insights</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='space-y-5'>
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-xl font-bold border-b-2 border-secondary pb-2 max-w-[30%]'>Company</h3>
                        <ul className='text-md lg:text-lg text-textColorTwo space-y-1'>
                            <li className='hover:text-secondary'><Link href="#">About us</Link></li>
                            <li className='hover:text-secondary'><Link href="#">Life at Prospectiv</Link></li>
                            <li className='hover:text-secondary'><Link href="#">Careers</Link></li>
                            <li className='hover:text-secondary'><Link href="#">The Prospectiv Group</Link></li>
                            <li className='hover:text-secondary'><Link href="#">Prospectiv sustainable prospecting</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='space-y-5'>
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-xl font-bold border-b-2 border-secondary pb-2 max-w-[30%]'>Legal</h3>
                        <ul className='text-md lg:text-lg text-textColorTwo space-y-1'>
                            <li className='hover:text-secondary'><Link href="#">Cookie Policy</Link></li>
                            <li className='hover:text-secondary'><Link href="#">Privacy Policy</Link></li>
                            <li className='hover:text-secondary'><Link href="#">Terms</Link></li>
                            <li className='hover:text-secondary'><Link href="#">GDPR Compliance</Link></li>
                            <li className='hover:text-secondary'><Link href="#">US Compliance Statement</Link></li>
                            <li className='hover:text-secondary'><Link href="#">GDPR FAQ</Link></li>
                            <li className='hover:text-secondary'><Link href="#">Change cookie settings</Link></li>
                            <li className='hover:text-secondary'><Link href="#">Do Not Sell My Personal Information</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='space-y-5'>
                    <div className='flex flex-col gap-5'>
                        {/* <div className="w-full flex rounded-full mx-auto bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                            <Link href="#" className="w-full font-bold text-lg text-center bg-black px-10 lg:px-16 py-5 rounded-full">
                                Book a Demo
                            </Link>
                        </div> */}
                        <div>
                            <h3 className='text-xl font-bold border-b-2 border-secondary pb-2 max-w-[30%]'>Resources</h3>
                            <ul className='text-md lg:text-lg text-textColorTwo space-y-1'>
                                <li className='hover:text-secondary'><Link href="#">Resources hub</Link></li>
                                <li className='hover:text-secondary'><Link href="#">Blog</Link></li>
                                <li className='hover:text-secondary'><Link href="#">20224 Whitepaper</Link></li>
                                <li className='hover:text-secondary'><Link href="#">Email awesome checker</Link></li>
                                <li className='hover:text-secondary'><Link href="#">Market mapper</Link></li>
                            </ul>
                        </div>
                        <ul className='text-md lg:text-lg text-textColorTwo space-y-1'>
                            <li className='hover:text-secondary'>
                                <Link href="#"><h3 className='text-xl font-bold border-b-2 border-secondary pb-2 max-w-[30%]'>Contact</h3></Link></li>
                            <li className='hover:text-secondary'><Link href="#">
                                <h3 className='text-xl font-bold border-b-2 border-secondary pb-2 max-w-[30%]'>Pricing</h3>
                            </Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <div className='h-0.5 w-full bg-borderColor my-5'></div>
            </div>

            <div className='mb-5 flex flex-col md:flex-row justify-between items-center space-y-4'>
                <div>
                    <h1 className='text-3xl font-bold'>Prospectiv</h1>
                </div>
                {/* social links */}
                <div className='flex justify-between items-center gap-2'>
                    <div className='bg-smallCard rounded-lg'>
                   <Link href='#'><Image className='max-w-12 p-2' src={LinkedInLogo} width={200} height={200} alt="LinkedIn" /></Link>
                    </div>
                    <div className='bg-smallCard rounded-lg'>
                       <Link href='#'><Image className='max-w-12 p-2' src={InstagramLogo} width={200} height={200} alt="LinkedIn" /></Link>
                    </div>
                    <div className='bg-smallCard rounded-lg'>
                     <Link href='#'><Image className='max-w-12 p-2' src={FacebookLogo} width={200} height={200} alt="LinkedIn" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;