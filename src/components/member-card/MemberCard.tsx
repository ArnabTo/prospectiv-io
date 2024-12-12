import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import Image from "next/image";
import PeopleOne from '@/public/assets/peoples/p1.jpeg'
import PeopleTwo from '@/public/assets/peoples/p2.png'
import PeopleThree from '@/public/assets/peoples/p3.jpeg'
import PeopleFour from '@/public/assets/peoples/p4.png'
const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
];




const membersDetails = [
    {
        name: 'Davide Dabramo',
        title: 'Fratelli Agency',
        avatar: PeopleOne,
        says: 'We closed our first bit of business within 4 weeks which meant they had paid for themselves almost instantaneously.'
    },
    {
        name: 'Jamie Donaldson',
        title: 'Out of Bounds',
        avatar: PeopleTwo,
        says: '4 weeks in, and we’ve just closed an £18.9k deal directly from Prospectiv’s work! I can’t recommend them highly enough'
    },
    {
        name: 'Madison Potter',
        title: 'Madsocial',
        avatar: PeopleThree,
        says: 'I have been working with Prospectiv for a little over a month now. We have officially signed a new client from their efforts!'
    },
    {
        name: 'Spike O’Connell',
        title: 'Podshop',
        avatar: PeopleFour,
        says: 'David and the team we’re great from the start, very accommodating to a business that’s had bad experience with marketing agencies before.'
    },
]

const MemberCard = ({ name, title, avatar, says }: { name: string, title: string, avatar: any, says: string }) => {
    return (
        <div
            className='relative w-[40rem] cursor-pointer overflow-hidden rounded-xl border bg-card border-borderColor p-4'
        >
            <div className="flex flex-row items-center gap-5">

                <Image className="rounded-full w-32 h-32" src={avatar} alt="member-image" width={100} height={100} />
                <div className="flex flex-col">
                    <figcaption className="text-lg font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-lg font-medium dark:text-white/40">{title}</p>
                    <blockquote className="mt-2 text-xl text-textColorTwo">{says}</blockquote>
                </div>
            </div>
            {/* <div className="bg-gradient-to-r from-gradientColorOne via-gradientColorTwo to-gradientColorThree opacity-30 blur-3xl absolute inset-0 -z-10"></div> */}
        </div>
    )
}

export function MemberCardMarquee() {
    return (
        <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent z-20">
            <Marquee pauseOnHover className="[--duration:20s]">
                {membersDetails.map((member, index) => (
                    <MemberCard key={index} {...member} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l"></div>
        </div>
    );
}
