import Link from "next/link";
import { motion } from 'framer-motion';
import { Undo2 } from "lucide-react";

const StudioNavbar = (props: any) => {
    return (
        <div className="bg-[#13141B]">
            <nav className="w-full max-w-7xl mx-auto px-3 py-3 space-y-5">
                <div className="flex flex-row justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="text-lg lg:text-3xl font-extrabold">
                            Prospectiv
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-fit lg:w-full flex rounded-full bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group">
                            <Link href="/" className="flex-1 flex justify-center items-center gap-2  bg-black px-5 py-3 rounded-full group-hover:scale-95 transition-all duration-300">
                                <span className="font-bold text-md lg:text-xl text-center">Back to Home </span>
                                <Undo2/>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </nav>
            <>{props.renderDefault(props)}</>
        </div>
    );
};

export default StudioNavbar;