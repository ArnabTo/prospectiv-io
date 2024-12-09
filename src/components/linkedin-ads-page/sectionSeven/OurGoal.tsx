'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import ImageContent from '@/public/assets/whatyouwillget.png'
import { Verified } from "lucide-react";

const OurGoal = () => {
    return (
        <section className="p-5">
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-5">
              Our goal: Generate more clients for your B2B company
            </motion.h1>
            <div className="max-w-7xl mx-auto flex items-center ">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="lg:max-w-[60%]">
                    <p className="text-md lg:text-lg text-textColorTwo mb-5">One of the key aims of our LinkedIn advertising agency is to drive traffic and therefore increase your sales. We also want to make sure that your business is getting a strong return on investment from your LinkedIn ads. There are a few ways we do this:</p>

                    <ul className="text-md lg:text-lg text-textColorTwo space-y-4">
                        <li className="flex justify-start gap-3 items-center"><Verified className="text-secondary" fill="white" /> Increasing relevant traffic</li>
                        <li className="flex justify-start gap-3 items-center"><Verified className="text-secondary" fill="white" /> Increasing qualified leads</li>
                        <li className="flex justify-start gap-3 items-center"><Verified className="text-secondary" fill="white" /> Increasing reach</li>
                        <li className="flex justify-start gap-3 items-center"><Verified className="text-secondary" fill="white" /> Increasing awareness of your brand</li>
                        <li className="flex justify-start gap-3 items-center"><Verified className="text-secondary" fill="white" /> Boosting your credibility and reputation within your industry</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default OurGoal;