import { motion } from 'framer-motion';
import PartnerOne from '@/public/assets/part.svg'
import PartnerTwo from '@/public/assets/part2.svg'
import Marquee from "../ui/marquee";
import Image from 'next/image';

const Partners = () => {

    const partnerDetails = [
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
        <div className="max-w-7xl mx-auto py-24">
            <div className="relative flex w-full flex-col items-center justify-center gap-5 rounded-full">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {
                        partnerDetails.map((partner, index) => (
                            <div key={index}>
                                <Image src={partner.logo} width={200} height={200} alt={partner.name} />
                            </div>
                        ))
                    }
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#13111A]"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#13111A]"></div>
            </div>
        </div>
    );
};

export default Partners;