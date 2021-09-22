import React, { createContext, useReducer, useContext } from "react";
import { nanoid } from "nanoid";
import { findItemIndexById, overrideItemAtIndex } from "./utils/arrayUtils";

type Task = {
  id: string;
  text: string;
};

type List = {
  id: string;
  title: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

const appData: AppState = {
  lists: [
    {
      id: "0",
      title: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      title: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      title: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

type AppStateContextProps = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};

// discriminated union, each action has a type property: the discriminant
type Action =
  | { type: "ADD_LIST"; payload: string }
  | { type: "ADD_TASK"; payload: { text: string; listId: string } };

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: nanoid(),
            title: action.payload,
            tasks: [],
          },
        ],
      };
    }

    case "ADD_TASK": {
      const targetLaneIndex = findItemIndexById(
        state.lists,
        action.payload.listId
      );

      const targetList = state.lists[targetLaneIndex];

      const updatedTargetList = {
        ...targetList,
        tasks: [
          ...targetList.tasks,
          { id: nanoid(), text: action.payload.text },
        ],
      };

      return {
        ...state,
        lists: overrideItemAtIndex(
          state.lists,
          updatedTargetList,
          targetLaneIndex
        ),
      };
    }

    default:
      return state;
  }
};
