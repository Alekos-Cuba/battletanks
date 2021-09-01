import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainMenu from "./components/MainMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <Switch>
          <Route path="/" exact component={MainMenu}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
