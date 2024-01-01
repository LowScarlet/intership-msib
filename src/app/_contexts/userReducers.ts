export interface UserStateInterface {
  id: string | null,
  username: string | null
}

export type UserActionType =
  | { type: 'UPDATE'; payload: UserStateInterface }
  | { type: 'DELETE' }

export const initialUserState: UserStateInterface = {
  id: null,
  username: null,
}

export const userReducer = (state: UserStateInterface, action: UserActionType) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        ...action.payload
      }
    case "DELETE":
      return {
        ...state,
        ...initialUserState
      }

    default:
      return state
  }
}