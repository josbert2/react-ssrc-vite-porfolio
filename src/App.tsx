import './App.css'
import './fonts.css'


// @ pages client
import {
  LineAbsolute,
  HeroSection,
  UserTravels,
  AboutMe
} from "./components/page.client"


// @components
import HeaderUser from './components/HeaderUser'
import AsteroidMotion from './components/Asteroide'
import StarField from './components/particles'
import CornedEarth from './components/corned-earth'
import { BackgroundPaths } from './components/BackgroundPaths';

// @misc
import Separator from "./components/misc/separator";

// @pages
import Work from "./components/pages/work";

function App() {

  return (
    <>
      <div className="relative isolate flex min-h-screen flex-col bg-ln-gray-25 ">
        <HeaderUser />
        <LineAbsolute />
        

        <div className="pt-10 absolute top-0 left-0 h-full w-full">
          <AsteroidMotion />
        </div>

        <HeroSection />

        <div className=" container pointer-events-none mt-[225px] ">
          <div className="">
            <StarField />   
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

        <div className="container pointer-events-none !px-0 mx-0  select-none mac:block">
          <BackgroundPaths/>
        </div>

      </div>
    </>
  )
}

export default App
