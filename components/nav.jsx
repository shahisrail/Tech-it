"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import  logo from "@/public/logo.png"
export const NavBar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropDownMenuRef = useRef();
    const pathname = usePathname();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener("mousedown", closeDropDown);

        return () => {
            document.removeEventListener("mousedown", closeDropDown);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`sticky top-0 z-10 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-md" : "bg-[#F4FAF3]"
            }`}
        >
            <nav className="flex items-center justify-between px-4 py-2 text-[#393E46] max-w-7xl mx-auto ">
                <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                    <Link href={"/"}>
                        {/* <h2 className="text-[#393E46]">Tech It</h2> */}
                        <Image
                            src={logo}
                            alt="logo"
                            width={120}
                            height={110}
                        />
                    </Link>
                </div>
                <ul className="hidden items-center justify-between gap-10 md:flex">
                    <li className="group flex  cursor-pointer flex-col">
                        <Link
                            className={` ${pathname === "/" ? "active" : ""}`}
                            href={"/"}
                        >
                            <h2>Home</h2>
                        </Link>
                        <span
                            className={`mt-[2px] h-[3px] w-[0px] rounded-full transition-all duration-300 group-hover:w-full ${
                                pathname === "/"
                                    ? "bg-sky-500 w-full"
                                    : "bg-sky-500"
                            }`}
                        ></span>
                    </li>
                    <li className="group flex  cursor-pointer flex-col">
                        <Link
                            className={` ${
                                pathname === "/service" ? "active" : ""
                            }`}
                            href={"/service"}
                        >
                            <h2>Services</h2>
                        </Link>

                        <span
                            className={`mt-[2px] h-[3px] w-[0px] rounded-full transition-all duration-300 group-hover:w-full ${
                                pathname === "/service"
                                    ? "bg-sky-500 w-full"
                                    : "bg-sky-500"
                            }`}
                        ></span>
                    </li>
                    <li className="group flex  cursor-pointer flex-col">
                        <Link
                            className={` ${
                                pathname === "/workprocess" ? "active" : ""
                            }`}
                            href={"/workprocess"}
                        >
                            <h2>Workprocess</h2>
                        </Link>

                        <span
                            className={`mt-[2px] h-[3px] w-[0px] rounded-full transition-all duration-300 group-hover:w-full ${
                                pathname === "/workprocess"
                                    ? "bg-sky-500 w-full"
                                    : "bg-sky-500"
                            }`}
                        ></span>
                    </li>
                    <li className="group flex  cursor-pointer flex-col">
                        <Link
                            className={` ${
                                pathname === "/contactUs" ? "active" : ""
                            }`}
                            href={"/contactUs"}
                        >
                            <h2> Contact</h2>
                        </Link>
                        <span
                            className={`mt-[2px] h-[3px] w-[0px] rounded-full transition-all duration-300 group-hover:w-full ${
                                pathname === "/contactUs"
                                    ? "bg-sky-500 w-full"
                                    : "bg-sky-500"
                            }`}
                        ></span>
                    </li>
                </ul>
                <div
                    ref={dropDownMenuRef}
                    onClick={() => setDropDownState(!dropDownState)}
                    className="relative flex transition-transform md:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cursor-pointer"
                    >
                        {" "}
                        <line x1="4" x2="20" y1="12" y2="12" />{" "}
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />{" "}
                    </svg>
                    {dropDownState && (
                        <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                            <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                            <Link
                            className={` ${
                                pathname === "/contactUs" ? "active" : ""
                            }`}
                            href={"/"}
                        >
                            <h2> Home</h2>
                        </Link>
                        <span
                            className={`mt-[2px] h-[3px] w-[0px] rounded-full transition-all duration-300 group-hover:w-full ${
                                pathname === "/contactUs"
                                    ? "bg-sky-500 w-full"
                                    : "bg-sky-500"
                            }`}
                        ></span>
                            </li>
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            <Link
                            className={` ${
                                pathname === "/service" ? "active" : ""
                            }`}
                            href={"/service"}
                        >
                            <h2>Services</h2>
                        </Link>

                        <span
                            className={`mt-[2px] h-[3px] w-[0px] rounded-full transition-all duration-300 group-hover:w-full ${
                                pathname === "/service"
                                    ? "bg-sky-500 w-full"
                                    : "bg-sky-500"
                            }`}
                        ></span>
                            </li>
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            <Link
                            className={` ${
                                pathname === "/workprocess" ? "active" : ""
                            }`}
                            href={"/workprocess"}
                        >
                            <h2>Workprocess</h2>
                        </Link>
                            </li>
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            <Link
                            className={` ${
                                pathname === "/contactUs" ? "active" : ""
                            }`}
                            href={"/contactUs"}
                        >
                            <h2> Contact</h2>
                        </Link>
                        <span
                            className={`mt-[2px] h-[3px] w-[0px] rounded-full transition-all duration-300 group-hover:w-full ${
                                pathname === "/contactUs"
                                    ? "bg-sky-500 w-full"
                                    : "bg-sky-500"
                            }`}
                        ></span>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};
