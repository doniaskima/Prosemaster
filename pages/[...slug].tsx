
import Boost from "../components/Boost";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavComponent from "../components/NavComponent";


export default function Home() {
  return (
    <> 
    <div className="relative ">
      <div className="absolute  -z-10 top-[-50rem] -left-[40rem] ">
        <img src="Group47.svg" className="relative top-[20rem]" />
      </div>
    </div>
    <NavComponent />
    <Hero />
    <Boost/>
    <Footer />
  </>
  )
}
