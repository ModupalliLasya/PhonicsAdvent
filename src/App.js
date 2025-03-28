import './App.css';
import { FaDove } from 'react-icons/fa';
import {FaFeatherAlt} from "react-icons/fa"
import {GiTwirlyFlower} from "react-icons/gi"
import {GiButterfly} from "react-icons/gi"
import { Link } from "react-router-dom";
import Greeting from './components/Greeting';
import Points from "./components/Points"

function App() {
  return (
    <div className="App">
      <main>
           <div className="heading"><h1 className="title">Phonics<span className="title-span">Adventure</span></h1></div>
              <Greeting />
              <section className="home-section">
                  <Link to="games">
                  <div className="quiz-button">
                      <div> 
                        <h2>Games</h2>
                        <p>Practice your sounds</p>
                      </div>
                      <GiTwirlyFlower className="feather" />
                    </div>
                  </Link>
              </section>
        <Points />
          </main>
    </div>
  );
}

export default App;
