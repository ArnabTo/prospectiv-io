'use client';
import { MemberCardMarquee } from '@/components/member-card/MemberCard';
import Marquee from '@/components/ui/marquee';
import HeaderImage from '@/public/assets/campany-culture.jpg'
import Image from 'next/image';
import { title } from 'process';
import { motion } from 'framer-motion';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';
import '../../custom.css'
import { useRef } from 'react';
import Lottie from 'lottie-react';

const LifeAtProspectiv = () => {

    const lottieRefOne = useRef(null);
    const lottieRefTwo = useRef(null);
    const lottieRefThree = useRef(null);
    const lottieRefFour = useRef(null);

    const handleMouseEnter = (lottieRef: React.RefObject<any>) => {
        lottieRef?.current?.play(); // Play animation on hover
    };

    const handleMouseLeave = (lottieRef: React.RefObject<any>) => {
        lottieRef?.current?.stop(); // Stop the animation when hover ends
    };

    const membersDetails = [
        {
            name: 'John Doe',
            title: 'Founder & CEO',
            avatar: 'https://i.ibb.co/85M9yHq/albert-dera-ILip77-Sbm-OE-unsplash.jpg',
            says: 'Sopro doesnt feel like working. Its an environment where I learn, improve, and have fun.'
        },
        {
            name: 'John Doe',
            title: 'Founder & CEO',
            avatar: 'https://i.ibb.co/85M9yHq/albert-dera-ILip77-Sbm-OE-unsplash.jpg',
            says: 'Sopro doesnt feel like working. Its an environment where I learn, improve, and have fun.'
        },
        {
            name: 'John Doe',
            title: 'Founder & CEO',
            avatar: 'https://i.ibb.co/85M9yHq/albert-dera-ILip77-Sbm-OE-unsplash.jpg',
            says: 'Sopro doesnt feel like working. Its an environment where I learn, improve, and have fun.'
        },
        {
            name: 'John Doe',
            title: 'Founder & CEO',
            avatar: 'https://i.ibb.co/85M9yHq/albert-dera-ILip77-Sbm-OE-unsplash.jpg',
            says: 'Sopro doesnt feel like working. Its an environment where I learn, improve, and have fun.'
        },
    ]
    return (
        <div>
            <div className='relative'>
                <div
                    className='w-full h-[24rem] bg-no-repeat bg-cover bg-center bg-fixed opacity-20'
                    style={{
                        backgroundImage: `url(${HeaderImage.src})`,
                    }}
                >
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-3'>
                    <h1 className='text-6xl font-extrabold '>Life at <span className='text-secondary'>Prospectiv</span> </h1>
                    <p className='text-textColorTwo text-lg text-center font-bold mx-auto'>We're the people behind the prospects. For all the clever tech, what makes the Sopro service stand out is the people. As we like to tell our clients, we’re a team, not a tool.</p>
                    <div className='flex justify-center items-center'>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className='text-textColorTwo text-lg' href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-secondary text-lg'>Life at Prospectiv</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto py-24 space-y-24 overflow-hidde">
                <div className='px-5'>
                    <div className='lg:w-1/2 mx-auto text-center'>
                        <h3 className='text-4xl font-bold'>Meet Our People</h3>
                        <p className='text-textColorTwo text-lg'>Together we have an amazing collection of knowledge and expertise.
                            But it’s not all hard work: we strive to make Sopro a great place where we can grow, learn, achieve, and have fun.</p>
                    </div>
                    <div className='relative'>
                        <MemberCardMarquee />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 3.5 }}
                            viewport={{ once: true }}
                            className="blur-[100px] w-full max-w-[44%] min-h-[40%] absolute top-1/3 left-1/3 -z-10  transition-all">
                            <div className="bg-[#6f86ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                            <div className="bg-[#fe316f] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                            <div className="bg-[#d220ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                        </motion.div>
                    </div>
                </div>

                <div className='space-y-24 px-5'>
                    <div className='lg:w-1/2 mx-auto text-center'>
                        <h3 className='text-4xl font-bold'>Our Teams</h3>
                        <p className='text-textColorTwo text-lg'>These guys get their own page, but we love all our teams equally. If you want to know more about a specific team, whether you are thinking of applying to join one or just want to know more, take
                            a look at their dedicated pages below.</p>
                    </div>

                    <div className='space-y-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 relative'>
                            <Link href=''>
                                <div className='bg-card border border-borderColor p-5 lg:p-7 rounded-3xl space-y-3 hover:shadow-2xl transition-all duration-300 '>
                                    <Image className='w-full rounded-3xl' src='https://sopro.io/wp-content/uploads/2023/08/thumbnail_tech.png' width={300} height={300} alt='' />
                                    <div>
                                        <h2 className='text-xl font-bold'>John Doe</h2>
                                        <p className='text-lg text-textColorTwo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sed tempore veniam quidem nostrum modi earum alias ea veritatis, aut cupiditate laboriosam ipsam omnis autem neque perferendis distinctio dignissimos repellendus!</p>
                                    </div>
                                </div>
                            </Link>

                            <Link href=''>
                                <div className='bg-card border border-borderColor p-5 lg:p-7 rounded-3xl space-y-3 hover:shadow-2xl transition-all duration-300'>
                                    <Image className='w-full rounded-3xl' src='https://sopro.io/wp-content/uploads/2023/08/thumbnail_tech.png' width={300} height={300} alt='' />
                                    <div>
                                        <h2 className='text-xl font-bold'>John Doe</h2>
                                        <p className='text-lg text-textColorTwo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sed tempore veniam quidem nostrum modi earum alias ea veritatis, aut cupiditate laboriosam ipsam omnis autem neque perferendis distinctio dignissimos repellendus!</p>
                                    </div>
                                </div>
                            </Link>

                            <Link href=''>
                                <div className='bg-card border border-borderColor p-5 lg:p-7 rounded-3xl space-y-3 hover:shadow-2xl transition-all duration-300'>
                                    <Image className='w-full rounded-3xl' src='https://sopro.io/wp-content/uploads/2023/08/thumbnail_tech.png' width={300} height={300} alt='' />
                                    <div>
                                        <h2 className='text-xl font-bold'>John Doe</h2>
                                        <p className='text-lg text-textColorTwo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sed tempore veniam quidem nostrum modi earum alias ea veritatis, aut cupiditate laboriosam ipsam omnis autem neque perferendis distinctio dignissimos repellendus!</p>
                                    </div>
                                </div>
                            </Link>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}
                                className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:left-1/4 -z-10 transition-all">
                                <div className="bg-[#6923ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                <div className="bg-[#1766ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                <div className="bg-[#6923ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                            </motion.div>
                        </div>

                        <div className="w-60 lg:w-full max-w-64 flex rounded-full mx-auto bg-gradient-to-tr from-[#6f86ff] via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                            <Link href="" className="flex-1 font-bold text-center text-lg bg-black px-10 xl:px-16 py-5 rounded-full hover:scale-95 transition-all duration-300">
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <div className='space-y-5'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>#lifeatprospectiv</h1>

                    <div className="p-5 sm:p-8">
                        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                            <img className='rounded-xl' src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080" />
                            <img className='rounded-xl' src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080" />
                            <img className='rounded-xl' src="https://images.unsplash.com/photo-1668491195456-9341d9cf3977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXQlMjB3aGl0ZXxlbnwwfDF8fHwxNzIxODIyMzU3fDA&ixlib=rb-4.0.3&q=80&w=1080" />
                            <img className='rounded-xl' src="https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
                            <img className='rounded-xl' src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080" />
                            <img className='rounded-xl' src="https://images.unsplash.com/photo-1475518112798-86ae358241eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
                            <img className='rounded-xl' src="https://images.unsplash.com/photo-1498100152307-ce63fd6c5424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
                        </div>
                    </div>


                    <div className="w-60 lg:w-full max-w-64 flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105">
                        <Link href="" className="flex-1 font-semibold text-lg bg-buttonColor text-textColorOne text-center hover:scale-95 transition-all duration-300 px-10 xl:px-12 py-5 rounded-full hover:bg-buttonHoverColor">
                            See Our Pricing
                        </Link>
                    </div>
                </div> */}

                <div className='flex flex-col lg:flex-row flex-start justify-between gap-5 lg:gap-10 p-5 space-y-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className='md:max-w-lg lg:max-w-[300px] xl:max-w-md space-y-5 mx-auto'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start'>Benefits of Prospectiv</h1>
                        <p className='text-lg text-textColorTwo text-center lg:text-start'>
                            With offices spread across countries and continents, the details of our benefits can change based on what is available locally - and while some of the finer details may differ, the spirit of our perks remains the same wherever you’re based.
                        </p>
                        <div className="w-60 lg:w-full md:max-w-60 mx-auto lg:mx-0 flex rounded-full bg-gradient-to-tr from-[#6f86ff] via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group">
                            <Link href="#" className="flex-1 font-bold text-xl text-center bg-black px-5 py-4 rounded-full group-hover:scale-95 transition-all duration-300">
                                How does it work ?
                            </Link>
                        </div>
                    </motion.div>

                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                            <div
                                className='bg-card rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                                onMouseEnter={() => handleMouseEnter(lottieRefOne)}
                                onMouseLeave={() => handleMouseLeave(lottieRefOne)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefOne}
                                        animationData={require('@/public/assets/Advantage.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <h3 className='text-3xl font-bold group-hover:text-textColorOne group-hover:font-extrabold transition-all duration-1000'>
                                    Career Progression Plan
                                </h3>
                                <p className='text-textColorTwo text-lg group-hover:text-textColorOne group-hover:font-medium transition-all duration-1000'>
                                    We offer a well-structured career progression path supported by regular 360-degree feedback. Everyone has a clear path, so you’ll continually learn and grow as a professional.
                                </p>
                            </div>

                            <div
                                className='bg-card rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                                onMouseEnter={() => handleMouseEnter(lottieRefTwo)}
                                onMouseLeave={() => handleMouseLeave(lottieRefTwo)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefTwo}
                                        animationData={require('@/public/assets/medicine box.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <h3 className='text-3xl font-bold group-hover:text-textColorOne group-hover:font-extrabold transition-all duration-1000'>
                                    Private Healthcare Insurance
                                </h3>
                                <p className='text-textColorTwo text-lg group-hover:text-textColorOne group-hover:font-medium transition-all duration-1000'>
                                    We look out for your health with a high level of private medical care.
                                </p>
                            </div>

                            <div
                                className='bg-card rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                                onMouseEnter={() => handleMouseEnter(lottieRefThree)}
                                onMouseLeave={() => handleMouseLeave(lottieRefThree)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefThree}
                                        animationData={require('@/public/assets/share.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <h3 className='text-3xl font-bold group-hover:text-textColorOne group-hover:font-extrabold transition-all duration-1000'>
                                    Company Profit Sharing
                                </h3>
                                <p className='text-textColorTwo text-lg group-hover:text-textColorOne group-hover:font-medium transition-all duration-1000'>
                                    We believe in sharing in our success, so we reward your loyalty using 10% of our yearly profits.
                                </p>
                            </div>

                            <div
                                className='bg-card rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                                onMouseEnter={() => handleMouseEnter(lottieRefFour)}
                                onMouseLeave={() => handleMouseLeave(lottieRefFour)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefFour}
                                        animationData={require('@/public/assets/calendar V3.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <h3 className='text-3xl font-bold group-hover:text-textColorOne group-hover:font-extrabold transition-all duration-1000'>
                                    Extended Annual Leave
                                </h3>
                                <p className='text-textColorTwo text-lg group-hover:text-textColorOne group-hover:font-medium transition-all duration-1000'>
                                    We provide additional annual leave allowance above the standard paid leave determined by law.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='space-y-10 px-5'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start'>Culture and perks</h1>

                    <div className='space-y-10'>
                        <div className='relative grid grid-cols-1 md:grid-cols-2 gap-4'>

                            <div className='bg-card border border-borderColor rounded-2xl p-5 lg:p-7 space-y-5'
                                onMouseEnter={() => handleMouseEnter(lottieRefFour)}
                                onMouseLeave={() => handleMouseLeave(lottieRefFour)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefFour}
                                        animationData={require('@/public/assets/calendar V3.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <div className='space-y-3'>
                                    <h3 className='text-3xl font-bold'>Learning and development</h3>
                                    <p className='text-textColorTwo text-lg'>We’ve built our own learning platform to aid your personal and professional growth. Additional support comes from mentorship, external training and certification.</p>
                                </div>
                            </div>

                            <div className='bg-card border border-borderColor rounded-2xl p-5 lg:p-7 space-y-5'
                                onMouseEnter={() => handleMouseEnter(lottieRefFour)}
                                onMouseLeave={() => handleMouseLeave(lottieRefFour)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefFour}
                                        animationData={require('@/public/assets/calendar V3.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <div className='space-y-3'>
                                    <h3 className='text-3xl font-bold'>Hybrid working</h3>
                                    <p className='text-textColorTwo text-lg'>
                                        For face-to-face time with your colleagues, work from our offices two days a week: centrally located and packed with perks and treats. And for those days when you need some quiet time to fully focus, work from home.
                                    </p>
                                </div>
                            </div>

                            <div className='bg-card border border-borderColor rounded-2xl p-5 lg:p-7 space-y-5'
                                onMouseEnter={() => handleMouseEnter(lottieRefFour)}
                                onMouseLeave={() => handleMouseLeave(lottieRefFour)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefFour}
                                        animationData={require('@/public/assets/calendar V3.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <div className='space-y-3'>
                                    <h3 className='text-3xl font-bold'>Wellbeing package</h3>
                                    <p className='text-textColorTwo text-lg'>
                                        Our wellbeing budget is adapted to the needs of our people: regular sports, social activities and lots of healthy snacks.
                                    </p>
                                </div>
                            </div>

                            <div className='bg-card border border-borderColor rounded-2xl p-5 lg:p-7 space-y-5'
                                onMouseEnter={() => handleMouseEnter(lottieRefFour)}
                                onMouseLeave={() => handleMouseLeave(lottieRefFour)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefFour}
                                        animationData={require('@/public/assets/calendar V3.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <div className='space-y-3'>
                                    <h3 className='text-3xl font-bold'>Your work matters</h3>
                                    <p className='text-textColorTwo text-lg'>
                                        We have an open-door policy and value your opinion. Ideas are heard and genuinely put into practice.
                                    </p>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                                viewport={{ once: true }}
                                className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute -top-60 -left-24 lg:-left-52 -z-10 transition-all">
                                <div className="bg-[#6f86ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                <div className="bg-[#fe316f] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                <div className="bg-[#d220ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                            </motion.div>
                            {/* <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 1 }}
                                viewport={{ once: true }}
                                className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:bottom-12 lg:-right-10 -z-10 transition-all">
                                <div className="bg-[#6923ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                <div className="bg-[#1766ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                <div className="bg-[#6923ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                            </motion.div> */}
                        </div>


                        <div className="w-60 lg:w-full max-w-72 flex mx-auto rounded-full bg-gradient-to-tr from-[#6f86ff] via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                            <Link href="" className="flex-1 font-bold text-lg text-center bg-black py-5 rounded-full hover:scale-95 transition-all duration-300">
                                See open opportunities
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='space-y-24 p-5'>
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className='lg:w-5/6 mx-auto text-center space-y-5'>
                            <h3 className='text-4xl font-bold'>Perspectiv values</h3>
                            <p className='text-textColorTwo text-lg'>
                                Our values permeate Sopro through our behaviours, both as people and across our business. They influence the way we hire new people, develop employees, review performance, evaluate reward and achieve promotion.
                            </p>
                        </motion.div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                               <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5 lg:gap-10'
                                    onMouseEnter={() => handleMouseEnter(lottieRefFour)}
                                    onMouseLeave={() => handleMouseLeave(lottieRefFour)}
                                    >
                                    <div className='w-16 lg:w-1/2 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                        <Lottie
                                            lottieRef={lottieRefFour}
                                            animationData={require('@/public/assets/calendar V3.json')}
                                            loop={false} // Play only once
                                            autoplay={false} // Disable autoplay
                                        />
                                    </div>
                                    <div className='space-y-3 text-center lg:text-start'>
                                        <h3 className='text-2xl font-bold text-secondary'>We invest</h3>
                                        <p className='text-textColorTwo text-lg'>We invest in the long-term success of our business, our products and services. We invest in our exceptional people, in personal development, training and career progression. We invest in high performing facilities and work environments for our teams to thrive in.</p>
                                    </div>
                                </div>

                                   <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5 lg:gap-10'
                                    onMouseEnter={() => handleMouseEnter(lottieRefFour)}
                                    onMouseLeave={() => handleMouseLeave(lottieRefFour)}
                                    >
                                    <div className='w-16 lg:w-1/2 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                        <Lottie
                                            lottieRef={lottieRefFour}
                                            animationData={require('@/public/assets/calendar V3.json')}
                                            loop={false} // Play only once
                                            autoplay={false} // Disable autoplay
                                        />
                                    </div>
                                    <div className='space-y-3 text-center lg:text-start'>
                                        <h3 className='text-2xl font-bold text-secondary'>We are ambitious</h3>
                                        <p className='text-textColorTwo text-lg'>
                                        We are ambitious and have an entrepreneurial spirit that is focused, energising and relentless. We set ambitious goals and clear paths to success. We value career progression and encourage passionate and imaginative collaboration between like-minded and driven professionals.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5 lg:gap-10'
                                    onMouseEnter={() => handleMouseEnter(lottieRefFour)}
                                    onMouseLeave={() => handleMouseLeave(lottieRefFour)}
                                    >
                                    <div className='w-16 lg:w-1/2 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                        <Lottie
                                            lottieRef={lottieRefFour}
                                            animationData={require('@/public/assets/calendar V3.json')}
                                            loop={false} // Play only once
                                            autoplay={false} // Disable autoplay
                                        />
                                    </div>
                                        <div className='space-y-3 text-center lg:text-start'>
                                        <h3 className='text-2xl font-bold text-secondary'>We are people</h3>
                                        <p className='text-textColorTwo text-lg'>
                                        We are people and we are proud of our exceptional teams and their identities. We are supportive and promote each other’s success and we give back to our communities through impactful initiatives. We encourage teamwork, inclusivity and respect. Our people are empowered.
                                        </p>
                                    </div>
                                </div>

                                 <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5 lg:gap-10'
                                    onMouseEnter={() => handleMouseEnter(lottieRefFour)}
                                    onMouseLeave={() => handleMouseLeave(lottieRefFour)}
                                    >
                                    <div className='w-16 lg:w-1/2 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                        <Lottie
                                            lottieRef={lottieRefFour}
                                            animationData={require('@/public/assets/calendar V3.json')}
                                            loop={false} // Play only once
                                            autoplay={false} // Disable autoplay
                                        />
                                    </div>
                                    <div className='space-y-3 text-center lg:text-start'>
                                        <h3 className='text-2xl font-bold text-secondary'>We are open</h3>
                                        <p className='text-textColorTwo text-lg'>
                                        We are open and transparent in everything we do. We are clear about who we are, what we do and how we do it. We encourage an open-door approach to ensure every team member is valued, heard and supported.
                                        </p>
                                    </div>
                                </div>
                           
                        </div>
                    </div>


                    <div>
                        
                    </div>
            </div>

        </div>
    );
};

export default LifeAtProspectiv;