import './App.css'
import './fonts.css'


// @ pages client
import {
  LineAbsolute,
  HeroSection,
  UserTravels,
  AboutMe
} from "./components/page.client"
import { useIsMobile } from "./hooks/use-mobile"


// @components
import HeaderUser from './components/HeaderUser'
import AsteroidMotion from './components/Asteroide'
import StarField from './components/particles'
import CornedEarth from './components/corned-earth'
import { BackgroundPaths } from './components/BackgroundPaths';
import MeteorHamburger from './components/MeteorHamburguer'

// @misc
import Separator from "./components/misc/separator";

// @pages
import Work from "./components/pages/work";

function App() {

  return (
    <>
      <div className="relative isolate flex min-h-screen flex-col bg-ln-gray-25 ">
          <div className="z-[9999] relative md:hidden">
            <MeteorHamburger/>
          </div>
          <div className="pt-10 absolute top-0 left-0 h-screen w-full">
            <AsteroidMotion />
          </div>
       
        <HeaderUser />
        <LineAbsolute />
        

        

        <HeroSection />

        <div className=" container pointer-events-none mt-[200px] md:mt-[225px] ">
          <div className="">
            {!useIsMobile() ? (
              <>
                 <StarField />   
              </>
            ) : (
              <>
              
              </>
            )}
           
            <CornedEarth />
          </div>
        </div>

        <div className="container pointer-events-none !pl-0 !pr-0 -z-10  select-none mac:block">
          <div className="border-t border-color w-full">
            
          </div>
        </div>

        <UserTravels />

        <Separator/>

        <AboutMe/>

        <Work/>

        <div className="-z-10 container pointer-events-none mt-[-71px] mb-[225px]  rotate-180 transform invert-orbit">
          <div className="">
        
            <CornedEarth />
          </div>
        </div>

        <div className="container !px-0 mx-0 mac:block">
          <BackgroundPaths/>
        </div>

      </div>
    </>
  )
}

export default App
