import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import links from "./routing/links/links";

import { Home, Login, Projects, Resume, UpdateSite } from "./pages";
import { Background } from "./components";

import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GlobalStyles } from "./styling";

class App extends React.Component {
  state = {
    user: null,
  };

  // genPaths(){

  //   for(let val in links){
  //     post(val)
  //   }
  // }

  componentDidMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ user: user });
      } else {
        this.setState({ user: user });
      }
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <GlobalStyles />
          {/* <Overlay /> */}
          {/* <Nav/> */}
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            {/* <Route path={links.myFeed} element={<MyFeed/>}></Route> */}
            {/* <Route path={links.contact} element={<Contact />}></Route> */}
            <Route path={links.home} element={<Home />}></Route>
            <Route path={links.projects} element={<Projects />}></Route>
            <Route path={links.resume} element={<Resume />}></Route>
            <Route path={links.login} element={<Login />}></Route>
            <Route
              path={links.updateSite}
              element={this.state.user ? <UpdateSite /> : <Home />}
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
