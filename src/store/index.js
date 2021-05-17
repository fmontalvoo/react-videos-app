import { configureStore, createSlice } from '@reduxjs/toolkit';

// Almacena la informacion inicial del usuario.
let userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null, // Informacion inicial del usuario.
        state: '' // Maneja el estado del usuario.
    },
    // Define las acciones que van a modificar el estado del usuario.
    reducers: {
        signIn: (state, action) => {
            // Actualiza la informacion del usuario.
            state.user = action.payload;
        },
        signOut: (state) => {
            // Borra la informacion del usuario.
            state.user = null;
        }
    }
});

// Action creators
// Funciones que ejecutan a los reducers.
export const { signIn, signOut } = userSlice.actions;

export const store = configureStore({
    reducer: {
        // Reducer para manejar el estado del usuario.
        userStore: userSlice.reducer
    }
});