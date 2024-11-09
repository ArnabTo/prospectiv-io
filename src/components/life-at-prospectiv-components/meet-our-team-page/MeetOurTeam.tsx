'use client';
import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';
import BenefitsOfProspectiv from '../BenefitsOfProspectiv';
import CultureAndPerks from '../CultureAndPerks';
import OurRecruitementProcess from './OurRecruitementProcess';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import HeaderImage from '@/public/assets/ourteam.jpg'
import AwardsSection from '@/components/awards-section/AwardsSection';
import MeetOurPeople from '../MeetOurPeople';

const MeetOurTeam = () => {

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
    <div className='overflow-hidden py-24'>
      <div className='relative'>
        <div
          className='w-full h-[24rem] bg-no-repeat bg-cover bg-center bg-fixed opacity-20'
          style={{
            backgroundImage: `url(${HeaderImage.src})`,
          }}
        >
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-3'>
          <h1 className='text-6xl font-extrabold '>Meet our <span className='text-secondary'>Team</span> </h1>
          <p className='text-textColorTwo text-lg text-center font-bold mx-auto'>
            {/* {lifeAtProspectivTextContent?.heading?.paragraph} */}
          </p>
          <div className='flex justify-center items-center'>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className='text-textColorTwo text-lg' href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className='text-textColorTwo text-lg'>Company</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className='text-textColorTwo text-lg'>Life at Prospectiv</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className='text-secondary text-lg'>Meet our Team</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

      </div>
      <div className='max-w-7xl mx-auto space-y-24 mb-24'>
        <AwardsSection />

        <MeetOurPeople/>
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
      </div>

      <div className='max-w-screen-xl mx-auto relative'>
        <OurRecruitementProcess />
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
  );
};

export default MeetOurTeam;