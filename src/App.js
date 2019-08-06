import React from "react";

//Route
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

//Components
import Footer from "./components/footer";
import Header from "./components/header";

//Containers
import HomeContainer from "./containers/home-container";
import CreatePostContainer from "./containers/create-post-container";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header */}
        <Header />
        <Switch>
          {/* Home Routes */}
          <Route exact path="/" render={() => <Redirect to="home" />} />
          <Route path="/home" render={props => <HomeContainer {...props} />} />
          <Route
            path="/create-post"
            render={props => <CreatePostContainer {...props} />}
          />
        </Switch>
        {/* Footer Area */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
