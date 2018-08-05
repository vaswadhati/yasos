import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { callUpdateProduct } from 'actions/test-actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test thunk action creator', () => {
  it('expected actions should be dispatched on successful request', async () => {
    const store = mockStore({});
    const expectedActions = [
      'UPDATE_PRODUCT_STARTED',
      'PRODUCT_UPDATE_SUCCESSFUL',
    ];

    await store.dispatch(callUpdateProduct('ipod', 'SUCCESS'));
    console.log('store getActions: ', store.getActions());
    const actionsReceived = store.getActions().map(action => action.type);
    expect(actionsReceived).toEqual(expectedActions);
  });

  it('expected actions should be dispatched on failed request', async () => {
    const store = mockStore({});
    const expectedActions = [
      'UPDATE_PRODUCT_STARTED',
      'PRODUCT_UPDATE_FAILURE',
    ];

    await store.dispatch(callUpdateProduct('ipod', 'FAILURE'));
    console.log('store getActions: ', store.getActions());
    const actionsReceived = store.getActions().map(action => action.type);
    expect(actionsReceived).toEqual(expectedActions);
  });
});
