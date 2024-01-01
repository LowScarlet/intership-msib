export interface ChatInterface {
  id: string,
  question: string,
  answer: string
}

export interface RoomStateInterface {
  id: string | null,
  name: string | null,
  chats: ChatInterface[]
}

export type RoomActionType =
  | { type: 'CREATE'; payload: Array<RoomStateInterface> }
  | { type: 'UPDATE'; payload: Array<RoomStateInterface> }
  | { type: 'DELETE'; payload: Array<RoomStateInterface> }

export const initialRoomState: Array<RoomStateInterface> = [
  {
    id: '123',
    name: 'General',
    chats: [
      {
        id: '1',
        question: 'Test',
        answer: 'Test Juga'
      }
    ]
  }
]

export const roomReducer = (state: Array<RoomStateInterface>, action: RoomActionType) => {
  switch (action.type) {
    case "CREATE":
      return {
        ...state,
        ...action.payload
      }
    case "UPDATE":
      return {
        ...state,
        ...action.payload
      }
    case "DELETE":
      return {
        ...state,
        ...initialRoomState
      }

    default:
      return state
  }
}