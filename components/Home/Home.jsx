import About from "@/components/about/about";
import Banner from "@/components/Banner";
import ClientsReviews from "@/components/ClientsReviews";
import OurTeam from "@/components/OurTeam/OurTeam";
import Indrustryser from "../Indrustryser";
import UserDemand from "../UserDemand";
const Home = () => {
  return (
    <main className="  bg-[#F4FAF3]">
        <Banner />
      <div className="max-w-screen-xl mx-auto p-3 md:p-0">
        <About></About>
        {/* <OurSolutoins /> */}
        <Indrustryser/>
        <UserDemand/>
        <OurTeam />
        <ClientsReviews />
      </div>
    </main>
  );
};

export default Home;
