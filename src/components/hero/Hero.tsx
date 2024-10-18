import Link from "next/link";
import HeroBg from '@/public/assets/herobg.svg';
import Image from "next/image";
import { motion } from 'framer-motion';
import PartnerOne from '@/public/assets/part.svg'
import PartnerTwo from '@/public/assets/part2.svg'
const Hero = () => {

    const companyDetails = [
        {
            logo: PartnerOne,
            name: 'Company Name',
        },
        {
            logo: PartnerTwo,
            name: 'Company Name',
        },
        {
            logo: PartnerTwo,
            name: 'Company Name',
        },
        {
            logo: 'https://i.ibb.co/Qcj7GDJ/66f7d720752b1858a6004c5b-Untitled-design-p-500.png',
            name: 'Company Name',
        },
    ]
    return (
        <div className="max-w-7xl mx-auto relative space-y-24 overflow-hidden xl:overflow-visible">
            <div className="w-full lg:w-3/4 text-center mx-auto space-y-10 px-4 lg:px-10 pt-32">
                <motion.h1
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl lg:text-6xl font-extrabold">Drive More Sales
                    <span className="text-transparent bg-clip-text bg-foreground lg:bg-gradient-to-l from-[#ED4A8D] to-[#5C55F6] bg-opacity-50"> Meetings with Your Ideal Customers.
                    </span>
                </motion.h1>


                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-2xl font-medium text-textColorTwo">Helping small-to-medium-sized service-based businesses book more sales meetings effortlessly, so you can focus on growing your business.</motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full md:w-3/4 lg:w-4/6 mx-auto flex flex-col md:flex-row justify-center items-center gap-3 space-y-3 md:space-y-0">
                    <div className="w-full flex rounded-full mx-auto bg-gradient-to-tr from-[#6f86ff] via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                        <Link href="" className="flex-1 font-bold text-lg bg-black px-10 lg:px-16 py-5 rounded-full">
                            Book a Demo
                        </Link>
                    </div>
                    <div className="w-full flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105">
                        <Link href="" className="flex-1 font-medium text-lg bg-[#302c3f]  px-10 lg:px-16 py-5 rounded-full">
                            See Our Pricing
                        </Link>
                    </div>
                </motion.div>

            </div>


            <div className="relative mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="w-full flex justify-center items-center">
                    <Image className="w-full max-w-[85%] mx-auto rounded-2xl animate-float z-10" src={HeroBg} width={500} height={500} alt="HeroBg" />
                </motion.div>
                {/* Gradient Blurs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute -top-60 -left-24 lg:-left-52 -z-10 animate-spin-slow transition-all">
                    <div className="bg-[#6f86ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                    <div className="bg-[#fe316f] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                    <div className="bg-[#d220ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:bottom-6 lg:-right-52 -z-10 animate-spin-slow transition-all">
                    <div className="bg-[#fe316f] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                    <div className="bg-[#1766ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                    <div className="bg-[#6923ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                </motion.div>

            </div>

            {/* clients section */}
            <div className="max-w-[80%] mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center gap-3">
                    {
                        companyDetails.map((item, index) => (
                            <div key={index}>
                                <Image src={item.logo} width={200} height={200} alt={item.name} />
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;