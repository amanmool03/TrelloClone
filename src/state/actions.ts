import { DragItem } from "../DragItem";

export type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | { type: "ADD_TASK"; payload: { listId: string; text: string } }
  | { type: "DELETE_TASK"; payload: { listId: string; columnId: string } }
  | {
      type: "MOVE_LIST";
      payload: {
        draggedId: string;
        hoverId: string;
      };
    }
  | {
      type: "SET_DRAGGED_ITEM";
      payload: DragItem | null;
    }
  | {
      type: "MOVE_TASK";
      payload: {
        draggedItemId: string;
        hoveredItemId: string | null;
        sourceColumnId: string;
        targetColumnId: string;
      };
    };

export const addTask = (text: string, listId: string): Action => {
  return {
    type: "ADD_TASK",
    payload: {
      text,
      listId,
    },
  };
};

export const delTask = (listId: string, columnId: string): Action => {
  return {
    type: "DELETE_TASK",
    payload: {
      listId,
      columnId,
    },
  };
};

export const addList = (text: string): Action => {
  return {
    type: "ADD_LIST",
    payload: text,
  };
};

export const moveList = (draggedId: string, hoverId: string): Action => {
  return {
    type: "MOVE_LIST",
    payload: {
      draggedId,
      hoverId,
    },
  };
};

export const setDraggedItem = (draggedItem: DragItem | null): Action => {
  return {
    type: "SET_DRAGGED_ITEM",
    payload: draggedItem,
  };
};

export const moveTask = (
  draggedItemId: string,
  hoveredItemId: string | null,
  sourceColumnId: string,
  targetColumnId: string
): Action => {
  return {
    type: "MOVE_TASK",
    payload: {
      draggedItemId,
      hoveredItemId,
      sourceColumnId,
      targetColumnId,
    },
  };
};
