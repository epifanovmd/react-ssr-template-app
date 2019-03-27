import {LoadState} from "../../common/loadState";
import {Users} from "../../api/dto/Users.g";

export interface IMainState {
  users: Users[];
  usersLoadState: LoadState;
}

export const mainInitialState: IMainState = {
  users: [],
  usersLoadState: LoadState.needLoad,
};
