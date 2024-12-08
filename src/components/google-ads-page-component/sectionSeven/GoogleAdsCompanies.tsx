'use client';
import { motion } from "framer-motion";
import Image from 'next/image';

const GoogleAdsCompanies = () => {
    const companyLogos = [
        'https://getuplead.com/wp-content/uploads/Siemens-Logo-2048x1152.png',
        'https://getuplead.com/wp-content/uploads/staffcircle-2048x1152.png',
        'https://getuplead.com/wp-content/uploads/flexperto-1-2048x1152.png',
        'https://getuplead.com/wp-content/uploads/signaturit-1-2048x1152.png',
        'https://getuplead.com/wp-content/uploads/conx-2048x1152.png',
        'https://getuplead.com/wp-content/uploads/amenitiz-1-2048x1152.png',
        'https://getuplead.com/wp-content/uploads/software-ag-2048x1152.png',
        'https://getuplead.com/wp-content/uploads/cegid-2048x1152.png',
        'https://getuplead.com/wp-content/uploads/talentsoft2-2048x1152.png'
        // Add more logos here...
    ];

    return (
        <div className="p-5 py-16 relative overflow-hidden lg:overflow-visible">
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2">
                Your are in good hands
            </motion.h1>
            <div className="relative bg-[#ffffff1e] max-w-[50%] mx-auto p-5 lg:p-10 rounded-3xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {companyLogos.map((logo, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        key={index} className="h-full">
                        <Image width={500} height={500} src={logo} alt={`company-logo-${index}`}
                            className="w-40 h-40 object-contain" />
                    </motion.div>
                ))}

                <div
                    className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute -top-60 -left-24 lg:-left-52 -z-10 animate-spin-slow transition-all">
                    <div className="bg-gradientColorOne absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                    <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                    <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                </div>
                <div
                        className="opacity-[0.8] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:bottom-12 lg:-right-10 -z-10 transition-all">
                        <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                        <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                        <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                    </div>
            </div>
        </div>
    );
};

export default GoogleAdsCompanies;