import Link from "next/link";
import HeroBg from '@/public/assets/herobg.svg';
import Image from "next/image";

const Hero = () => {

    const companyDetails = [
        {
            logo: 'https://i.ibb.co/Qcj7GDJ/66f7d720752b1858a6004c5b-Untitled-design-p-500.png',
            name: 'Company Name',
        },
        {
            logo: 'https://i.ibb.co/Qcj7GDJ/66f7d720752b1858a6004c5b-Untitled-design-p-500.png',
            name: 'Company Name',
        },
        {
            logo: 'https://i.ibb.co/Qcj7GDJ/66f7d720752b1858a6004c5b-Untitled-design-p-500.png',
            name: 'Company Name',
        },
    ]
    return (
        <div className="max-w-7xl mx-auto relative space-y-24">
            <div className="w-full lg:w-3/4 text-center mx-auto space-y-10 px-4 lg:px-10 pt-32">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">We Help UK SMEs <br className="hidden md:block lg:hidden"></br>  <span className="text-transparent bg-clip-text bg-foreground lg:bg-gradient-to-l from-[#ED4A8D] to-[#5C55F6] bg-opacity-50 font-extrabold">Book More Sales <br className="hidden md:block lg:hidden"></br> Meetings.</span></h1>
                <p className="text-2xl text-[#b7b4c7] font-medium">Using email outreach, we help our clients to book more qualified sales meetings with their ideal customers.</p>
                <div className="w-full md:w-3/4 lg:w-4/6 mx-auto flex flex-col md:flex-row justify-center items-center gap-3 space-y-3 md:space-y-0">
                    <div className="w-full flex rounded-full mx-auto bg-gradient-to-tr from-[#6f86ff] via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                        <Link href="" className="flex-1 font-bold text-lg bg-black px-10 lg:px-16 py-5 rounded-full">
                            Book a Demo
                        </Link>
                    </div>
                    <div className="w-full flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105">
                        <Link href="" className="flex-1 font-medium text-lg bg-[#302c3f]  px-10 lg:px-16 py-5 rounded-full">
                            See Our Pricing
                        </Link>
                    </div>
                </div>

            </div>


            <div className="relative mt-24">
                <Image className="w-full max-w-[85%] mx-auto rounded-2xl animate-float z-10" src={HeroBg} width={500} height={500} alt="HeroBg" />
                {/* Gradient Blurs */}
                <div className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute -top-60 -left-24 lg:-left-52 -z-10 animate-spin-slow transition-all">
                    <div className="bg-[#6f86ff] absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                    <div className="bg-[#fe316f] absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                    <div className="bg-[#d220ff] absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                </div>
                <div className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:bottom-6 lg:-right-52 -z-10 animate-spin-slow transition-all">
                    <div className="bg-[#6f86ff] absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                    <div className="bg-[#1766ff] lg:bg-[#fe316f] absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                    <div className="bg-[#6923ff] lg:bg-[#d220ff] absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                </div>

            </div>

            {/* clients section */}
            <div className="max-w-[50%] mx-auto">
                <div className="flex justify-between items-center gap-3">
                   {
                       companyDetails.map((item, index) => (
                           <div key={index}>
                               <Image src={item.logo} width={200} height={200} alt={item.name} />
                           </div>
                       ))
                   }
                </div>
            </div>
        </div>
    );
};

export default Hero;