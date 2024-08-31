"use client";

import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa6";

const WhatsappMessenger = () => {
  return (
    <>
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/8801741027141"
        target="_blank"
        className="bg-[#4E8520] w-min p-2 rounded-full fixed 
          bottom-[7rem] right-4 cursor-pointer md:right-8"
      >
        <FaWhatsapp color="white" className="w-7 h-7 md:w-10 md:h-10" />
      </a>

      {/* Messenger Icon */}
      <a
        href="https://m.me/shah.israil.96592"
        target="_blank"
        className="bg-blue-600 w-min p-2 rounded-full fixed 
          bottom-10 right-4 cursor-pointer md:right-8"
      >
        <FaFacebookMessenger color="white" className="w-7 h-7 md:w-10 md:h-10" />
      </a>
    </>
  );
};

export default WhatsappMessenger;
