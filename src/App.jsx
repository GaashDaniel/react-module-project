import { useEffect, useState } from 'react';
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '@fontsource/assistant';
import './styles/App.css';
import guestUser from './utils/guestUser';
import RegisterModal from "./modals/RegisterModal";
import LoginModal from "./modals/LoginModal";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import MyCards from './pages/MyCards';
import Favorites from './pages/Favorites';
import Business from './pages/Business';
import PageNotFound from './pages/PageNotFound';


function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || guestUser);

  const location = useLocation();
  useEffect(() => {
    scrollTo(0, 0);
  }, [location.pathname, location.search]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get('query') || "");
  useEffect(() => {
    setSearchQuery(searchParams.get('query') || "");
  }, [searchParams.get('query')]);

  return (
    <>
      <NavBar {...{ user, setUser, searchQuery, setSearchQuery, searchParams, setSearchParams }} />

      <Routes>
        <Route path='/' element={<Home searchQuery={searchQuery} user={user} />} />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites searchQuery={searchQuery} user={user} />} />
        <Route path='/my-cards' element={<MyCards searchQuery={searchQuery} user={user} />} />
        <Route path='/business/:businessId' element={<Business user={user} />} />
        <Route path='/profile' element={<Profile {...{ user, setUser }} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

      <LoginModal isOpen={location.hash === '#login'} setUser={setUser} />
      <RegisterModal isOpen={location.hash === '#register'} setUser={setUser} />
      <ToastContainer theme={localStorage.getItem('theme') || 'light'} />
      <Footer {...{ user, setUser }} />
    </>
  );
};

export default App