import React from "react";
import { MdMenu } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import data from "@/utils/data.json"


const article = () => {
    const paras= data.paragraph
    return (
        <section className="max-w-screen-xl mx-auto">
            <div className="flex items-center gap-12 shadow-xl p-2">
                <MdMenu className="text-3xl font-bold text-lime-950" />
                <h1 className="text-3xl text-lime-950">
                    DHAKA{" "}
                    <span className="text-white p-1 rounded-md bg-lime-950">
                        POST
                    </span>
                </h1>
            </div>
            <p className="flex items-center  mt-12 mx-2 gap-2 text-sm">
                প্রচ্ছদ <FaAngleRight /> লাইফস্টাইল
            </p>

            {/* title is here */}
            <h1 className="my-4 p-2 text-2xl font-bold">
                {data.title}
            </h1>

            <div className="px-2 flex items-center gap-3">
                <Image
                    src="/image/logo.png"
                    className="rounded-full w-12 h-12"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />
                <div className="text-sm">
                    <p>লাইফস্টাইল ডেস্ক</p>
                    <p>০৩ জানুয়ারি ২০২২, ৩ঃ৪৫ পিএম</p>
                </div>
            </div>

            {/*Article is starting here  */}

            <section className="">
                <Image
                    src='/image/photo.jpg'
                    className=" w-full h-60 mt-4"
                    width={400}
                    height={300}
                    alt="Picture of the author"
                />
                <div className="flex items-center px-2 gap-2 py-4 text-4xl">
                    <FaFacebook className="text-[#0b62d4]" />
                    <FaTwitter className="text-[#1DA1F2]" />
                    <FaWhatsapp className="text-[#075E54]" />
                    <MdOutlineEmail className="text-[#c71610]" />
                </div>

                <section className="px-2 space-y-4">
                    {
                        paras.map((para,idx) => <p key={idx}>{ para.para}</p>)
                    }
                </section>

                <div className="bg-gray-800 py-4 text-white text-center mt-6 text-sm">
                    <h1>all rights reserved by Dhakapost</h1>
                </div>
            </section>
        </section>
    );
};

export default article;
