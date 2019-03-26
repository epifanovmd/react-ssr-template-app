import {combineReducers, Reducer} from "redux";
import {IAppState} from "../IAppState";
import {mainPageReducer} from "../../modules/main/mainReducer";

export type Reducers<T> = {
  [P in keyof T]: Reducer<T[P]>;
};

export function createMainReduce(): Reducer<IAppState> {
  const _reducers: Reducers<IAppState> = {
    mainPage: mainPageReducer,
  };

  return combineReducers(_reducers);

}