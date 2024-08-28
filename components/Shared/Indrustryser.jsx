import Image from "next/image";
import healthcareImg from '/public/healthcare.png';
import ECommerce from "public/ecommerce.png";
import Education from "public/Education.png";
import RealEstate from "public/real-estate.png";
import Hospitality from "public/Hospitality.png";
import Pharmacy from "public/Pharmacy.png";
import UIUx from "public/Ui-Ux.png";
import more from "public/more.png";
const Indrustryser = () => {
  return (
    <>
      <div className="text-center my-5">
        <h2 className="text-green-500  text-2xl md:text-4xl font-bold">
          Industry We Serve
        </h2>
        <p>Bridge Your Business with the Virtual World</p>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-2">
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src="/public/healthcare.png" placeholder="blur" alt="About Tech It" />
          </div>
          <div className="text-lg font-semibold">Healthcare</div>
        </div>
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src="/public/ecommerce.png" placeholder="blur" alt="About Tech It" />
          </div>
          <div className="text-lg font-semibold">E-Commerce</div>
        </div>
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src="/public/Education.png" placeholder="blur" alt="About Tech It" />
          </div>
          <div className="text-lg font-semibold">Education
          </div>
        </div>
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src="/public/real-estate" placeholder="blur" alt="About Tech It" />
          </div>
          <div className="text-lg font-semibold">Real-Estate</div>
        </div>
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src="/public/Hospitality.png" placeholder="blur" alt="About Tech It" />
          </div>
          <div className="text-lg font-semibold">Hospitality
          </div>
        </div>
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src="/public/Pharmacy.png" placeholder="blur" alt="About Tech It" />
          </div>
          <div className="text-lg font-semibold">Pharmacy
          </div>
        </div>
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src="/public/Ui-Ux.png" placeholder="blur" alt="About Tech It" />
          </div>
          <div className="text-lg font-semibold">UI/Ux

          </div>
        </div>
        <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <div className="flex justify-center">
            <Image src="/public/more.png" placeholder="blur" alt="About Tech It" />
          </div>
          <div className="text-lg font-semibold">Many more
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Indrustryser;
