import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginWrapper from "./components/login/LoginWrapper";
import PrivateRoute from "./components/PrivateRoute";
import Sidebar from "./components/Sidebar";
import SidebarMobile from "./components/SidebarMobile";
import AuthProvider from "./contexts/AuthContext";
import FireProvider from "./contexts/FireContext";
import Learn from "./pages/Learn";
import Profile from "./pages/Profile";
import Shuffle from "./pages/Shuffle";
import TrickList from "./pages/TrickList";

function App() {
  return (
    <div className="App bg-blueGrey-100 relative flex h-screen">
      <Router>
        <AuthProvider>
          <div className="hidden md:block">
            <Sidebar />
          </div>
          <div className="md:hidden">
            <SidebarMobile />
          </div>

          <div className="flex w-full">
            <div className="overflow-y-auto w-full h-full pb-16">
              <Switch>
                <Route path="/account" component={LoginWrapper} />
                <FireProvider>
                  <PrivateRoute exact path="/profile" component={Profile} />
                  <PrivateRoute exact path="/shuffle" component={Shuffle} />
                  <PrivateRoute
                    exact
                    path="/trick-list"
                    component={TrickList}
                  />
                  <PrivateRoute exact path="/" component={Learn} />
                </FireProvider>
              </Switch>
            </div>
          </div>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
