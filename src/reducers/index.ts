import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as syncExampleReducer from './syncExample';

export interface IAppState {
  syncExample: syncExampleReducer.SyncExampleState;
}

export const initialState: IAppState = {
  syncExample: syncExampleReducer.SYNC_EXAMPLE_STATE,
};

export const jsonedInitialState = JSON.stringify(initialState);

export const rootReducer = combineReducers({
  syncExample: syncExampleReducer.syncExampleReducer,
  routing: routerReducer,
});

