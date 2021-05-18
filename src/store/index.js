import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userSlice from './user';

// Combina los reducers de la aplicacion.
const reducer = combineReducers({
    // Reducer para manejar el estado del usuario.
    userStore: userSlice
});

// Configuracion de persistencia.
const persistConfig = {
    key: 'root',
    storage: storage
}

const persistedReducer = persistReducer(persistConfig, reducer);


// Almacenamiento de Redux.
export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);