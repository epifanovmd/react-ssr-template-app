import {SimpleThunk} from "../../common/simpleThunk";
import {MainPageActions} from "./mainPageActions";
import {Dispatch} from "react";
import {requestRepository} from "../../api/RequestsRepository.g";
import {EventNames, eventRegister} from "../../common/eventRegister";
import {getExceptionText} from "../../common/exceptionType";
import {INotificationPopupData} from "../../components/popupNotification/popupNotification";

export class MainPageThunk {
  static getUsers(): SimpleThunk {
    return async (dispatch: Dispatch<any>): Promise<void> => {
      const params = {};
      dispatch(MainPageActions.getUsers.started(params));
      try {
        const result = await requestRepository.usersApiRequest.get();
        dispatch(MainPageActions.getUsers.done({params, result}));
      } catch (error) {
        eventRegister.emitEvent(EventNames.notification, {
          title: "Ошибка",
          subtitle: getExceptionText(error.type),
          iconType: "error",
        } as INotificationPopupData);
        dispatch(MainPageActions.getUsers.failed({params, error}));
      }
    };
  }
}