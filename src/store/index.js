import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user';
import videosReducer from './videos';

// Combina los reducers de la aplicacion.
const reducer = combineReducers({
    // Reducer para manejar el estado del usuario.
    userStore: userReducer,
    // Reducer para manejar el estado de videos..
    videosStore: videosReducer
});

// Configuracion de persistencia.
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['userStore'] // Unicamente almacenara la informacion del usuario de forma persistente.
    // blacklist: [] // Funciona de forma contraria a whitelist.
}

const persistedReducer = persistReducer(persistConfig, reducer);


// Almacenamiento de Redux.
export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);