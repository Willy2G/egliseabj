import "./App.css";

import MyNavbar from "./components/NavBar/MyNavBar";
import VideoCarousel from "./components/VideoCarousel/VideoCarousel";
import About from "./components/About/About";
import Media from "./components/Media/Media";

function App() {
  return (
    <>
      <div className="relative bg-white">
        <MyNavbar />
        <VideoCarousel />
        <Media />
        <About />
      </div>
    </>
  );
}

export default App;
