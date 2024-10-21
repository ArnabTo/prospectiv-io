'use client';
import { MemberCardMarquee } from '@/components/member-card/MemberCard';
import Marquee from '@/components/ui/marquee';
import HeaderImage from '@/public/assets/campany-culture.jpg'
import Image from 'next/image';
import { title } from 'process';
import { motion } from 'framer-motion';
const LifeAtProspectiv = () => {

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
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-24 space-y-24 ">
                <div>
                    <div className='w-1/2 mx-auto text-center'>
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

                <div>
                    <div className='w-1/2 mx-auto text-center'>
                        <h3 className='text-4xl font-bold'>Our Teams</h3>
                        <p className='text-textColorTwo text-lg'>These guys get their own page, but we love all our teams equally. If you want to know more about a specific team, whether you are thinking of applying to join one or just want to know more, take
                            a look at their dedicated pages below.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LifeAtProspectiv;