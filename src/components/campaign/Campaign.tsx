import Link from "next/link";
import { Button } from "../ui/button";

const Campaign = () => {
    return (
<div className="relative max-w-7xl mx-auto py-24">
    {/* Glowing background wrapper */}
    <div className="absolute max-w-[70%] mx-auto inset-0 bg-gradient-to-r from-[#6f86ff] via-[#fe316f] to-[#d220ff] opacity-50 blur-3xl z-[-1] rounded-3xl"></div>
    
    <div className="lg:max-w-[70%] mx-auto bg-card flex flex-col lg:flex-row items-center gap-5 p-10 rounded-3xl relative z-10 border border-borderColor">
        <div className="max-w-[50%]">
            <h2 className="text-3xl font-bold">Launch Your Campaign In As Little As 2 Weeks.</h2>
        </div>
        <div className="w-full flex justify-center items-center gap-4">
            <div className="w-full flex rounded-full mx-auto bg-gradient-to-tr from-[#6f86ff] via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                <Link href="" className="flex-1 font-bold text-lg bg-black px-10 text-center py-5 rounded-full hover:scale-95 transition-all duration-300">
                    Book a Demo
                </Link>
            </div>
            <div className="w-full flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105">
                <Link href="" className="flex-1 font-semibold text-lg bg-buttonColor text-textColorOne text-center px-10 py-5 rounded-full hover:bg-buttonHoverColor transition-all duration-300">
                    See Our Pricing
                </Link>
            </div>
        </div>
    </div>
</div>
    );
};

export default Campaign;