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

//Containers
import HomeContainer from "./containers/home-container";
import Header from "./components/header";
import CreatePostContainer from "./containers/create-post-container";
import PostDetailsContainer from "./containers/post-details-container";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header */}
        <Header />
        <Switch>
          {/* Home Routes */}
          <Route exact path="/" render={() => <Redirect to="home" />} />
          <Route path="/home" component={HomeContainer} exact />
          <Route path="/post-details" component={PostDetailsContainer} />
          <Route path="/create-post" component={CreatePostContainer} />
        </Switch>
        {/* Footer Area */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
