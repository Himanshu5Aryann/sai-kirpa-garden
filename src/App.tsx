import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Weddings from "./pages/Weddings";
import Banquets from "./pages/Banquets";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cancellation from "./pages/Cancellation";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  return (
    <>
      <LoadingScreen />
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/banquets" element={<Banquets />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/cancellation-policy" element={<Cancellation />} />
            <Route path="/booking-policy" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </>
  );
}
