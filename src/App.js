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
<<<<<<< HEAD
import UserRegister from "./containers/user-register";
import UserLogin from "./containers/user-login";
=======
import CreatePostContainer from "./containers/create-post-container";
import PostDetailsContainer from "./containers/post-details-container";
>>>>>>> 5ea6cf0978579b43fbfa9a1135324d47ad7c3f6d

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
<<<<<<< HEAD
          <Route path="/register" component={UserRegister} />
          <Route path="/login" component={UserLogin} />
=======
          <Route path="/post-details" component={PostDetailsContainer} />
          <Route path="/create-post" component={CreatePostContainer} />
>>>>>>> 5ea6cf0978579b43fbfa9a1135324d47ad7c3f6d
        </Switch>
        {/* Footer Area */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
