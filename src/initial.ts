import { communication, Communication } from '@performance-artist/redux-unit';

export type InitialState = {
  savedTodos: string[];
  communication: {
    getTodo: Communication;
  };
  data: {
    todos: string[];
  };
};

export const initialState: InitialState = {
  savedTodos: [],
  communication: {
    getTodo: communication.initial,
  },
  data: {
    todos: [],
  },
};
