'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';


const LinkedinFaq = () => {
    return (
        <section className="max-w-7xl mx-auto p-5">
        <p className="font-semibold text-secondary text-center mx-auto text-lg">FAQs</p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-7"
        >
          Frequently asked questions (FAQs)
        </motion.h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="faq-1" className="bg-card p-3">
            <AccordionTrigger className="text-xl font-semibold hover:text-secondary">
              How much does LinkedIn Ads cost per click (CPC)?
            </AccordionTrigger>
            <AccordionContent className="space-y-3">
              <p className="text-base font-light text-textColorTwo">
                LinkedIn CPC (cost per click) will fluctuate from $2 minimum to
                maybe $5 or $8 per click. It’s not a cheap traffic, but if your ads
                are highly targeted and have a high click-through rate, you can
                lower the CPC.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2" className="bg-card p-3">
            <AccordionTrigger className="text-xl font-semibold hover:text-secondary">
              What is the minimum ad spend to get started on LinkedIn Ads?
            </AccordionTrigger>
            <AccordionContent className="space-y-3">
              <p className="text-base font-light text-textColorTwo">
                LinkedIn Ads costs vary depending on factors like your campaign
                goals, target audience, and the number of campaigns you run. A good
                starting budget is around $1,500 per month. Start with 3 campaigns,
                allocating a minimum daily budget of $15 per campaign, and test at
                least 3 or 4 different ads per campaign. After one month, identify
                your winning campaigns and scale accordingly.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3" className="bg-card p-3">
            <AccordionTrigger className="text-xl font-semibold hover:text-secondary">
              What makes you different from other LinkedIn Ads agencies?
            </AccordionTrigger>
            <AccordionContent className="space-y-3">
              <ul className="list-disc space-y-5 ml-5 md:ml-10">
                <li className="text-base font-light text-textColorTwo">
                  Highly specialized in paid marketing for SaaS and B2B Tech companies.
                </li>
                <li className="text-base font-light text-textColorTwo">
                  Small team of three experts, with no account managers or juniors.
                </li>
                <li className="text-base font-light text-textColorTwo">
                  Transparency is our core value; we document and share our process.
                </li>
                <li className="text-base font-light text-textColorTwo">
                  Proactive, easy to communicate with, and no long-term commitment.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4" className="bg-card p-3">
            <AccordionTrigger className="text-xl font-semibold hover:text-secondary">
              How long does it take to launch my LinkedIn Ads campaigns?
            </AccordionTrigger>
            <AccordionContent className="space-y-3">
              <p className="text-base font-light text-textColorTwo">
                From the initial kick-off call, it takes a maximum of 2 weeks. Main
                steps include:
              </p>
              <ul className="list-disc space-y-5 ml-5 md:ml-10">
                <li className="text-base font-light text-textColorTwo">
                  Insight tag and conversions tracking setup
                </li>
                <li className="text-base font-light text-textColorTwo">
                  Audience research and segmentation
                </li>
                <li className="text-base font-light text-textColorTwo">
                  Ads messages and copywriting
                </li>
                <li className="text-base font-light text-textColorTwo">Ads design</li>
                <li className="text-base font-light text-textColorTwo">
                  Campaigns setup and launch
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5" className="bg-card p-3">
            <AccordionTrigger className="text-xl font-semibold hover:text-secondary">
              Do you require any contracts or long-term commitment?
            </AccordionTrigger>
            <AccordionContent className="space-y-3">
              <p className="text-base font-light text-textColorTwo">
                No, we don’t require a long-term contract. We work with a
                month-to-month agreement and are confident about our results to
                build long-term partnerships.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-6" className="bg-card p-3">
            <AccordionTrigger className="text-xl font-semibold hover:text-secondary">
              What LinkedIn Ads services do you offer?
            </AccordionTrigger>
            <AccordionContent className="space-y-3">
              <ul className="list-disc space-y-5 ml-5 md:ml-10">
                <li className="text-base font-light text-textColorTwo">
                  Conversion tracking implementation
                </li>
                <li className="text-base font-light text-textColorTwo">
                  Strategy guidance and audience research
                </li>
                <li className="text-base font-light text-textColorTwo">
                  Campaigns setup and optimization
                </li>
                <li className="text-base font-light text-textColorTwo">
                  Ads copywriting and banners design
                </li>
                <li className="text-base font-light text-textColorTwo">
                  Remarketing and ABM campaigns
                </li>
                <li className="text-base font-light text-textColorTwo">
                  Budget optimization and management
                </li>
                <li className="text-base font-light text-textColorTwo">
                  Customized report and real-time dashboard
                </li>
                <li className="text-base font-light text-textColorTwo">
                  LinkedIn Ad scheduling
                </li>
                <li className="text-base font-light text-textColorTwo">
                  Website visitor identification
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-7" className="bg-card p-3">
            <AccordionTrigger className="text-xl font-semibold hover:text-secondary">
              How much do your LinkedIn Ads services cost?
            </AccordionTrigger>
            <AccordionContent className="space-y-3">
              <p className="text-base font-light text-textColorTwo">
                We charge a monthly flat fee ranging from $1,200 to $3,000, depending
                on your ad spend and the paid channels involved.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      
    );
};

export default LinkedinFaq;