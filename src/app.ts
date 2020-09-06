import { todoActions } from './unit';
import store from './store';

const add = todoActions.add('Test');
const repeatAdd = todoActions.repeat('Test', 3);
const getRequest = todoActions.getTodo.request(new Date());
const getSuccess = todoActions.getTodo.success(['Todo1', 'Todo2']);
const getFailure = todoActions.getTodo.failure(new Error('Error test'));
const getReset = todoActions.getTodo.reset();

const plainType = todoActions.add.getType();
const requestType = todoActions.getTodo.getType('request');
console.log('Raw types:', plainType, requestType);

store.dispatch(todoActions.plainAction());
store.dispatch(add);
store.dispatch(repeatAdd);
store.dispatch(getRequest);
store.dispatch(getSuccess);
store.dispatch(getFailure);
store.dispatch(getReset);

const dispatchers = todoActions.getTodo.mapDispatch(store.dispatch);
dispatchers.request(new Date());
