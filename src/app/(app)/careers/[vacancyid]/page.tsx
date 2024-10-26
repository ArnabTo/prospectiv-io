'use client';
import { useParams } from "next/navigation";

const VacancyDetails = () => {
    const params = useParams();
    // console.log(params.vacancy)
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Coming Soon!</h1>
        </div>
    );
};

export default VacancyDetails;