// components/TeamSection.js
import Image from "next/image";
import devImage from "@/public/dev.jpg";
import { FaTwitter } from "react-icons/fa";
import {
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
const TeamSection = () => {
  return (
    <section className="team-area py-16">
      <div className=" mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase">
            Our <span className="text-[#468420]">Team</span>
          </h2>
          <h4 className="relative inline-block capitalize pb-5">
            Meet our awesome and expert team members
            <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#468420]"></span>
          </h4>
        </div>
        <div className="flex flex-wrap -mx-4">
          
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg relative text-center p-6">
              <div className="relative overflow-hidden">
                <Image
                  src={devImage}
                  placeholder="blur"
                  alt="Team Member"
                  className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
                  layout="responsive"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <h4 className="text-white text-xl uppercase mb-2">
                    Md:Shah Israil
                  </h4>
                  <p className="text-white mb-4">
                  A visionary full stack developer with expertise in modern web technologies, leading Tech It to deliver innovative solutions.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-blue-400 text-white p-2 rounded-full"
                    >
                      <FaFacebookF size={30} />
                    </a>

                    <a
                      href="#"
                      className="bg-[#468420] text-white p-2 rounded-full"
                    >
                      <FaInstagram size={30} />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-300 text-white p-2 rounded-full"
                    >
                      <FaLinkedin size={30} />{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="relative inline-block bg-white shadow-md p-3 rounded-full text-[#424442] -mt-10">
                  <FaEnvelopeOpen size={30} />
                </div>
                <h4 className="text-xl font-semibold mt-4 capitalize">
                  Md:Shah Israil (ceo Founder)
                </h4>
                <span className="text-[#468420] font-semibold uppercase">
                  Full Stack Develope
                </span>
              </div>
            </div>
          </div>


          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg relative text-center p-6">
              <div className="relative overflow-hidden">
                <Image
                  src={devImage}
                  alt="Team Member"
                  placeholder="blur"
                  className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
                  layout="responsive"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <h4 className="text-white text-xl uppercase mb-2">
                    Md:Salim
                  </h4>
                  <p className="text-white mb-4">
                  A skilled full stack developer focusing on building robust, scalable web applications with cutting-edge technologies.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-blue-400 text-white p-2 rounded-full"
                    >
                      <FaFacebookF size={30} />
                    </a>

                    <a
                      href="#"
                      className="bg-[#468420] text-white p-2 rounded-full"
                    >
                      <FaInstagram size={30} />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-300 text-white p-2 rounded-full"
                    >
                      <FaLinkedin size={30} />{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="relative inline-block bg-white shadow-md p-3 rounded-full text-[#424442] -mt-10">
                  <FaEnvelopeOpen size={30} />
                </div>
                <h4 className="text-xl font-semibold mt-4 capitalize">
                  Md:Salim
                </h4>
                <span className="text-[#468420] font-semibold uppercase">
                  Full Stack Develope
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg relative text-center p-6">
              <div className="relative overflow-hidden">
                <Image
                  src={devImage}
                  placeholder="blur"
                  alt="Team Member"
                  className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
                  layout="responsive"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <h4 className="text-white text-xl uppercase mb-2">
                    Shuaif Islam Sobuj
                  </h4>
                  <p className="text-white mb-4">
                  An expert in the MERN stack, delivering seamless and efficient web applications.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-blue-400 text-white p-2 rounded-full"
                    >
                      <FaFacebookF size={30} />
                    </a>

                    <a
                      href="#"
                      className="bg-[#468420] text-white p-2 rounded-full"
                    >
                      <FaInstagram size={30} />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-300 text-white p-2 rounded-full"
                    >
                      <FaLinkedin size={30} />{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="relative inline-block bg-white shadow-md p-3 rounded-full text-[#424442] -mt-10">
                  <FaEnvelopeOpen size={30} />
                </div>
                <h4 className="text-xl font-semibold mt-4 capitalize">
                  Shuaif Islam Sobuj
                </h4>
                <span className="text-[#468420] font-semibold uppercase">
                  Mern Stack Developer
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg relative text-center p-6">
              <div className="relative overflow-hidden">
                <Image
                  src={devImage}
                  placeholder="blur"
                  alt="Team Member"
                  className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
                  layout="responsive"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <h4 className="text-white text-xl uppercase mb-2">
                    Md.Fazlul Haque
                  </h4>
                  <p className="text-white mb-4">
                  A dedicated frontend developer specializing in creating intuitive and responsive user interfaces.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-blue-400 text-white p-2 rounded-full"
                    >
                      <FaFacebookF size={30} />
                    </a>

                    <a
                      href="#"
                      className="bg-[#468420] text-white p-2 rounded-full"
                    >
                      <FaInstagram size={30} />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-300 text-white p-2 rounded-full"
                    >
                      <FaLinkedin size={30} />{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="relative inline-block bg-white shadow-md p-3 rounded-full text-[#424442] -mt-10">
                  <FaEnvelopeOpen size={30} />
                </div>
                <h4 className="text-xl font-semibold mt-4 capitalize">
                  Md.Fazlul Haque
                </h4>
                <span className="text-[#468420] font-semibold uppercase">
                  Frontend Developer
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg relative text-center p-6">
              <div className="relative overflow-hidden">
                <Image
                  src={devImage}
                  placeholder="blur"
                  alt="Team Member"
                  className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
                  layout="responsive"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <h4 className="text-white text-xl uppercase mb-2">
                    Ibrahim Khalil
                  </h4>
                  <p className="text-white mb-4">
                  A proficient WordPress developer with expertise in creating dynamic and customizable websites.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-blue-400 text-white p-2 rounded-full"
                    >
                      <FaFacebookF size={30} />
                    </a>

                    <a
                      href="#"
                      className="bg-[#468420] text-white p-2 rounded-full"
                    >
                      <FaInstagram size={30} />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-300 text-white p-2 rounded-full"
                    >
                      <FaLinkedin size={30} />{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="relative inline-block bg-white shadow-md p-3 rounded-full text-[#424442] -mt-10">
                  <FaEnvelopeOpen size={30} />
                </div>
                <h4 className="text-xl font-semibold mt-4 capitalize">
                  Ibrahim Khalil
                </h4>
                <span className="text-[#468420] font-semibold uppercase">
                  Wordpress Developer
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg relative text-center p-6">
              <div className="relative overflow-hidden">
                <Image
                  src={devImage}
                  placeholder="blur"
                  alt="Team Member"
                  className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
                  layout="responsive"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <h4 className="text-white text-xl uppercase mb-2">
                    Daloar Hossain
                  </h4>
                  <p className="text-white mb-4">
                  An experienced SEO expert optimizing websites for search engines and enhancing online visibility.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-blue-400 text-white p-2 rounded-full"
                    >
                      <FaFacebookF size={30} />
                    </a>

                    <a
                      href="#"
                      className="bg-[#468420] text-white p-2 rounded-full"
                    >
                      <FaInstagram size={30} />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-300 text-white p-2 rounded-full"
                    >
                      <FaLinkedin size={30} />{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="relative inline-block bg-white shadow-md p-3 rounded-full text-[#424442] -mt-10">
                  <FaEnvelopeOpen size={30} />
                </div>
                <h4 className="text-xl font-semibold mt-4 capitalize">
                  Daloar Hossain
                </h4>
                <span className="text-[#468420] font-semibold uppercase">
                  SEO Expert
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
