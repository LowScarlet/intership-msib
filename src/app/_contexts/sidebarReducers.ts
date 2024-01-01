export type SidebarActionType =
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'TOGGLE' };

export const initialSidebarState: boolean = false

export const sidebarReducer = (state: boolean, action: SidebarActionType) => {
  switch (action.type) {
    case "OPEN":
      return true

    case "CLOSE":
      return false

    case "TOGGLE":
      return !state

    default:
      return state
  }
}