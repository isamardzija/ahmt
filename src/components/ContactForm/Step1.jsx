import { useForm } from "react-hook-form";

export const Step1 = ({ setStep1Data, onNextStep }) => {
    const { setValue, handleSubmit, watch } = useForm();
    const watchChosenServices = watch("chosenServices", []);

    const onSubmit = (data) => {
        setStep1Data(data.chosenServices);
        onNextStep();
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        const currentValues = watchChosenServices || [];

        if (checked) {
            setValue("chosenServices", [...currentValues, value]);
        } else {
            setValue(
                "chosenServices",
                currentValues.filter((item) => item !== value)
            );
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="hover:cursor-pointer" htmlFor="oneId">
                    Checkbox One
                </label>
                <input
                    className="hover:cursor-pointer"
                    type="checkbox"
                    name="oneName"
                    id="oneId"
                    value="oneValue"
                    onChange={handleCheckboxChange}
                />
            </div>
            <div>
                <label className="hover:cursor-pointer" htmlFor="twoId">
                    Checkbox Two
                </label>
                <input
                    className="hover:cursor-pointer"
                    type="checkbox"
                    name="twoName"
                    id="twoId"
                    value="twoValue"
                    onChange={handleCheckboxChange}
                />
            </div>
            <button type="submit" disabled={watchChosenServices.length === 0}>
                Nastavi
            </button>
        </form>
    );
};
