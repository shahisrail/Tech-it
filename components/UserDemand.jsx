import Website from "@/public/website-development.png";
import ecommerce from "@/public/e-commerce.png";
import bloggingplatfoem from "@/public/blogging-platfoem.png";

import Image from "next/image";
import Link from "next/link";
const UserDemand = () => {
  return (
    <>

    
      <div className=" text-center mt-24 mb-10">
        <h1 className="text-[#000000ba]  text-2xl md:text-4xl font-bold">
          {" "}
          Share Your Demand to Design Any Customized Website
        </h1>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
     gap-5 my-10"
      >
        <div className=" space-y-4 rounded-lg bg-white py-5 px-5 shadow-lg hover:bg-[#D8F3D3]   dark:bg-[#18181B]">
          <Image src={Website} alt="Website" placeholder="blur" />
          <div className="grid gap-2">
            <h1 className="text-lg font-semibold ">Website Development</h1>
            <p className="text-sm text-gray-500 dark:text-white/60">
              A website can represent your business identity we can develop it
              according to the motive of your business.
            </p>
          </div>
        </div>
        <div className=" space-y-4 rounded-lg bg-white p-6 shadow-lg py-5 px-5 hover:bg-[#D8F3D3]   dark:bg-[#18181B]">
          <Image src={ecommerce} alt="Website" placeholder="blur" />
          <div className="grid gap-2">
            <h1 className="text-lg font-semibold ">E-Commerce</h1>
            <p className="text-sm text-gray-500 dark:text-white/60">
              We have readymade eCommerce software solutions as well as develop
              the eCommerce solution based on your demand.
            </p>
          </div>
        </div>
        <div className=" space-y-4 rounded-lg bg-white p-6 shadow-lg py-5 px-5 hover:bg-[#D8F3D3]   dark:bg-[#18181B]">
          <Image src={bloggingplatfoem} alt="Website" placeholder="blur" />
          <div className="grid gap-2">
            <h1 className="text-lg font-semibold ">Blogging Platform</h1>
            <p className="text-sm text-gray-500 dark:text-white/60">
              We can develop an SEO-friendly content management system to
              publish blogs, articles, online news, and so on.
            </p>
          </div>
        </div>
        <div className=" space-y-4 rounded-lg bg-white p-6 shadow-lg py-5 px-5 hover:bg-[#D8F3D3]   dark:bg-[#18181B]">
          <div className="grid gap-2">
            <h1 className="text-lg font-semibold  text-center">
              Custom Website Development
            </h1>

            <Link href={"/contactUs"}>
              <button className="btn btn-success bg-[#468420] border-[#468420] py-3 px-4 text-[#fff] animate-text ">
                <h2> Submit Request</h2>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDemand;
