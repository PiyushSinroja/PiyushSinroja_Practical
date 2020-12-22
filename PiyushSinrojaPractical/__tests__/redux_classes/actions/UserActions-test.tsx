import { ActionTypes } from '../../../source/redux-classes/actions/ActionType'
import {UserActions} from '../../../source/redux-classes/actions/UserActions';

describe('save user action', () => {
  it('save user name', () => {
    const userName = 'Piyush Sinroja';
    const expectedAction = {
      type: ActionTypes.saveUser,
      userName
    };
    expect(UserActions.saveUserInfo(userName)).toEqual(expectedAction);
  });
});
