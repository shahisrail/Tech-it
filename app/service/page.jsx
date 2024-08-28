"use client";


import laravelPhp from "@/assets/Services/laravelPhp.png";
import mern from "@/assets/Services/mern.png";
import wordpress from "@/assets/Services/wordpress.png";
import ServiceBanner from "@/components/Service/ServiceBanner";
import webflow from "@/public/webflow.png";
import Image from "next/image";

import Indrustryser from "@/components/Indrustryser";
import seo from "@/public/SEO-PNG-Images-removebg-preview.png";


function page() {
  return (
    <div>
      <ServiceBanner />
      <h2 className="text-center text-green-500 my-5 p-2 text-2xl md:text-4xl font-bold">
        Transform Your Vision Into Reality Design Any Customized Website
      </h2>
      <div className="max-w-screen-xl mx-auto mt-10 p-3 md:p-0 " id="web-development">
        <div>
          <div className="flex justify-center">
            <h1 className="font-black text-lg border-2 border-black text-center py-2 shadow-md w-40">
              Technologies
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="shadow-md p-4 rounded-md" >
              <div className="flex justify-center">
                <Image
                  placeholder="blur"
                  className="md:w-[400px]"
                  src={mern}
                  alt="custom web"
                />
              </div>
              <h3 className="mt-4 md:text-xl font-bold bg-white shadow-md text-center py-2 rounded-md cursor-pointer hover:bg-green-500 hover:text-white transition-all ease-in-out duration-200">
                MERN Stack
              </h3>
            </div>
            <div className="shadow-md p-4 rounded-md">
              <div className="flex justify-center">
                <Image
                  placeholder="blur"
                  className="md:w-[400px]"
                  src={laravelPhp}
                  alt="custom web"
                />
              </div>
              <h3 className="mt-4 md:text-xl font-bold bg-white shadow-md text-center py-2 rounded-md cursor-pointer hover:bg-green-500 hover:text-white transition-all ease-in-out duration-200">
                Laravel PHP
              </h3>
            </div>
            <div className="shadow-md p-4 rounded-md">
              <div className="flex justify-center">
                <Image
                  placeholder="blur"
                  className="md:w-[400px]"
                  src={wordpress}
                  alt="custom web"
                />
              </div>
              <h3 className="mt-4 md:text-xlfont-bold bg-white shadow-md text-center py-2 rounded-md cursor-pointer hover:bg-green-500 hover:text-white transition-all ease-in-out duration-200">
                Wordpress
              </h3>
            </div>
            <div className="shadow-md p-4 rounded-md">
              <div className="flex justify-center">
                <Image
                  className="md:w-[400px]"
                  placeholder="blur"
                  src={webflow}
                  alt="custom web"
                />
              </div>
              <h3 className="mt-4 md:text-xl font-bold bg-white shadow-md text-center py-2 rounded-md cursor-pointer hover:bg-green-500 hover:text-white transition-all ease-in-out duration-200">
                Webflow
              </h3>
            </div>
            <div className="shadow-md p-4 rounded-md"  >
              <div className="flex justify-center">
                <Image  src={seo} alt="custom web" placeholder="blur" />
              </div>
              <h3 className="mt-4 md:text-xl font-bold bg-white shadow-md text-center py-2 rounded-md cursor-pointer hover:bg-green-500 hover:text-white transition-all ease-in-out duration-200">
              Seo
              </h3>
            </div>
          </div>
        </div>
      </div>{" "}
  <div className="max-w-screen-xl mx-auto">
  <Indrustryser/>
  </div>
    </div>
  );
}

export default page;
