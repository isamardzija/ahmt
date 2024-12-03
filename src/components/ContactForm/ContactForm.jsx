import React, { useState, useEffect } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";

export const ContactForm = () => {
    const [step, setStep] = useState(1);
    const [step1Data, setStep1Data] = useState([]);
    const [step2Data, setStep2Data] = useState({
        name: null,
        phone: null,
        note: null,
    });

    const handleNextStep = () => {
        setStep((prev) => prev + 1);
    };
    const handlePrevStep = () => {
        setStep((prev) => prev - 1);
    };

    return (
        <div>
            {step === 1 && <Step1 onNextStep={handleNextStep} setStep1Data={setStep1Data} />}
            {step === 2 && (
                <Step2
                    onPrevStep={handlePrevStep}
                    onNextStep={handleNextStep}
                    step1Data={step1Data}
                    setStep2Data={setStep2Data}
                />
            )}
            {step === 3 && <Step3 step1Data={step1Data} step2Data={step2Data} />}
        </div>
    );
};
