import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Fotter = () => {
  return (
   <div className="bg-[#F4FAF3]">
     <footer className="footer  text-base-content p-10 max-w-7xl mx-auto">
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={120} height={110} />
      </Link>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href={"/service"} className="link link-hover">Web Development</Link>
    
        <Link href={"/service"} className="link link-hover">SEO</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href={"/#about-us"} className="link link-hover">About us</Link>
        <Link href={"/contactUs"} className="link link-hover">Contact</Link>
        {/* <Link href={"/jobs"} className="link link-hover">Jobs</Link> */}
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href={"/terms"} className="link link-hover">Terms of use</Link>
        <Link href={"/privacy"} className="link link-hover">Privacy policy</Link>
      </nav>
    </footer>
   </div>
  );
};

export default Fotter;
