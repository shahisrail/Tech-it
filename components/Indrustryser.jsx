import Image from "next/image";
import vission from "@/assets/workProcess/vission.jpg";
import Healthcare from "../assets/indeustry/healthcare.png";
import ECommerce from "@/assets/indeustry/ecommerce.png";
import Education from "@/assets/indeustry/Education.png";
import RealEstate from "@/assets/indeustry/real-estate.png";
import Hospitality from "@/assets/indeustry/Hospitality.png";
import Pharmacy from "@/assets/indeustry/Pharmacy.png";
import UIUx from "@/assets/indeustry/Ui-Ux.png";
import more from "@/assets/indeustry/more.png";
const Indrustryser = () => {
  return (
    <div>
      <div className="text-center my-5">
        <h2 className="text-green-500  text-2xl md:text-4xl font-bold">
          Industry We Serve
        </h2>
        <p>Bridge Your Business with the Virtual World</p>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-2">
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src={vission} alt="About Tech It" placeholder="blur" />
          </div>
          <div className="text-lg font-semibold">Healthcare</div>
        </div>
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src={ECommerce} placeholder="blur" alt="About Tech It" />
          </div>
          <div className="text-lg font-semibold">E-Commerce</div>
        </div>
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src={Education} placeholder="blur" alt="About Tech It" />
          </div>
          <div className="text-lg font-semibold">Education</div>
        </div>
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src={RealEstate} placeholder="blur" alt="About Tech It" />
          </div>
          <div className="text-lg font-semibold">Real-Estate</div>
        </div>
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src={Hospitality} placeholder="blur" alt="About Tech It" />
          </div>
          <div className="text-lg font-semibold">Hospitality</div>
        </div>
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src={Pharmacy} placeholder="blur" alt="About Tech It" />
          </div>
          <div className="text-lg font-semibold">Pharmacy</div>
        </div>
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src={UIUx} placeholder="blur" alt="About Tech It" />
          </div>
          <div className="text-lg font-semibold">UI/Ux</div>
        </div>
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src={more} placeholder="blur" alt="About Tech It" />
          </div>
          <div className="text-lg font-semibold">Many more</div>
        </div>
      </div>
    </div>
  );
};

export default Indrustryser;
