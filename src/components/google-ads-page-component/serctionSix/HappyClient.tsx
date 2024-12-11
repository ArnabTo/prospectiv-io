'use client';
import Rating from "@/components/rating/RatingComponent";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HappyClient = () => {
    const [visibleClients, setVisibleClients] = useState(3);
    const [seeAll, setSeeAll] = useState(false);
    const Clients = [
        {
            name: 'Mark Seemann',
            avatar: 'https://getuplead.com/wp-content/uploads/elementor/thumbs/mark-testimonial-qkt7jz5j2clnprwmh16hy8p6er0n2etofrcq4b42vm.jpg',
            says: 'We’ve worked with Getuplead for over 12 months and I have found their performance on our PPC campaigns to be excellent – far better than some other larger PPC agencies we’ve used in the past. Getuplead comes highly recommended.',
            position: 'CEO at StaffCircle',
            companyLogo: 'https://getuplead.com/wp-content/uploads/staffcircle-logo.webp',
            rating: 5
        },
        {
            name: 'Gabriela Fabrin Guerra',
            avatar: 'https://getuplead.com/wp-content/uploads/elementor/thumbs/gabriela-testimonial-qkt7ncepjz7nbh0hszlddw3n1geznd71wfid104aky.jpeg',
            says: 'Have recently completed a LinkedIn Ads campaign with Getuplead and have only good things to say. This was the most successful LinkedIn campaign we ever ran and working with them was just a pleasure. The process was easy, quick and their team was extremely responsive. Can’t wait to see what our next campaign together can […]',
            position: 'Marketing Manager at Bremmar',
            companyLogo: 'https://getuplead.com/wp-content/uploads/bremmar-logo.png',
            rating: 5
        },
        {
            name: 'Annie Slattery',
            avatar: 'https://getuplead.com/wp-content/uploads/elementor/thumbs/annie-testimonial-qkt7o2q6vc7ocjy9jayxbpgjo8t9mw3jc1rygr19qq.jpg',
            says: 'Skilled B2B marketing professionals with a primary focus on customer acquisition through PPC. Their skills and extensive experience helped us to significantly increase our number of qualified leads in a few months. I would highly recommend them.',
            position: 'CEO at ConX',
            companyLogo: 'https://getuplead.com/wp-content/uploads/conx-logo.svg',
            rating: 5
        },
        {
            name: 'Timo Van Bargen',
            avatar: 'https://getuplead.com/wp-content/uploads/elementor/thumbs/timo-testimonial-qkt7m0gxvfe0vcy4kwvecq74qsz9qswqpu8ljw3dea.jpg',
            says: 'Getuplead helped us to get started with an effective paid marketing strategy for our B2B platform leveraging different channels such as Google, Bing, Facebook, or LinkedIn. Since then they regularly adjusted the campaigns for optimal results, challenged our go-to-market approach, and trained our marketing team.',
            position: 'Managing Director at Covalo',
            companyLogo: 'https://getuplead.com/wp-content/uploads/covalo-2048x1152.png',
            rating: 5
        },
        {
            name: 'Yohabet Ladapo Tejeida',
            avatar: 'https://getuplead.com/wp-content/uploads/elementor/thumbs/yohabet-testimonial-qkt7in7rdss19nu98ygix2so43kx5ujd962yn735oy.jpg',
            says: 'I’ve worked with a lot of B2B and B2C agencies in the past, and I can tell you that I’ve never met a more proficient, involved, and responsible team than Getuplead.',
            position: 'Paid Advertising Manager at Sealed Air',
            companyLogo: 'https://getuplead.com/wp-content/uploads/sealed-air-logo.png',
            rating: 5
        },
    ];

    const handleShowAllClients = () => {
        setSeeAll(true);
        setVisibleClients(Clients.length);
    };

    const handleShowLessClients = () => {
        setSeeAll(false);
        setVisibleClients(3);
    };

    return (
        <section className="p-5 py-16">
            <div className="max-w-7xl mx-auto space-y-10">

                <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                    <div className="lg:w-1/2 text-center lg:text-start space-y-2">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold">
                            Happy Clients
                        </motion.h1>
                        <p className="text-lg text-textColorTwo">Getuplead is proud to have worked with some of the most successful companies in the world.</p>
                    </div>
                    <div
                        className="w-60 flex rounded-full mx-auto lg:ml-auto shadow-lg duration-300 transform group-hover:scale-105">
                        <Link href="pricing" className="flex-1 font-semibold text-center text-lg bg-buttonColor text-foreground hover:scale-95 transition-all duration-300 px-10 py-5 rounded-full hover:bg-buttonHoverColor">
                            See Our Pricing
                        </Link>
                    </div>
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5">
                    {Clients.slice(0, visibleClients).map((client, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            key={index} className="bg-background border border-borderColor rounded-2xl p-5 space-y-5 h-full flex flex-col justify-between">
                            <div className="flex justify-start items-center gap-5">
                                <Avatar className="w-16 h-16 border border-secondary">
                                    <AvatarImage src="https://images.pexels.com/photos/1161668/pexels-photo-1161668.jpeg?auto=compress&cs=tinysrgb&w=600" alt="clients_avatar" />
                                    <AvatarFallback>{client.name}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="text-xl">{client.name}</h4>
                                    <p className="text-lg text-secondary">{client.position}</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center gap-5">
                                <Image src={client.companyLogo} width={100} height={100} alt="company-logo" />
                                <Rating rating={client.rating} />
                            </div>
                            <div className="space-y-5 flex-grow">
                                <p className="text-lg text-textColorTwo">{client.says}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {
                    seeAll ?
                        <div onClick={handleShowLessClients}
                            className="w-60 flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105 cursor-pointer">
                            <div className="flex-1 font-semibold text-lg text-center bg-buttonColor text-foreground hover:scale-95 transition-all duration-300 px-10 xl:px-16 py-5 rounded-full hover:bg-buttonHoverColor">
                                Show less
                            </div>
                        </div>
                        :
                        <div onClick={handleShowAllClients}
                            className="w-60 flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105 cursor-pointer">
                            <div className="flex-1 font-semibold text-lg text-center bg-buttonColor text-foreground hover:scale-95 transition-all duration-300 px-10 xl:px-16 py-5 rounded-full hover:bg-buttonHoverColor">
                                Show All
                            </div>
                        </div>
                }
            </div>
        </section>
    );
};

export default HappyClient;