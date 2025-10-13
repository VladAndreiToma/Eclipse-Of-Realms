import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HowToPlay from './pages/HowToPlay';
import Champions from './pages/Champions';
import News from './pages/News';
import PatchNotes from './pages/PatchNotes';
import Discover from './pages/Discover';
import Esports from './pages/Esports';
import More from './pages/More';
import "./App.css";
import "./pages/news_components/News.css";
import UserAction from './pages/user_business_logic/UserAction';
import Register from './pages/user_business_logic/Register';
import Login from './pages/user_business_logic/Login';
import EpisodesOfRealms from './pages/details/EpsiodesOfRealms';
import Warriors from './pages/details/WarriorsDetails';
import Rogues from './pages/details/Rogues';
import Mages from './pages/details/Mages';
import Beasts from './pages/details/Beasts';
import Marksmen from './pages/details/Marksmen';
import Fiends from './pages/details/Fiends';
import Supporters from './pages/details/Supporters';
import Tanks from './pages/details/Tanks';
import Pyrothar from './pages/details/episodes/Pyrothar';
import Frostmere from './pages/details/episodes/Frostmere';
import NewsHero from './pages/news_components/NewsHero';
import NewsRealm from './pages/news_components/NewsRealm';
import NewsPVP from './pages/news_components/NewsPVP';
import NewsUpdate from './pages/news_components/NewsUpdate';
import NewsEvent from './pages/news_components/NewsEvent';
import Profile from './pages/user_business_logic/Profile';
import Landmark from './pages/details/episodes/Landmark';

export default function App(){
  return(
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/how-to-play' element={<HowToPlay/>}/>
          <Route path="/champions" element={<Champions/>}/>
          
          <Route path="/news" element={<News/>}/>
          <Route path='/news/hero' element={<NewsHero/>}/>
          <Route path='/news/realm' element={<NewsRealm/>}/>
          <Route path='/news/pvp' element={<NewsPVP/>}/>
          <Route path='/news/update' element={<NewsUpdate/>}/>
          <Route path = "/news/event" element={<NewsEvent/>}/>

          <Route path="/patch-notes" element={<PatchNotes/>}/>
          <Route path="/discover" element={<Discover/>}/>
          <Route path="/esports" element={<Esports/>}/>
          <Route path='/more' element={<More/>}/>
          <Route path='/user-action' element={<UserAction/>}/>
          
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          
          <Route path='/discover/episodes-of-realms' element={<EpisodesOfRealms/>}/>
          <Route path='/discover/episodes-of-realms/pyrothar/*' element={<Pyrothar/>}/>
          <Route path='/discover/episodes-of-realms/frostmere/*' element={<Frostmere/>}/>
          <Route path='/discover/episodes-of-realms/pyrothar/:landmark' element={<Landmark/>}/>
          <Route path='/discover/episodes-of-realms/frostmere/:landmark' element={<Landmark/>}/>
          
          <Route path='/warriors' element={<Warriors/>}/>
          <Route path='/rogues' element={<Rogues/>}/>
          <Route path='/mages' element={<Mages/>}/>
          <Route path='/beasts' element={<Beasts/>}/>
          <Route path='/marksmen' element={<Marksmen/>}/>
          <Route path='/fiends' element={<Fiends/>}/>
          <Route path='/supporters' element={<Supporters/>}/>
          <Route path='/tanks' element={<Tanks/>}/>


        </Routes>
      </Router>
  )
}
