import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './screens/LandingPage/index';
import OurBlog from './screens/LandingPage/OurBlog';
// import Testimonials from './screens/LandingPage/ContactUs';
import Works from './screens/LandingPage/Works';
import AboutUs from './screens/LandingPage/AboutUs';
import ContactUs from './screens/LandingPage/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Index />} />
        </Route>
        <Route path='/works' element={<Navbar/>}>
          <Route index element={<Works/>}/>
        </Route>
        <Route path='/about' element={<Navbar/>}>
          <Route index element={<AboutUs/>}/>
        </Route>
        <Route path='/blogs' element={<Navbar/>}>
          <Route index element={<OurBlog/>}/>
        </Route>
        <Route path='/contactus' element={<Navbar/>}>
          <Route index element={<ContactUs/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
