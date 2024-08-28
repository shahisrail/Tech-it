/* eslint-disable react/no-unescaped-entities */
import bannerImage from "@/assets/workProcess/banner.jpg";
import { LayoutPanelTop, SquareChevronRight } from "lucide-react";
import Image from "next/image";
import "./workProcess.css";

const WorkProcess = () => {
    return (
        <div className="bg-[#F4FAF3] ">
            <div className="max-w-screen-xl mx-auto ">
                <div className="md:flex justify-between items-center h-[calc(100vh-320px)] px-4 md:px-0">
                    <div className="relative h-[120px] md:w-[480px] md:py-4 py-0">
                        <div className="absolute z-20 animate-slide1">
                            <h1 className="word text-xl md:text-4xl font-bold bg-white px-10 py-4 rounded-xl shadow-lg text-green-500">
                                Working Process !
                            </h1>
                        </div>
                        <div className="absolute z-10 animate-slide2">
                            <p className="word text-sm md:text-2xl font-semibold bg-white px-10 py-4 rounded-xl shadow-md mt-5">
                                The best you can take from us
                            </p>
                        </div>
                    </div>
                    <div className=" ">
                        <Image
                            className="rounded-2xl shadow-lg"
                            placeholder="blur" 
                            alt="bannerImage"
                            src={bannerImage}
                            width={500}
                            height={500}
                        />
                    </div>
                </div>

                <div className=" px-4 md:px-0">
                    <div className="">
                        <h1 className="text-center text-lg md:text-5xl font-bold mt-10 bg-gray-50 shadow-md rounded-md py-4 px-4 md:max-w-[40%] mx-auto">
                            How we work?
                        </h1>
                    </div>
                    <div className="mt-10">
                        <h3 className="flex items-center md:text-2xl font-bold">
                            <span className="mr-2">
                                <LayoutPanelTop />
                            </span>{" "}
                            Web and app development process:{" "}
                        </h3>
                        <hr className="md:max-w-[35%] border-black mt-2 rounded-full" />

                        {/* ---------------- client consultation --------------- */}
                        <div className="mt-5 ">
                            <li className="font-bold md:text-lg">
                                Client Consultation
                            </li>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block " />
                                Understanding Your Needs
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                <span className="md:max-w-[50%]">
                                    {" "}
                                    Detail how you start by having an in-depth
                                    discussion with the client to understand
                                    their goals, target audience, and specific
                                    requirements.
                                </span>
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Initial meeting or call to gather information.
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Understanding the client's vision, budget, and
                                timeline.
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Providing initial ideas and suggestions based on
                                the client's needs.
                            </p>
                        </div>
                        <hr className="mt-5" />

                        {/* ---------------- Research and Strategy Development --------------- */}
                        <div className="mt-10 ">
                            <li className="font-bold text-lg">
                                Research and Strategy Development
                            </li>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Explain how you research the client's industry,
                                competitors, and target market to create a
                                tailored strategy.
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                <span className="md:max-w-[50%]">
                                    {" "}
                                    Market and competitor analysis.
                                </span>
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Creating a site map and defining the website
                                structure.
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Establishing clear goals and success metrics.
                            </p>
                        </div>
                        <hr className="mt-5" />

                        {/* ---------------- Wireframing & Design --------------- */}
                        <div className="mt-10 ">
                            <li className="font-bold text-lg">
                                Bringing Ideas to Life
                            </li>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Discuss how you create wireframes and design
                                prototypes to visualize the website's layout and
                                user experience
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                <span className="md:max-w-[50%]">
                                    Sketching wireframes to define the structure
                                    and flow.
                                </span>
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Designing a prototype with branding elements,
                                color schemes, and typography.
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Client feedback loop to refine the design.
                            </p>
                        </div>
                        <hr className="mt-5" />

                        {/* ---------------- Development --------------- */}
                        <div className="mt-10 ">
                            <li className="font-bold text-lg">
                                Turning Designs into Reality
                            </li>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Describe the development process where your team
                                codes the website, ensuring it’s responsive,
                                fast, and SEO-friendly
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                <span className="md:max-w-[50%]">
                                    Front-end and back-end development.
                                </span>
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Integrating content management systems (CMS) if
                                needed.
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Regular updates and communication with the
                                client.
                            </p>
                        </div>
                        <hr className="mt-5" />

                        {/* ---------------- Testing & QA --------------- */}
                        <div className="mt-10 ">
                            <li className="font-bold text-lg">
                                Ensuring Perfection
                            </li>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Cross-browser and cross-device testing.
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                <span className="md:max-w-[50%]">
                                    Highlight the importance of rigorous testing
                                    to ensure the website is bug-free and
                                    performs well across all devices and
                                    browsers.
                                </span>
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Performance optimization and load testing.
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Client review and final adjustments.
                            </p>
                        </div>
                        <hr className="mt-5" />

                        {/* ---------------- Launch & Training --------------- */}
                        <div className="mt-10 ">
                            <li className="font-bold text-lg">
                                Launching with Confidence
                            </li>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Final deployment to the live server.
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                <span className="md:max-w-[50%]">
                                    Explain how you handle the website launch,
                                    including any client training or
                                    documentation provided.
                                </span>
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Training the client on how to use the CMS or
                                manage content.
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Post-launch support and monitoring.
                            </p>
                        </div>
                        <hr className="mt-5" />

                        {/* ---------------- Ongoing Support & Maintenance --------------- */}
                        <div className="mt-10 ">
                            <li className="font-bold text-lg">
                                Continued Success
                            </li>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                <span className="md:max-w-[50%]">
                                    Offer information about your post-launch
                                    services, including maintenance, updates,
                                    and potential future enhancements.
                                </span>
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Regular updates and backups.
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Performance monitoring and optimization.
                            </p>
                            <p className="flex justify-items-center mt-2">
                                <SquareChevronRight className="ml-5 mr-2 hidden md:block" />
                                Availability for future projects and iterations.
                            </p>
                        </div>
                        <hr className="mt-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;
