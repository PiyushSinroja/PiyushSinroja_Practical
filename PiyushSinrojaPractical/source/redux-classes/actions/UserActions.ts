import { ActionTypes } from './ActionType'

interface SaveUserAction {
    type: typeof ActionTypes.saveUser,
    userName: String;
}
  
export type UserActionType = SaveUserAction

export const UserActions = {
  saveUserInfo: (userName: String): UserActionType => {
    return {
      type: ActionTypes.saveUser,
      userName,
    }
  },
}
