"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "@/public/banner/banner1.png"
import image2 from "@/public/banner/banner2.png";
import image3 from "@/public/banner/banner3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { ContactIcon } from "lucide-react";
import Link from "next/link";

export default function Banner() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className="px-2 lg:px-0">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}   
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"   
            >
                {/* ------------- Slide 1 --------------------- */}
                <SwiperSlide>
                    <div className="lg:flex items-center justify-between my-10 lg:my-0">
                        <div className="flex flex-col items-start space-y-5">
                            <h1 className="font-black md:text-2xl lg:text-3xl text-start">
                                Responsive Websites for a Dynamic World
                            </h1>
                            <p className="lg:w-[80%] text-start text-sm lg:text-base">
                                Crafting visually stunning, high-performing
                                websites tailored to your business goals.
                            </p>
                            <Link href={"/contactUs"}>
                                <button className="bg-[#468420] text-white px-4 py-3 rounded-md shadow-md flex gap-2 text-sm items-center font-semibold">
                                    <ContactIcon /> Contacts
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Image placeholder="blur"  src={image1} alt="banner" />
                        </div>
                    </div>
                </SwiperSlide>

                {/* ------------- Slide 2 --------------------- */}
                <SwiperSlide>
                    <div className="lg:flex items-center justify-between my-10 lg:my-0">
                        <div className="flex flex-col items-start space-y-5">
                            <h1 className="font-black md:text-2xl lg:text-3xl text-start">
                                Apps that Elevate Your Business
                            </h1>
                            <p className="lg:w-[80%] text-start text-sm lg:text-base">
                                Seamlessly designed and developed apps to
                                enhance customer engagement and streamline
                                operations.
                            </p>
                            <Link href={"/contactUs"}>
                                <button className="bg-[#468420] text-white px-4 py-3 rounded-md shadow-md flex gap-2 text-sm items-center font-semibold">
                                    <ContactIcon /> Contacts
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Image placeholder="blur"  src={image2} alt="banner" />
                        </div>
                    </div>
                </SwiperSlide>

                {/* ------------- Slide 3 --------------------- */}
                <SwiperSlide>
                    <div className="lg:flex items-center justify-between my-10 lg:my-0">
                        <div className="flex flex-col items-start space-y-5">
                            <h1 className="font-black md:text-2xl lg:text-3xl text-start">
                                Rank Higher, Grow Faster
                            </h1>
                            <p className="lg:w-[80%] text-start text-sm lg:text-base">
                                Expert SEO services designed to bring more
                                visibility, more leads, and more revenue.
                            </p>
                            <Link href={"/contactUs"}>
                                <button className="bg-[#468420] text-white px-4 py-3 rounded-md shadow-md flex gap-2 text-sm items-center font-semibold">
                                    <ContactIcon /> Contacts
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Image placeholder="blur"  src={image3} alt="banner" />
                        </div>
                    </div>
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
}
