import { Dispatch, createContext } from 'react';
import { UserActionType, UserStateInterface, initialUserState } from './userReducers';

const UserContext = createContext<{
  userState: UserStateInterface,
  userAction: Dispatch<UserActionType>
}>({

  userState: initialUserState,
  userAction: () => { },
});

export default UserContext;