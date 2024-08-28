import ECommerce from "@/public/ecommerce.png";
import Education from "@/public/Education.png";
import healthcare from "@/public/healthcare.png";
import Hospitality from "@/public/Hospitality.png";
import more from "@/public/more.png";
import Pharmacy from "@/public/Pharmacy.png";
import RealEstate from "@/public/real-estate.png";
import UIUx from "@/public/Ui-Ux.png";
import Image from "next/image";
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
    <Image src={healthcare} alt="healthcare" placeholder="blur" />
    </div>
    <div className="text-lg font-semibold">Healthcare</div>
  </div>

  <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
    <div className="flex justify-center">
      <Image 
        src={ECommerce}
        placeholder="blur" 
        alt="E-Commerce" 

      />
    </div>
    <div className="text-lg font-semibold">E-Commerce</div>
  </div>

  <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
    <div className="flex justify-center">
      <Image 
       src={Education}
        placeholder="blur" 
        alt="Education" 
       
      />
    </div>
    <div className="text-lg font-semibold">Education</div>
  </div>

  <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
    <div className="flex justify-center">
      <Image 
        src={RealEstate}
        placeholder="blur" 
        alt="Real-Estate" 
      
      />
    </div>
    <div className="text-lg font-semibold">Real-Estate</div>
  </div>

  <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
    <div className="flex justify-center">
      <Image 
         src={Hospitality}
        placeholder="blur" 
        alt="Hospitality" 
       
      />
    </div>
    <div className="text-lg font-semibold">Hospitality</div>
  </div>

  <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
    <div className="flex justify-center">
      <Image 
      src={Pharmacy}
        placeholder="blur" 
        alt="Pharmacy" 
      
      />
    </div>
    <div className="text-lg font-semibold">Pharmacy</div>
  </div>

  <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
    <div className="flex justify-center">
      <Image 
        src={UIUx} 
        placeholder="blur" 
        alt="UI/UX" 
      
      />
    </div>
    <div className="text-lg font-semibold">UI/Ux</div>
  </div>

  <div className="space-y-4 text-center rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
    <div className="flex justify-center">
      <Image 
   src={more}
        placeholder="blur" 
        alt="Many more" 
      
      />
    </div>
    <div className="text-lg font-semibold">Many more</div>
  </div>
</div>

    </div>
  );
};

export default Indrustryser;
