import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import {appSlice, cardsSlice, floatingAlertSlice} from './slices'

import thunk from 'redux-thunk';

export const store = configureStore({
   reducer: {
      navApp: appSlice,
      navFloatingAlert: floatingAlertSlice,
      navCards: cardsSlice,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
  })
}, applyMiddleware(thunk))