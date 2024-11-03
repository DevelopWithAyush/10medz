import React, { useContext, useState } from "react";
import { ManonBike, Xmark } from "../../../assets/image";
import { HandleContext } from "../../../hooks/HandleState";
import OtpInput from "otp-input-react";


const Login = () => {
    const { setOpenLoginModal, setWapper } = useContext(HandleContext);
    const [error, setError] = useState({
        status: false,
        message: "",
    });
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp,setOtp] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate phone number length
        if (phoneNumber.length > 10) {
            setError({
                status: true,
                message: "Phone number cannot exceed 10 digits",
            });
        } else {
            setError({
                status: false,
                message: "",
            });
            // Proceed with OTP request if valid
            console.log("Requesting OTP for:", phoneNumber);
        }
    };

    return (
        <div className="sm:flex fixed z-[10000] hidden flex-col items-start justify-start top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white pl-10 pb-10 pt-6 pr-6 rounded-[20px]">
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setOpenLoginModal(false);
                    setWapper(false);
                }}
                className="self-end"
            >
                <Xmark />
            </button>
            <div className="flex flex-row items-center justify-start gap-[70px]">
                <div className="flex flex-col items-start justify-start gap-10">
                    <div className="flex flex-col items-start justify-start gap-2">
                        <p className="text-[20px] text-[#101010] font-psemibold_600">
                            Sign in / Sign up
                        </p>
                        <p className="text-[#555] text-[14px] font-pregular_400">
                            Enter your mobile no. to get an OTP
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-start justify-start w-full gap-10"
                    >
                        <div className="w-full flex flex-col items-start justify-start gap-2">
                            <label
                                htmlFor="phonenumber"
                                className="font-psemibold_600 text-[12px] text-[#555]"
                            >
                                Mobile no.
                            </label>
                            <input
                                type="text"
                                name="number"
                                id="phonenumber"
                                placeholder="Enter mobile no."
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="px-4 py-2 rounded-[10px] w-[320px] border-[1px] border-solid border-[#ddd] placeholder:text-[#8A99A5] placeholder:text-[14px] placeholder:font-pregular_400 placeholder:tracking-[5.6px]"
                            />
                            {error.status && (
                                <p className="text-red-500 text-sm">{error.message}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="capitalize w-full text-white bg-primary py-2 rounded-[10px] text-[16px] font-psemibold_600"
                        >
                            get otp
                        </button>
                    </form>

                    <OtpInput
                        OTPLength={4}
                        value={otp}
                        onChange={setOtp}
                        otpType="number"
                        disabled={false}
                        autoFocus
                        className="opt-container"
                    />
                </div>
                <ManonBike />
            </div>
        </div>
    );
};

export default Login;
