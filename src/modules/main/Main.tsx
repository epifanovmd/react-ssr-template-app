import React, {Component} from "react";
import {mainSelector} from "./mainSelector";
import {connect} from "react-redux";
import {LoadState} from "../../common/loadState";
import {MainComponent} from "../../components/mainComponent/mainComponent";
// import "../../assets/clearfix.scss";
import {Users} from "../../api/dto/Users.g";

export interface IMainPageStateProps {
  users: Users[];
  usersLoadState: LoadState;
}

export interface IMainPageDispatchProps {
  getUsers: () => void;
}

type TProps = IMainPageStateProps & IMainPageDispatchProps;

class MainStatic extends Component<TProps> {
  componentDidMount(): void {
    this.props.getUsers();
  }

  public render(): JSX.Element {
    console.log(this.props.users);

    return (
      <>
        <MainComponent/>
      </>
    );
  }
}

export const Main = connect(mainSelector.mapState, mainSelector.mapDispatch)(MainStatic);
