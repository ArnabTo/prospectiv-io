import Image from 'next/image';
import React from 'react';

const CareerPath = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
            <div className='lg:max-w-[50%] space-y-4'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-semibold'>Career Path</h2>
                <p className='text-textColorTwo text-lg'>We assess all roles based on ability: we attract the best talent and then help people develop their skills and realise their career aspirations.

                    We have a clear pathway and proven track record of enabling our people to achieve their potential – be that within Customer Success or other areas of our business.

                    Within Customer Success, we recognise that people management is not for everyone, and have two clear, separate paths for the respective skill-sets needed to bring success.</p>
            </div>
            <div className='min-w-[50%]'>
                <Image className='w-full' src='https://sopro.io/wp-content/themes/sopro/img/img_career_path.svg' width={1000} height={1000} alt='' />
            </div>
        </div>
    );
};

export default CareerPath;