import "./App.css";
import Playlists from "./components/Playlists";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { Helmet } from 'react-helmet';



function App() {
  return (
    <div className="App">
      <Helmet>
        <title>AK's Playlists</title>
      </Helmet>      
      
      <Landing />

      <Playlists />

      <Footer />
    
    </div>
  );
}

export default App;
