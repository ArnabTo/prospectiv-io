'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award } from '@/types/types';
import axios from 'axios';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Quote, Sparkle } from 'lucide-react';
import BenefitsOfProspectiv from '../life-at-prospectiv-components/BenefitsOfProspectiv';
import CultureAndPerks from '../life-at-prospectiv-components/CultureAndPerks';
import OurRecruitementProcess from './OurRecruitementProcess';

const MeetOurTeam = () => {

  const [awards, setAwards] = useState<Award[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAwards = useCallback(async () => {
    setIsLoading(true);
    try {
      const getAwards = await axios.get('/api/getawards');
      setAwards(getAwards.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAwards();
  }, [fetchAwards]);


  // Team members
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Senior Developer',
      says: 'I work in the Dev team as a full stack developer. I love working with the newest and best technologies.',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: '"Working at this company has been an amazing experience."'
    },
    {
      name: 'Jane Smith',
      role: 'Frontend Engineer',
      says: 'Sopro is all about being passionate and having an opportunity to grow. The people, the progression, and the company culture are amazing.',
      image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: `'I'm proud to be a part of this talented team.'`
    },
    {
      name: 'Michael Johnson',
      role: 'Backend Engineer',
      says: `In my three years at Sopro, my career has really taken off. I've gone from an intermediate developer, to a senior, to a team lead.`,
      image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: '"This company values innovation and collaboration."'
    }
  ];

  // Engineering principles
  const engineeringPrinciples = [
    {
      title: 'Embrace the MVP',
      content: 'The quicker we ship a Minimum Viable Product, the quicker we can get feedback from real users, on the issues and features they really care about'
    },
    {
      title: 'Build a legacy',
      content: `We all love to try and reduce code into as few lines as possible, however, clear and readable code wins every time. If you can’t look back at a function or code snippet in a month's time and know what it does right away, neither can your teammates.`,
    },
    {
      title: 'Avoid premature optimization',
      content: `We are building systems that solve problems for our users. First and foremost we need to make sure we are delighting our users, listening to their feedback and solving these problems rather than optimizing every last line of code. There will be plenty of time for that once the users come flooding in.`,
    },
    {
      title: `Don't optimise for the sake of it`,
      content: `We always try to make time for optimising and refactoring code, but never for the sake of it. We always quantify the impact first. If it’s performance-related, it's done with appropriate instrumentation. If it’s code quality, we consider the importance of the code and its impact on other features.`,
    },
    {
      title: `Be the client`,
      content: `We aren’t building systems for outsourced third parties – we are stakeholders in everything we build. We work with the business collaboratively to solve problems, and not just build code to specifications. Use your initiative to suggest changes – everyone’s views are heard.`,
    },
    {
      title: `Don’t depend on dependencies`,
      content: `We use plenty of third party systems and platforms in the delivery of any piece of software, and the ones we choose in the first case are not always the ones we end up with. Avoid tightly coupling any dependencies (or any code we haven’t produced) and prioritize the ability to swap providers in and out.`,
    },
    {
      title: `Be a good mentor`,
      content: `Good coding practices come with practice and time. Spending care and attention on code reviews with less experienced members of your team helps them to develop these practices, which benefits us all. And we’ve all been the new guy once.`,
    },
    {
      title: `Evolve your stack`,
      content: `Technologies evolve at a rapid pace and we need to make sure our knowledge keeps up. Embrace new languages and systems and use them where appropriate – the wider our base of knowledge is, the more able we are to suggest the right tech for the right solution.`,
    },
    {
      title: `Take pride in our creations`,
      content: `We are building real world systems for real users – and we should be proud enough to show them off. Show your family at the dinner table`,
    },
  ];


  return (
    <div className='overflow-hidden'>
      <div className='max-w-7xl mx-auto space-y-24'>
        {/* Awards logo marquee */}
        <div className="py-12">
          <h2 className='text-4xl font-bold mb-8 text-center'>Awards and Recognitions</h2>
          <div className="flex justify-center items-center gap-6">
            {awards.map((award, index) => (
              <div key={index}>
                <Image className='w-full object-contain max-w-44' key={index} src={award.thumbnail.asset.url} alt={`Award ${index + 1}`} width={500} height={500} />
              </div>
            ))}
          </div>
        </div>

        {/* Meet the team */}
        <div className="py-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center relative">
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className='max-w-[90%] mx-auto'>
              <Card className='border border-borderColor rounded-2xl group p-3'>
                <CardHeader>
                  <div className='overflow-hidden rounded-xl max-h-60'>
                    <Image className='w-full object-contain rounded-xl group-hover:scale-105 ease-in-out duration-300' src={teamMembers[0].image} width={1000} height={1000} alt='' />
                  </div>
                </CardHeader>
                <CardContent className='space-y-5'>
                  <span>
                    <h3 className='text-2xl font-bold'>{teamMembers[0].name}</h3>
                    <p className='text-secondary'>{teamMembers[0].role}</p>
                  </span>
                  <p className='text-textColorTwo'>{teamMembers[0].says}</p>
                  <p className='italic text-textColorTwo flex items-start'><Quote color='#ff4895' size={15} className='transform rotate-180' />{teamMembers[0].quote}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className='max-w-[90%] mx-auto flex flex-col justify-center items-start p-3'>
              <h2 className='text-xl md:text-3xl lg:text-5xl font-bold mb-4'>Meet the people behind the tech</h2>
              <p className='text-lg md:text-xl lg:text-2xl text-textColorTwo'>Great tech is created by great people. At Sopro we are dedicated to building and developing a team of enthusiasts, who love what they do.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className='max-w-[90%] mx-auto'>
              <Card className='border border-borderColor rounded-2xl group'>
                <CardHeader>
                  <div className='overflow-hidden rounded-xl max-h-60'>
                    <Image className='w-full object-contain rounded-xl group-hover:scale-105 ease-in-out duration-300' src={teamMembers[1].image} width={1000} height={1000} alt='' />
                  </div>
                </CardHeader>
                <CardContent className='space-y-5'>
                  <span>
                    <h3 className='text-2xl font-bold'>{teamMembers[1].name}</h3>
                    <p className='text-secondary'>{teamMembers[1].role}</p>
                  </span>
                  <p className='text-textColorTwo'>{teamMembers[1].says}</p>
                  <p className='italic text-textColorTwo flex items-start'><Quote color='#ff4895' size={15} className='transform rotate-180' />{teamMembers[1].quote}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className='max-w-[90%] mx-auto'>
              <Card className='border border-borderColor rounded-2xl group p-3'>
                <CardHeader>
                  <div className='overflow-hidden rounded-xl max-h-60'>
                    <Image className='w-full object-cover rounded-xl group-hover:scale-105 ease-in-out duration-300' src={teamMembers[2].image} width={1000} height={1000} alt='' />
                  </div>
                </CardHeader>
                <CardContent className='space-y-5'>
                  <span>
                    <h3 className='text-2xl font-bold'>{teamMembers[2].name}</h3>
                    <p className='text-secondary'>{teamMembers[2].role}</p>
                  </span>
                  <p className='text-textColorTwo'>{teamMembers[2].says}</p>
                  <p className='italic text-textColorTwo flex items-start'><Quote color='#ff4895' size={15} className='transform rotate-180' />{teamMembers[2].quote}</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute -top-60 -left-24 lg:-left-52 -z-10 animate-spin-slow transition-all">
              <div className="bg-gradientColorOne absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
              <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
              <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:bottom-12 lg:-right-10 -z-10 transition-all">
              <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
              <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
              <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
            </motion.div>
          </div>
        </div>

        {/* Engineering principles */}
        <div className="py-12 p-5">
          <h1 className="text-4xl font-bold mb-8">Our Engineering Principles</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className='flex items-start gap-4'
              >
                <div>
                  <Sparkle color='#ff4895' size={40} />
                </div>
                <div className="rounded">
                  <h2 className="text-xl font-bold">{principle.title}</h2>
                  <p className='text-lg text-textColorTwo'>{principle.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <BenefitsOfProspectiv />
        <CultureAndPerks />
        {/* Recruitment process */}

        <div>
          <OurRecruitementProcess />
        </div>

      </div>
    </div>
  );
};

export default MeetOurTeam;