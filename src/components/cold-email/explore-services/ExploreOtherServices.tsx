import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import GoogleAds from '@/public/assets/googleads.png'
const ExploreOtherServices = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-8 p-5 '>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>Explore other services</h2>
               <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:max-w-[80%] justify-center items-center mx-auto'>
            <Link href='/services/google-ads' className='border border-borderColor rounded-2xl p-5 shadow-black hover:shadow-2xl'>
                <div className='flex flex-col gap-5'>
                    <div className='h-52'>
                        <Image
                            src={GoogleAds}
                            alt="image"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-secondary'>Google Ads</h3>
                        <p className='text-md lg:text-lg text-textColorTwo flex items-end'>Maximize your online reach with precision-targeted Google Ads campaigns that drive traffic, increase leads, and boost conversions.
                        </p>
                    </div>
                </div>
            </Link>
            <Link href='/services/google-ads' className='border border-borderColor rounded-2xl p-5 shadow-black hover:shadow-2xl'>
                <div className='flex flex-col gap-5'>
                    <div className='h-52'>
                        <Image
                            src={GoogleAds}
                            alt="image"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-secondary'>LinkedIn Ads</h3>
                        <p className='text-md lg:text-lg text-textColorTwo flex items-end'>Leverage LinkedIn Ads to connect with decision-makers, grow your network, and generate high-quality B2B leads for your business.
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
        </div>
    );
};

export default ExploreOtherServices;