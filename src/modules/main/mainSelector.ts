import {IAppState} from "src/store/IAppState";
import {IMainPageDispatchProps, IMainPageStateProps} from "./Main";
import {MainPageThunk} from "./mainPageThunk";
import {Dispatch} from "react";

class MainSelector {
  mapState = ({mainPage}: IAppState): IMainPageStateProps => (
    {
      users: mainPage.users,
      usersLoadState: mainPage.usersLoadState,
    }
  );

  mapDispatch = (dispatch: Dispatch<any>): IMainPageDispatchProps => (
    {
      getUsers: (): void => {
        dispatch(MainPageThunk.getUsers());
      },
    });
}

export const mainSelector = new MainSelector();