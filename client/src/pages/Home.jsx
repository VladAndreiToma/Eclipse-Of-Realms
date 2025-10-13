import NavBar from "../components/navigation/NavBar";
import FooterPreBanner from "../FooterPreBanner";
import Footer from "./Footer";
import ChampionTableau from "./home_functionalities/ChampionTableau";
import HomeTableau from "./home_functionalities/HomeTableau";
import MainArticles from "./home_functionalities/MainArticles";
import RealmWorldActs from "./home_functionalities/RealmWorldActs";
import StrongholdCustomizations from "./home_functionalities/StrongholdCustomizations";
export default function Home(){
    return(
        <div className="page">
            <NavBar/>
            <div className="page-tableau">
                <HomeTableau/>
            </div>
            <div className="page-tableau">
                <RealmWorldActs/>
            </div>
            <div className="page-tableau">
                <MainArticles/>
            </div>
            <div className="page-tableau">
                <ChampionTableau/>
            </div>
            <div className="page-tableau">
                <StrongholdCustomizations/>
            </div>
            <FooterPreBanner/>
            <Footer/>
        </div>
    );
}