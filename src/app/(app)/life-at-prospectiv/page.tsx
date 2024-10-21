import Marquee from '@/components/ui/marquee';
import HeaderImage from '@/public/assets/campany-culture.jpg'
import Image from 'next/image';
import { title } from 'process';

const LifeAtProspectiv = () => {

    const membersDetails = [
        {
            name: 'John Doe',
            title: 'Founder & CEO',
            avatar: 'https://i.ibb.co/85M9yHq/albert-dera-ILip77-Sbm-OE-unsplash.jpg',
            says: 'Sopro doesnt feel like working. Its an environment where I learn, improve, and have fun.'
        },
        {
            name: 'John Doe',
            title: 'Founder & CEO',
            avatar: 'https://i.ibb.co/85M9yHq/albert-dera-ILip77-Sbm-OE-unsplash.jpg',
            says: 'Sopro doesnt feel like working. Its an environment where I learn, improve, and have fun.'
        },
        {
            name: 'John Doe',
            title: 'Founder & CEO',
            avatar: 'https://i.ibb.co/85M9yHq/albert-dera-ILip77-Sbm-OE-unsplash.jpg',
            says: 'Sopro doesnt feel like working. Its an environment where I learn, improve, and have fun.'
        },
        {
            name: 'John Doe',
            title: 'Founder & CEO',
            avatar: 'https://i.ibb.co/85M9yHq/albert-dera-ILip77-Sbm-OE-unsplash.jpg',
            says: 'Sopro doesnt feel like working. Its an environment where I learn, improve, and have fun.'
        },
    ]
    return (
        <div>
            <div className='relative'>
                <div
                    className='w-full h-[24rem] bg-no-repeat bg-cover bg-center bg-fixed opacity-20'
                    style={{
                        backgroundImage: `url(${HeaderImage.src})`,
                    }}
                >
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-3'>
                    <h1 className='text-6xl font-extrabold '>Life at <span className='text-secondary'>Prospectiv</span> </h1>
                    <p className='text-textColorTwo text-lg text-center font-bold mx-auto'>We're the people behind the prospects. For all the clever tech, what makes the Sopro service stand out is the people. As we like to tell our clients, we’re a team, not a tool.</p>
                </div>

            </div>

            <div className="max-w-7xl mx-auto">
                <div className="relative flex w-full flex-col items-center justify-center gap-5 rounded-full">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {
                            membersDetails.map((member, index) => (
                                <div key={index}>
                                    <Image src={member.avatar} width={200} height={200} alt={member.name} />
                                </div>
                            ))
                        }
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#13111A]"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#13111A]"></div>
                </div>
            </div>

        </div>
    );
};

export default LifeAtProspectiv;