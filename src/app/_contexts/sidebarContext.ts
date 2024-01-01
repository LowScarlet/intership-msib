import { Dispatch, createContext } from 'react';
import { SidebarActionType, initialSidebarState } from './sidebarReducers';

const SidebarContext = createContext<{
  sidebarState: boolean,
  sidebarAction: Dispatch<SidebarActionType>
}>({
  sidebarState: initialSidebarState,
  sidebarAction: () => {},
});

export default SidebarContext;