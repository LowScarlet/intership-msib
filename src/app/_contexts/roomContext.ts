import { Dispatch, createContext } from 'react';
import { RoomActionType, RoomStateInterface, initialRoomState } from './roomReducers';

const RoomContext = createContext<{
  roomState: Array<RoomStateInterface>,
  roomAction: Dispatch<RoomActionType>
}>({

  roomState: initialRoomState,
  roomAction: () => { },
});

export default RoomContext;