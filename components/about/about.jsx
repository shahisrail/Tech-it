import aboutImage from "@/assets/workProcess/About.png";
import mission from "@/assets/workProcess/mission.jpg";
import vission from "@/assets/workProcess/vission.jpg";
import Image from "next/image";
import Link from "next/link";
import "./about.css";
export const metadata = {
  title: "Tech It |About Us",
  description:
    "Tech It web development app development software development wordpress seo ",
};
const About = () => {
  return (
    <>
      {/* about us  */}

      <div className="md:flex flex-row justify-center items-center md:gap-10 md:my-24" id="about-us">
        <div className="text-center md:text-start">
          <h2 className="text-[#000000ba]  text-xl md:text-4xl font-bold  animate-text">
            About Tech It
          </h2>
          <p className="md:mt-5 mt-2 text-center md:text-start text-sm md:text-lg font-normal animate-text ">
  At Tech It, we are passionate about crafting exceptional digital experiences. Founded on the belief that technology can transform businesses, our team of skilled developers and designers work tirelessly to bring your ideas to life. Whether it&apos;s a dynamic website, a powerful e-commerce platform, or a custom web application, we blend creativity with technology to deliver solutions that not only meet your needs but also exceed your expectations. Our commitment to quality and innovation drives us to stay ahead of the curve, ensuring that we provide cutting-edge services that help your business thrive in a digital-first world.
</p>

        
          <Link href={"/contactUs"}>
            <button className="btn btn-success bg-[#468420] border-[#468420] py-3 px-4 text-[#fff] animate-text mt-4">
              <h2> Contact</h2>
            </button>
          </Link>
        </div>
        <div className="bg-white rounded-md  animate-bounce my-5 md:my-0">
          <Image
            className="max-w-full rounded-lg shadow-lg md:max-w-[500px]"
            src={aboutImage}
            placeholder="blur"
            alt="About Tech It"
          />
        </div>
      </div>
      {/* our mission  */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:gap-10 my-3 md:my-24">
        <div className="bg-white rounded-md  animate-bounce my-5 md:my-0  ">
          <Image
            className="max-w-full rounded-lg shadow-lg md:max-w-[500px] order-last md:order-first" 
            src={mission}
            alt="Picture of the author"
            placeholder="blur"
          />
        </div>
        <div className=" text-center md:text-start ">
          <h2 className="text-[#000000ba] text-xl md:text-4xl font-bold animate-text order-first md:order-last">
            Our mission
          </h2>
          <p className="md:mt-5 word text-sm md:text-lg font-normal 	line-height:1rem animate-text animate-title mt-2 order-first md:order-last">
          Our mission is to empower businesses by providing innovative, reliable, and scalable web solutions. We strive to create digital products that are not just functional but also user-friendly and visually compelling. Through our dedication to excellence and customer satisfaction, we aim to be a trusted partner in your digital transformation journey.
          </p>
          <Link href={"/contactUs"}>
            <button className="btn btn-success bg-[#468420] border-[#468420] py-3 px-4 text-[#fff] animate-text mt-4">
              <h2> Contact</h2>
            </button>
          </Link>
        </div>
      </div>
      {/* our vission  */}
      <div className="md:flex flex-row justify-center items-center md:gap-10 md:my-24">
        <div className=" text-center md:text-start ">
          <h2 className=" text-[#000000ba] text-xl md:text-4xl font-bold animate-text">
            Our Vission
          </h2>
          <p className="md:mt-5 mt-2 text-center md:text-start text-sm md:text-lg font-normal animate-text">
          Our vision is to be a global leader in web development, recognized for our creativity, technical expertise, and ability to deliver impactful solutions. We envision a future where every business, regardless of size, can leverage the power of the web to reach new heights, connect with customers, and achieve lasting success. At Tech It, we are committed to building that future, one project at a time.
          </p>
          <Link href={"/contactUs"}>
            <button className="btn btn-success bg-[#468420] border-[#468420] py-3 px-4 text-[#fff] animate-text mt-4">
              <h2> Contact</h2>
            </button>
          </Link>
        </div>
        <div className="bg-white rounded-md  animate-bounce my-5 md:my-0 ">
          <Image
            className=" rounded-lg shadow-lg md:max-w-[500px] md:h-[417px]"
            src={vission}
            placeholder="blur"
            alt="Picture of the author"
           
          />
        </div>
      </div>
    </>
  );
};

export default About;
