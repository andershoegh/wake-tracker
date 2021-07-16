import React from "react";
import { Switch, Route } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Signup from "./Signup";

const LoginWrapper: React.FC = () => {
  return (
    <div className="flex w-full justify-center h-screen place-items-center">
      <div className="bg-white w-full mx-4 rounded-xl p-6 shadow-md">
        {/* <div className="justify-center text-blue-500 flex">
            <div>icon</div>
        </div> */}
        <div className="text-center font-extrabold text-2xl mt-3 mb-2">
          WakeTrack
        </div>
        <Switch>
          <Route exact path="/account" component={Login} />
          <Route path="/account/signup" component={Signup} />
          <Route
            path="/account/forgotPassword"
            component={ForgotPassword}
          ></Route>
        </Switch>
      </div>
    </div>
  );
};
export default LoginWrapper;
