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
import UserRegister from "./containers/user-register-container";
import UserRegisterDetails from "./containers/user-register-detail-container/user-register-details";
import UserLogin from "./containers/user-login-container";
import CreatePostContainer from "./containers/create-post-container";
import PostDetailsContainer from "./containers/post-details-container";
import CKTextEditor from "./components/create-post/text-editor/ck-editor";
import PostPreviewContainer from "./containers/post-preview-container";

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
          <Route path="/register" component={UserRegister} />
          <Route path="/complete-register" component={UserRegisterDetails} />
          <Route path="/login" component={UserLogin} />
          <Route path="/post-details" component={PostDetailsContainer} />
          <Route path="/create-post" component={CKTextEditor} />
          <Route path="/post-preview" component={PostPreviewContainer} />
        </Switch>
        {/* Footer Area */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
