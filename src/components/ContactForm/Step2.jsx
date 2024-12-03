import { useForm } from "react-hook-form";

export const Step2 = ({ step1Data, onPrevStep, onNextStep, setStep2Data }) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.name && data.phone && setStep2Data(data);
        onNextStep();
    };
    return (
        <>
            <div className="flex flex-col gap-4">
                {step1Data.map((chosenService, i) => (
                    <p key={i}>{chosenService}</p>
                ))}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 border">
                <button onClick={onPrevStep}>Previous</button>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        {...register("name", {
                            required: "Please enter your name",
                        })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        {...register("phone", {
                            required: "Please enter phone number",
                        })}
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}
                </div>
                <div>
                    <label htmlFor="note">Note:</label>
                    <textarea name="note" id="note" {...register("note")}></textarea>
                </div>
                <div>
                    <label htmlFor="consent">Consent notice, must be accepted</label>
                    <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        {...register("consent", {
                            required: "Please accept the terms to proceed",
                        })}
                    />
                    {errors.consent && <p>{errors.consent.message}</p>}
                </div>
                <button>Next</button>
            </form>
        </>
    );
};
