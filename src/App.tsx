import {PopupNotification} from "./components/popupNotification/popupNotification";
import {Route} from "react-router";
import {Main} from "./modules/main/Main";
import React from "react";
import {NavLink} from "react-router-dom";
import {TestComponent} from "./components/testComponent/testComponent";

export const Routes = (): JSX.Element => (
  <>
    <PopupNotification/>
    <ul className={"container"}>
      <li>
        <NavLink to={"/"}>{"Main"}</NavLink>
      </li>
      <li>
        <NavLink to={"/test"}>{"Test"}</NavLink>
      </li>
    </ul>

    <Route exact={true} path="/" component={Main}/>
    <Route exact={true} path="/test" component={TestComponent}/>
  </>
);