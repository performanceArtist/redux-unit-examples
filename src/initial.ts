import { CommunicationBranch, createCommunicationBranch } from '@performance-artist/redux-unit';

export type InitialState = {
  savedTodos: string[];
  communication: CommunicationBranch<'getTodo', { todos: string[] }>;
};

export const initialState: InitialState = {
  savedTodos: [],
  communication: createCommunicationBranch(['getTodo'], { todos: [] }),
};
