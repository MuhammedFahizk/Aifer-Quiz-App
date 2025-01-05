import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
 import questReducer  from './feathers/quest.js'
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, questReducer);

export const store = configureStore({
  reducer: {
    quest: persistedReducer,
  },
});

export const persistor = persistStore(store);
