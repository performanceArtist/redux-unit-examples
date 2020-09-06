import { reduxUnit, createApiHandler } from '@performance-artist/redux-unit';

import { initialState } from './initial';

const unit = reduxUnit(initialState, {
  typePrefix: 'TODO',
  prefixSeparator: ':',
  separator: '-',
});

const { actions, reducer } = unit({
  plainAction: state => state,
  add: (state, todo: string) => ({ ...state, savedTodos: state.savedTodos.concat(todo) }),
  repeat: (state, todo: string, count: number) => ({
    ...state,
    savedTodos: state.savedTodos.concat(todo.repeat(count))
  }),
  getTodo: createApiHandler<Date>()({
    field: 'getTodo',
    onSuccess: (dataState, todos: string[]) => ({ ...dataState, todos }),
  }),
});

export { actions as todoActions, reducer as todoReducer };
