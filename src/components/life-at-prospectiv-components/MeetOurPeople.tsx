'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Quote } from 'lucide-react';
const MeetOurPeople = () => {

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
      image: 'https://images.pexels.com/photos/7841788/pexels-photo-7841788.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: `'I'm proud to be a part of this talented team.'`
    },
    {
      name: 'Michael Johnson',
      role: 'Backend Engineer',
      says: `In my three years at Sopro, my career has really taken off. I've gone from an intermediate developer, to a senior, to a team lead.`,
      image: 'https://images.pexels.com/photos/7109087/pexels-photo-7109087.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: '"This company values innovation and collaboration."'
    }
  ];

    return (
        <div>
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
                  <div className='overflow-hidden rounded-xl md:max-h-72 lg:max-h-60'>
                    <Image className='w-full object-contain rounded-xl group-hover:scale-105 ease-in-out duration-300' src={teamMembers[0].image} width={1000} height={1000} alt='' />
                  </div>
                </CardHeader>
                <CardContent className='space-y-5'>
                  <span>
                    <h3 className='text-2xl font-bold'>{teamMembers[0].name}</h3>
                    <p className='text-secondary text-lg'>{teamMembers[0].role}</p>
                  </span>
                  <p className='text-textColorTwo text-lg'>{teamMembers[0].says}</p>
                  <p className='italic text-textColorTwo flex items-start text-lg'><Quote color='#ff4895' size={15} className='transform rotate-180' />{teamMembers[0].quote}</p>
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
              <p className='text-lg text-textColorTwo'>Great tech is created by great people. At Sopro we are dedicated to building and developing a team of enthusiasts, who love what they do.</p>
              {/* <p className='text-lg md:text-xl lg:text-2xl text-textColorTwo'>Great tech is created by great people. At Sopro we are dedicated to building and developing a team of enthusiasts, who love what they do.</p> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className='max-w-[90%] mx-auto'>
              <Card className='border border-borderColor rounded-2xl group'>
                <CardHeader>
                  <div className='overflow-hidden rounded-xl md:max-h-72 lg:max-h-60'>
                    <Image className='w-full object-contain rounded-xl group-hover:scale-105 ease-in-out duration-300' src={teamMembers[1].image} width={1000} height={1000} alt='' />
                  </div>
                </CardHeader>
                <CardContent className='space-y-5'>
                  <span>
                    <h3 className='text-2xl font-bold'>{teamMembers[1].name}</h3>
                    <p className='text-secondary text-lg'>{teamMembers[1].role}</p>
                  </span>
                  <p className='text-textColorTwo text-lg'>{teamMembers[1].says}</p>
                  <p className='italic text-textColorTwo flex items-start text-lg'><Quote color='#ff4895' size={15} className='transform rotate-180' />{teamMembers[1].quote}</p>
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
                  <div className='overflow-hidden rounded-xl md:max-h-72 lg:max-h-60'>
                    <Image className='w-full object-contain rounded-xl group-hover:scale-105 ease-in-out duration-300' src={teamMembers[2].image} width={1000} height={1000} alt='' />
                  </div>
                </CardHeader>
                <CardContent className='space-y-5'>
                  <span>
                    <h3 className='text-2xl font-bold'>{teamMembers[2].name}</h3>
                    <p className='text-secondary text-lg'>{teamMembers[2].role}</p>
                  </span>
                  <p className='text-textColorTwo text-lg'>{teamMembers[2].says}</p>
                  <p className='italic text-textColorTwo flex items-start text-lg'><Quote color='#ff4895' size={15} className='transform rotate-180' />{teamMembers[2].quote}</p>
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
        </div>
    );
};

export default MeetOurPeople;