'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';



const GoogleFaq = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto p-5'>
                <p className='font-semibold text-secondary text-center mx-auto'>FAQs</p>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-7">
                    Frequently asked questions (FAQs)
                </motion.h1>
                <Accordion type="single" collapsible>
                    <AccordionItem value="faq-1" className='bg-card p-3'>
                        <AccordionTrigger className="text-xl font-semibold hover:text-secondary">How does Google Ads work?</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                            <p className="text-base font-light text-textColorTwo">Google Ads is PPC (pay-per-click) advertising, which is a popular type of online advertising. The PPC advertising process involves instructing a host (such as Google or Amazon) to display relevant advertisements on search engine results and product pages. You are charged a cost-per-click (CPC) fee when a user clicks on your ad. With advertising platforms, businesses can set campaign budgets for everything, including cost per click, daily spending, weekly spending, and lifetime spending, to keep spending under control. PPC advertising is designed to get users to click on your ad – and then take another desirable action, such as making a purchase, subscribing to a blog, or contacting your business.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-2" className='bg-card p-3'>
                        <AccordionTrigger className="text-xl font-semibold hover:text-secondary">Do you require any contracts?</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                            <p className="text-base font-light text-textColorTwo">No, we don’t need a long-term contract. We work with a month-to-month agreement and are enough confident about our results and ethics to get you on a long term partnership with us. ​Our SaaS PPC Agency also dedicated to transparency – which is why we always share our data, account set ups, strategies and tactics with our clients.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-3" className='bg-card p-3'>
                        <AccordionTrigger className="text-xl font-semibold hover:text-secondary">Why work with us?</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                            <p className="text-base font-light text-textColorTwo">As a Global B2B Google Ads agency, there are a few things that make us stand out: </p>
                            <ul className="custom-marker-legal list-disc space-y-5 ml-5 md:ml-10">
                                <li className="text-base font-light text-textColorTwo">We have global experience, operating with clients in North America, Europe and Oceania.</li>
                                <li className="text-base font-light text-textColorTwo">Getting results and being transparent about them are our top priorities.</li>
                                <li className="text-base font-light text-textColorTwo">From keyword to ROI, our campaigns are driven and optimized with full funnel visibility.</li>
                                <li className="text-base font-light text-textColorTwo">Based on our testing and learning, we provide you with weekly or monthly insights, recommendations, and future initiatives that meet your needs.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-4" className='bg-card p-3'>
                        <AccordionTrigger className="text-xl font-semibold hover:text-secondary">Where do you serve your clients?</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                            <p className="text-base font-light text-textColorTwo">We serve clients all around the world. Currently, most of our clients are from North-America, Europe and Australia.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-5" className='bg-card p-3'>
                        <AccordionTrigger className="text-xl font-semibold hover:text-secondary">What Google Ads services do you offer?</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                            <p className="text-base font-light text-textColorTwo">Depending on the pricing plan chosen, our services include:</p>
                            <ul className="custom-marker-legal list-disc space-y-5 ml-5 md:ml-10">
                                <li className="text-base font-light text-textColorTwo">Conversion tracking implementation</li>
                                <li className="text-base font-light text-textColorTwo">Competitors Analysis</li>
                                <li className="text-base font-light text-textColorTwo">Strategy guidance</li>
                                <li className="text-base font-light text-textColorTwo">Keywords and audience research</li>
                                <li className="text-base font-light text-textColorTwo">Campaigns set up and optimization</li>
                                <li className="text-base font-light text-textColorTwo">Ads copywriting</li>
                                <li className="text-base font-light text-textColorTwo">Remarketing and ABM campaigns</li>
                                <li className="text-base font-light text-textColorTwo">Budget optimization and management</li>
                                <li className="text-base font-light text-textColorTwo">Customized report and real time dashboard</li>
                                <li className="text-base font-light text-textColorTwo">CRM integrations</li>
                                <li className="text-base font-light text-textColorTwo">Landing pages mockup</li>
                            </ul>
                            <p className="text-base font-light text-textColorTwo">We also have reliable partners who can help with your SEO, content marketing, and email marketing needs.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-6" className='bg-card p-3'>
                        <AccordionTrigger className="text-xl font-semibold hover:text-secondary">What industries do you work with?</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                            <p className="text-base font-light text-textColorTwo">We work with various industries, including but not limited to technology, finance, healthcare, e-commerce, and more.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-7" className='bg-card p-3'>
                        <AccordionTrigger className="text-xl font-semibold hover:text-secondary">How much do your Google Ads services cost?</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                            <p className="text-base font-light text-textColorTwo">Our pricing varies based on the services you require and the scope of your project. Please contact us for a custom quote.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default GoogleFaq;