
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllEvents from './Components/Screens/AllEvents/AllEvents';
import './App.css';
import Footer from './Components/Partials/Footer/Footer';
import ContactUs from './Components/Screens/ContactUs/ContactUs';
import Courses from './Components/Screens/Courses/Courses';
import Home from './Components/Screens/Home/Home';
import MembershipOverview from './Components/Screens/MemberShip/MembershipOverview/MembershipOverview';
import News from './Components/Screens/News/News';
import NewsDetails from './Components/Screens/News/NewsDetails/NewsDetails';
import EventDetails from './Components/Screens/AllEvents/EventDetails/EventDetails';
import OurBoard from './Components/Screens/OurBoard/OurBoard';
import Career from './Components/Screens/Career/Career';
import WeAreCilt from './Components/Screens/WeAreCilt/WeAreCilt';
import KnowledgeCenter from './Components/Screens/KnowledgeCenter/KnowledgeCenter';
import CorporateMembership from './Components/Screens/CorporateMembership/CorporateMembership';
import JoinCilt from './Components/Screens/JoinCilt/JoinCilt';
import YoungProfession from './Components/Screens/YoungProfession/YoungProfession';
import WomenLogistics from './Components/Screens/WomenLogistics/WomenLogistics';
import AboutUs from './Components/Screens/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/news' element={<News />} />
          <Route path='/news-details/:newsId' element={<NewsDetails />} />
          <Route path='/allEvents' element={<AllEvents />} />
          <Route path='/membershipOverview' element={<MembershipOverview />} />
          <Route path='/eventDetails/:id' element={<EventDetails />} />
          <Route path='/ourBoard' element={<OurBoard />} />
          <Route path='/career' element={<Career />} />
          <Route path='/weAreCilt' element={<WeAreCilt />} />
          <Route path='/knowledgeCenter' element={<KnowledgeCenter />} />
          <Route path='/corporateMembershipOverview' element={<CorporateMembership />} />
          <Route path='/joinCilt' element={<JoinCilt />} />
          <Route path='/youngProfession' element={<YoungProfession />} />
          <Route path='/womenInLogistics' element={<WomenLogistics />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
