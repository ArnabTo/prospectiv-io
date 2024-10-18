import ImageOne from '@/public/assets/howitworksone.svg'
import ImageTwo from '@/public/assets/howitworkstwo.svg'
import ImageThree from '@/public/assets/howitworksthree.svg'
import { motion } from 'framer-motion';
import Image from 'next/image';
const HowItWork = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-24">
            <div className="max-w-[50%] mx-auto text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Cold Email Lead Generation</h1>
                <p className="text-textColorTwo">We have developed a market-leading six-step process allowing a hyper-targeted lead generation campaign to be launched for your business in as little as two weeks.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative'>
                <div className='bg-card rounded-2xl p-10 space-y-5'>
                    <Image src={ImageOne} className='max-w-20 rounded-lg' width={200} height={200} alt="image" />
                    <h3 className='text-3xl font-bold'>Identify Your ICP</h3>
                    <p className='text-textColorTwo'>You tell us about your target clients and what makes you unique.</p>
                </div>
                <div className='bg-card rounded-2xl p-10 space-y-5'>
                    <Image src={ImageOne} className='max-w-20 rounded-lg' width={200} height={200} alt="image" />
                    <h3 className='text-3xl font-bold'>Identify Your ICP</h3>
                    <p className='text-textColorTwo'>You tell us about your target clients and what makes you unique.</p>
                </div>
                <div className='bg-card rounded-2xl p-10 space-y-5'>
                    <Image src={ImageOne} className='max-w-20 rounded-lg' width={200} height={200} alt="image" />
                    <h3 className='text-3xl font-bold'>Identify Your ICP</h3>
                    <p className='text-textColorTwo'>You tell us about your target clients and what makes you unique.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="blur-[100px] w-full max-w-[35%] min-h-[90%] absolute left-[30%] top-20 -z-10 animate-spin-slow transition-all">
                    <div className="bg-[#6f86ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                    <div className="bg-[#fe316f] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                    <div className="bg-[#d220ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default HowItWork;