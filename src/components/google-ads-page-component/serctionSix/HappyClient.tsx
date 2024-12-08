'use client';
import Rating from "@/components/rating/RatingComponent";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const HappyClient = () => {
    const [visibleClients, setVisibleClients] = useState(3);
    const [seeAll, setSeeAll] = useState(false);
    const Clients = [
        {
            name: 'David James',
            avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            says: 'Getuplead helped us to get started with an effective paid marketing strategy for our B2B platform leveraging different channels such as Google, Bing, Facebook, or LinkedIn. Since then they regularly adjusted the campaigns for optimal results, challenged our go-to-market approach, and trained our marketing team.',
            position: 'CEO of Sinfosis',
            companyLogo: 'https://getuplead.com/wp-content/uploads/sealed-air-logo.png',
            rating: 3
        },
        {
            name: 'Jimmy Doe',
            avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            says: 'We’ve worked with Getuplead for over 12 months and I have found their performance on our PPC campaigns to be excellent – far better than some other larger PPC agencies we’ve used in the past. Getuplead comes highly recommended.',
            position: 'CEO of Softonic',
            companyLogo: 'https://getuplead.com/wp-content/uploads/staffcircle-logo.webp',
            rating: 3
        },
        {
            name: 'John Doe',
            avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            says: 'Skilled B2B marketing professionals with a primary focus on customer acquisition through PPC. Their skills and extensive experience helped us to significantly increase our number of qualified leads in a few months. I would highly recommend them.',
            position: 'CEO of MobileTech',
            companyLogo: 'https://getuplead.com/wp-content/uploads/amenitiz-logo.webp',
            rating: 3
        },
        {
            name: 'John Doe',
            avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            says: 'Skilled B2B marketing professionals with a primary focus on customer acquisition through PPC. Their skills and extensive experience helped us to significantly increase our number of qualified leads in a few months. I would highly recommend them.',
            position: 'CEO of MobileTech',
            companyLogo: 'https://getuplead.com/wp-content/uploads/amenitiz-logo.webp',
            rating: 3
        },
        {
            name: 'John Doe',
            avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            says: 'Skilled B2B marketing professionals with a primary focus on customer acquisition through PPC. Their skills and extensive experience helped us to significantly increase our number of qualified leads in a few months. I would highly recommend them.',
            position: 'CEO of MobileTech',
            companyLogo: 'https://getuplead.com/wp-content/uploads/amenitiz-logo.webp',
            rating: 3
        },
        // Additional clients can be added here...
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
        <div className="p-5 py-16">
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-7">
                Happy Clients
            </motion.h1>
            <div className="max-w-7xl mx-auto space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {Clients.slice(0, visibleClients).map((client, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            key={index} className="space-y-5 h-full flex flex-col justify-between">
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
                            <div className="space-y-5 flex-grow">
                                <p className="text-lg text-textColorTwo">{client.says}</p>
                                <div className="flex justify-start items-center gap-5">
                                    <Image src={client.companyLogo} width={100} height={100} alt="company-logo" />
                                    <Rating rating={client.rating} />
                                </div>
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
        </div>
    );
};

export default HappyClient;