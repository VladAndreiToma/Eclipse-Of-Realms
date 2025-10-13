import NavBar from "../components/navigation/NavBar";
import FooterPreBanner from "../FooterPreBanner";
import Footer from "./Footer";
import CombatSystem from "./how_to_play_functionalitites/CombatSystem";
import DailyRewards from "./how_to_play_functionalitites/DailyRewards";
import GameModes from "./how_to_play_functionalitites/GameModes";
import IntroBanner from "./how_to_play_functionalitites/IntroBanner";
import KnowingTheGame from "./how_to_play_functionalitites/KnowingTheGame";
import ClassesOfNPCs from "./how_to_play_functionalitites/NPCsClasses";
import PlanYourStrategy from "./how_to_play_functionalitites/PlanYourStrategy";
import WhatIsEclipseOfRealms from "./how_to_play_functionalitites/WhatIsEclipseOfRealms";

export default function HowToPlay(){
    return(
        <div className='page' style={{position:"relative"}}>
            <NavBar/>
            <div className="page-tableau">
                <IntroBanner/>
            </div>
            <div className="page-tableau">
                <KnowingTheGame/>
            </div>
            <div className="page-tableau">
                <WhatIsEclipseOfRealms/>
            </div>
            <div className="page-tableau">
                <GameModes/>
            </div>
            <div className="page-tableau">
                <ClassesOfNPCs/>
            </div>
            <div className="page-tableau">
                <CombatSystem/>
            </div>
            <div className="page-tableau">
                <PlanYourStrategy/>
            </div>
            <div className="page-tableau">
                <DailyRewards/>
            </div>
            <FooterPreBanner/>
            <Footer/>
        </div>
    );
}