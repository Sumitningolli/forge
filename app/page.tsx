import AboutPage from "./About/page";
import Calltoaction from "./CalltoAction/page";
import Hero from "./Hero/page";
import Manufacture from "./Manufacture/page";
import Navbar from "./Navbar/page";
import Portfolio from "./Portfolio/page";
import Process from "./Process/page";
import VideoSection from "./VideoSection/page";


export default function Home() {
  return (
   <div className="">
   
    <Navbar/>
    <Hero/>
    <VideoSection/>
    <AboutPage/>
    <Process/>
    <Portfolio/>
    <Calltoaction/>
    <Manufacture/>
   </div>
  );
}
