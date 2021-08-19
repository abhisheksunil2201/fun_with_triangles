import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CalculateArea from "./components/CalculateArea";
import FindHypotenuse from "./components/FindHypotenuse";
import MainPage from "./components/MainPage";
import TriangleOrNot from "./components/TriangleOrNot";
import WhichTriangle from "./components/WhichTriangle";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/triangleOrNot" component={TriangleOrNot} />
          <Route path="/findHypotenuse" component={FindHypotenuse} />
          <Route path="/calculateArea" component={CalculateArea} />
          <Route path="/whichTriangle" component={WhichTriangle} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
