import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Ejecuta una funcion asincrona para modificar el estado del usuario.
export const signUp = createAsyncThunk('user/signUp',
    // Promesa
    async ({ credentials }) => {
        return credentials;
    }
);

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
        },
    },
    // Crea un reducer para cada uno de los estados de la promesa.
    extraReducers: {
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
    }
});

// Action creators
// Funciones que ejecutan a los reducers.
export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;