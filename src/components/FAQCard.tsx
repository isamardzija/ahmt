import { useState } from "react";
import clsx from "clsx";

interface Props {
    i: number;
    question: string;
    answer: string;
}
const bgMobile = [
    "bg-primary/20",
    "bg-primary/20",
    "bg-primary/20",
    "bg-primary/40",
    "bg-primary/40",
    "bg-primary/40",
    "bg-primary/70",
    "bg-primary/70",
    "bg-primary/70",
];
const bgDesktop = [
    "bg-primary/20",
    "bg-primary/40",
    "bg-primary/70",
    "bg-primary/20",
    "bg-primary/40",
    "bg-primary/70",
    "bg-primary/20",
    "bg-primary/40",
    "bg-primary/70",
];

export const FAQCard = ({ question, answer, i }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    const classesFront = clsx(
        "flex justify-center text-center items-center mb-[20px] rounded-[10px] backface-hidden relative w-full h-full min-h-[300px] transition-transform duration-500 preserve-3d min-w-[330px] max-w-[410px] py-[100px] px-10 lg:min-w-[410px]",
        isFlipped && "rotate-y-180",
        bgMobile[i],
        `lg:${bgDesktop[i]}`
    );

    const classesBack = clsx(
        "absolute bg-primary h-full backface-hidden rotate-y-180 px-[10px] py-[40px] rounded-[10px] min-w-[330px] max-w-[410px] lg:w-[410px] grid place-items-center min-h-[300px]",
        bgMobile[i],
        `lg:${bgDesktop[i]}`
    );
    return (
        <li className="perspective-1000 hover:cursor-pointer text-centerr" onClick={handleFlip}>
            <div className={classesFront}>
                <div className="absolute flex">
                    <p className="text-18 max-w-[250px]">{question}</p>
                </div>
                <div className={classesBack}>
                    <p className="text-16 max-w-[250px]">{answer}</p>
                </div>
            </div>
        </li>
    );
};
