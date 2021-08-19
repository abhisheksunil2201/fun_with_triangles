import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className="description">
        <h1 className="heading">Fun With Triangles</h1>
        <p>A series of fun games to check your knowlege on triangles.</p>
      </div>
      <div className="games">
        <div className="box-1">
          <ul className="games-list">
            <Link to="/triangleOrNot">
              <li key="game-1">Is It A Triangle?</li>
            </Link>
            <Link to="/findHypotenuse">
              <li key="game-2">Find The Hypotenuse</li>
            </Link>
          </ul>
        </div>
        <div className="box-2">
          <ul className="games-list">
            <Link to="/calculateArea">
              <li key="game-3">Area Calculator</li>
            </Link>
            <Link to="/whichTriangle">
              <li key="game-4">Which Triangle Is This?</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainPage;
