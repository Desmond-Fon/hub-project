import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import CurrentPartners from "./pages/currentPartners";
import Contact from "./pages/contact";
import Members from "./pages/members";
import JoinUs from "./pages/joinUs";
import Register from "./pages/register";
import Footer from "./components/Footer";
import PartnerDetails from "./pages/partnerDetails"; 
import BlogDetails from "./pages/blogDetails";
import Events from "./pages/events";
import Partner from './pages/partner';
// import Header from './components/Header';

function App() {
  return (
    <div className="bg-background">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/members" element={<Members />} />
          <Route path="/register" element={<Register />} />
          <Route path="/joinUs" element={<JoinUs />} />
          <Route path="/currentPartners" element={<CurrentPartners />} />
          <Route path="/partnerDetails" element={<PartnerDetails />} />
          <Route path = "/events" element = {<Events />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
