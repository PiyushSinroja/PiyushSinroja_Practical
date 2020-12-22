import { ActionTypes } from '../actions/ActionType';
import {UserActionType} from '../actions/UserActions';
  /**
   * User initial state
   * @memberof UserReducers
   */
  const initialState = {
    userName: "",
  };

  export default function UserReducers(state = initialState, action: UserActionType) {
    switch (action.type) {
      case ActionTypes.saveUser:
        return {
          ...state,
          userName: action.userName,
        };
      default:
        return state;
    }
  }
  