import Image from "next/image";
import imageBg from '@/assets/Services/serviceBg.jpg'
import './service.css'

const ServiceBanner = () => {
    return (
        <div>
            <div>
                {/* <Image className="h-[420px] bg-cover" src={imageBg} width={'full'} height={''} alt="banner" /> */}
                <div className="serviceBg ">
                   <div className="bg-black/70 h-[calc(100vh-420px)] pt-10 px-5 lg:px-0">
                   <h1 className="bg-white font-black lg:text-4xl text-green-500 lg:max-w-[20%] text-center mx-auto rounded-md py-4 shadow-md">Our Services</h1>
                   <p className="text-center bg-white rounded-md lg:max-w-[20%] mx-auto mt-4 py-2 shadow-md font-bold ">You will find whatever you need!</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;