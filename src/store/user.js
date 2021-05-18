import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Axios es una libreria para realizar peticiones AJAX.
import Axios from 'axios';

import apiConfig from '../config/api';

// Ejecuta una funcion asincrona para modificar el estado del usuario.
export const signUp = createAsyncThunk('user/signUp',
    // Promesa
    async ({ credentials }) => {
        const response = await Axios.post(`${apiConfig.domain}/users`, { user: credentials });
        return response.data.user;
    }
);

export const signIn = createAsyncThunk('user/signIn',
    async ({ credentials }) => {
        const response = await Axios.post(`${apiConfig.domain}/users/signin`, { user: credentials });
        return response.data.user;
    }
);

// Almacena la informacion inicial del usuario.
let userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null, // Informacion inicial del usuario.
        state: '' // Maneja el estado de las peticiones al api.
    },
    // Define las acciones que van a modificar el estado del usuario.
    reducers: {
        signOut: (state) => {
            // Borra la informacion del usuario.
            state.user = null;
        },
    },
    // Crea un reducer para cada uno de los estados de la promesa.
    extraReducers: {
        // Reducers para crear un usuario.
        [signUp.pending]: (state, action) => {
            state.state = 'pending';
        },
        [signUp.fulfilled]: (state, action) => {
            state.state = 'success';
            state.user = action.payload;
        },
        [signUp.rejected]: (state, action) => {
            state.state = 'rejected';
        },
        // Reducers para iniciar sesion.
        [signIn.pending]: (state, action) => {
            state.state = 'pending';
        },
        [signIn.fulfilled]: (state, action) => {
            state.state = 'success';
            state.user = action.payload;
        },
        [signIn.rejected]: (state, action) => {
            state.state = 'rejected';
        },
    }
});

// Action creators
// Funciones que ejecutan a los reducers.
export const { signOut } = userSlice.actions;

export default userSlice.reducer;