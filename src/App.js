import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import links from "./routing/links/links";

import { Nav } from "./routing/Nav/Nav";
import MyFeed from "./pages/MyFeed";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Login from "./pages/Login";
import PageContainer from "./components/PageContainer";
import UpdateSite from "./pages/UpdateSite";
import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import post from "./services/post";
import { GlobalStyles } from "./styling";

import { Overlay } from "./components/Overlay";
class App extends React.Component {
  state = {
    currentUser: undefined,
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
          <Overlay />
          {/* <Nav/> */}
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            {/* <Route path={links.myFeed} element={<MyFeed/>}></Route> */}
            <Route path={links.contact} element={<Contact />}></Route>
            <Route path={links.home} element={<Home />}></Route>
            {/* <Route path={links.projects} element={<Projects/>}></Route> */}
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
