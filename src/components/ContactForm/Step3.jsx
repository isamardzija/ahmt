import React from "react";

export const Step3 = ({ step1Data, step2Data }) => {
    return (
        <div>
            <div>
                Chosen Services:
                {step1Data.map((service) => (
                    <p>{service}</p>
                ))}
            </div>
            <div>
                <p>Name: {step2Data.name}</p>
                <p>Phone: {step2Data.phone}</p>
                {step2Data.note && <p>Note: {step2Data.note}</p>}
            </div>
        </div>
    );
};
