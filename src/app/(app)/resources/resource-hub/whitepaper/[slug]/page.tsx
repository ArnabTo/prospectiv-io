'use client'
import { Guide } from "@/types/types";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from '@/components/rich-text-component/RichTextComponent';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import Link from "next/link";
import { Download, Loader2 } from "lucide-react";
import '../../../../../custom.css'
import GuideSection from "@/components/guide/GuideSection";
import WhitePaperSection from "@/components/whitepapers/WhitepaperSection";
import { toast } from "sonner";
const WhitepaperDetails = () => {

    const params = useParams();
    const router = useRouter();
    const [whitepaper, setWhitepaper] = useState<Guide | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchGuide = useCallback(async () => {
        setIsLoading(true);
        try {
            const getGuide = await axios.get(`/api/getwhitepaperwithslug/${params.slug}`);
            setWhitepaper(getGuide.data)
        } catch (error) {
            console.log(error, 'error on fetch webinar')
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchGuide()
    }, [fetchGuide])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        if (!email || !name) {
            toast.error('Please enter email and name')
        }
        const data = {
            email,
            name
        }
        try {
            const response = await axios.post('/api/subscribe', data);
            if (response.statusText === 'OK') {
                toast.success('Thank you!')
                setTimeout(() => {
                    router.push(`${whitepaper?.download_link}`)
                }, 2000)
            }
        } catch (error) {
            toast.error('Something went wrong')
        }
    }
    return (
        <div className="p-4 py-24">
            <div className="max-w-7xl mx-auto space-y-10">
                <div className="flex flex-col lg:flex-row gap-5">
                    {
                        isLoading ?
                            <div className="w-full flex justify-center items-center h-screen"><Loader2 className="animate-spin" size={40} /></div>
                            :
                            <div className="space-y-7">
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="space-y-3">
                                    <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>{whitepaper?.title}</h3>
                                    <div className="overflow-hidden rounded-lg w-full md:w-[500px]">
                                        {
                                            whitepaper?.thumbnail?.asset?.url ?
                                                <Image
                                                    className="w-full h-auto object-contain rounded-lg hover:scale-110 transition-all duration-300"
                                                    src={whitepaper?.thumbnail?.asset?.url}
                                                    width={500}
                                                    height={500}
                                                    alt="whitepaper_thumbnail"
                                                />
                                                :
                                                <div className="flex justify-center items-center"><Loader2 className="animate-spin" size={40} /></div>
                                        }
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <p><PortableText value={whitepaper?.body} components={RichTextComponent} /></p>
                                </motion.div>
                            </div>
                    }

                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="triangle-guide-top absolute"></div>
                        <Card className=" md:w-[350px] mx-auto border border-borderColor pt-7 relative rounded-3xl">
                            <CardHeader className="flex justify-center items-center gap-4">
                                <h1 className="text-3xl md:text-4xl font-bold">Prospectiv</h1>
                                <CardTitle className="text-secondary">Download now</CardTitle>
                                <CardDescription className="text-center text-lg text-textColorTwo">Download this guide now and improve your prospecting today.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <div className="grid w-full items-center gap-4 mb-5">
                                        <div className="flex flex-col space-y-1.5">
                                            <label htmlFor="name">Name</label>
                                            <Input className="outline-none border border-borderColor bg-background" type="text" id="name" placeholder="Name" required />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <label htmlFor="name">Email</label>
                                            <Input className="outline-none border border-borderColor bg-background" type="email" id="email" placeholder="Email" required />
                                        </div>
                                        <p className="text-lg text-textColorTwo">By clicking submit, you agree to the <Link className="text-gradientColorOne" href=''>Privacy Policy</Link></p>
                                    </div>
                                    <button type="submit" className="flex mx-auto">
                                        <div className="w-60 flex rounded-full mx-auto bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                                            <div className="flex-1 flex items-center justify-center gap-3 font-bold text-lg text-center bg-black py-4 rounded-full hover:scale-95 transition-all duration-300">
                                                Get your guide <Download size={20} />
                                            </div>
                                        </div>
                                    </button>
                                </form>
                            </CardContent>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 1 }}
                                viewport={{ once: true }}
                                className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:bottom-12 lg:-right-10 -z-10 transition-all">
                                <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                            </motion.div>
                            <div className="triangle-guide-bottom absolute bottom-0 right-0 z-0"></div>
                        </Card>
                    </motion.div>
                </div>

                <WhitePaperSection />
            </div>
        </div>
    );
};

export default WhitepaperDetails;