'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award } from '@/types/types';
import axios from 'axios';
import Image from 'next/image';

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

  // Awards logo
  const awardLogos = [
    '/api/placeholder/100/100',
    '/api/placeholder/100/100',
    '/api/placeholder/100/100',
    '/api/placeholder/100/100'
  ];

  // Team members
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Senior Developer',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: '"Working at this company has been an amazing experience."'
    },
    {
      name: 'Jane Smith',
      role: 'Frontend Engineer',
      image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: `'I'm proud to be a part of this talented team.'`
    },
    {
      name: 'Michael Johnson',
      role: 'Backend Engineer',
      image: '/api/placeholder/200/200',
      quote: '"This company values innovation and collaboration."'
    }
  ];

  // Engineering principles
  const engineeringPrinciples = [
    {
      title: 'Continuous Improvement',
      content: 'We constantly strive to enhance our skills, processes, and technologies to deliver better solutions.'
    },
    {
      title: 'Collaboration',
      content: 'We believe in the power of teamwork and open communication to achieve our goals.'
    },
    {
      title: 'User-Centric Design',
      content: 'Our designs focus on the needs and experiences of our users, ensuring they are at the heart of our solutions.'
    },
    {
      title: 'Attention to Detail',
      content: 'We pay meticulous attention to every aspect of our work, ensuring quality and excellence in all that we do.'
    }
  ];

  // Tech stack logos
  const techStackLogos = [
    '/api/placeholder/100/100',
    '/api/placeholder/100/100',
    '/api/placeholder/100/100',
    '/api/placeholder/100/100',
    '/api/placeholder/100/100',
    '/api/placeholder/100/100'
  ];

  // Real-world projects
  const realWorldProjects = [
    {
      title: 'Project A',
      description: 'A comprehensive solution for managing complex workflows.'
    },
    {
      title: 'Project B',
      description: 'A data visualization platform that provides actionable insights.'
    },
    {
      title: 'Project C',
      description: 'A scalable e-commerce platform that delivers seamless user experiences.'
    }
  ];

  // Recruitment process
  const recruitmentProcess = [
    {
      step: 'Application Review',
      description: 'We carefully review each application to identify the best-fit candidates.'
    },
    {
      step: 'Technical Interview',
      description: 'Candidates participate in a comprehensive technical assessment to evaluate their skills and problem-solving abilities.'
    },
    {
      step: 'Cultural Fit Interview',
      description: 'We assess how well candidates align with our company values and culture.'
    },
    {
      step: 'Final Review',
      description: 'The hiring team conducts a final review to make the best hiring decision.'
    }
  ];

  console.log(awards)

  return (
    <div className='max-w-7xl mx-auto'>
      {/* Awards logo marquee */}
      <p className="py-12">
        <div className="flex justify-center gap-6">
          {awards.map((award, index) => (
            <Image key={index} src={award.thumbnail.asset.url} alt={`Award ${index + 1}`} width={200} height={200} />
          ))}
        </div>
      </p>

      {/* Meet the team */}
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8">Meet the People Behind the Tech</h1>
        <div className="grid grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div>
                <img src={member.image} alt={member.name} width={200} height={200} className="rounded-full" />
                <h2 className="text-2xl font-bold">{member.name}</h2>
                <p>{member.role}</p>
                <p className="italic">{member.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Engineering principles */}
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8">Our Engineering Principles</h1>
        <div className="grid grid-cols-2 gap-8">
          {engineeringPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-4 bg-gray-100 rounded">
                <h2 className="text-xl font-bold">{principle.title}</h2>
                <p>{principle.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team manifesto */}
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8">Our Team Manifesto</h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          At our company, we believe in the power of collaboration, innovation, and a relentless pursuit of excellence. Our team is united by a shared vision to
          create cutting-edge solutions that transform the way our clients operate. We are driven by a passion for problem-solving, a commitment to continuous
          learning, and a deep respect for the diverse perspectives and talents of our colleagues.
        </motion.p>
      </div>

      {/* Tech stack */}
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8">Our Technology Stack</h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our engineering team leverages a wide range of cutting-edge technologies to deliver exceptional solutions. From modern frameworks and libraries to robust
          databases and cloud platforms, we are constantly exploring new tools and techniques to stay ahead of the curve.
        </motion.p>
        <div className="flex justify-center gap-6 mt-8">
          {techStackLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Tech Stack ${index + 1}`} width={100} height={100} />
          ))}
        </div>
      </div>

      {/* Real-world projects */}
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8">Real-World Projects</h1>
        <div className="grid grid-cols-3 gap-8">
          {realWorldProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="rounded-lg shadow-md p-4">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recruitment process */}
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8">Our Engineering Recruitment Process</h1>
        <div className="grid grid-cols-2 gap-8">
          {recruitmentProcess.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-4 bg-gray-100 rounded">
                <h2 className="text-xl font-bold">{step.step}</h2>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;