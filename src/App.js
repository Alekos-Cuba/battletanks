import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainMenu from "./components/MainMenu";
import Battleground from "./components/Battleground";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HowToPlay from "./components/HowToPlay";

function App() {
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <Switch>
          <Route path="/" exact component={MainMenu}></Route>
          <Route path="/game" component={Battleground}></Route>
          <Route path="/howtoplay" component={HowToPlay}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
