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
import PostDetails from "./components/post-details";

//Containers
import HomeContainer from "./containers/home-container";
import Header from "./components/header";
import CreatePost from "./components/create-post";

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
          <Route path="/post-details" component={PostDetails} />
          <Route path="/create-post" component={CreatePost} />
        </Switch>
        {/* Footer Area */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
