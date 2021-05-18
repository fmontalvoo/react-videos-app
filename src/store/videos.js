import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Axios from 'axios';

import apiConfig from '../config/api';

// Almacena la informacion inicial de los videos.
const videosSlice = createSlice({
    name: 'videos',
    initialState: {
        status: '', // Indica el estado de las peticiones al api.
        data: {
            videos: [], // Informacion inicial del arreglo de videos.
            nextPage: 1, // Almacena informacion de la pagina actual de la paginacion del api de videos.
            total: 1 // Total de videos que existen en la paginacion del api de videos.
        }
    },
    // Define las acciones que van a modificar el estado de los videos.
    reducers: {},
    // Crea un reducer para cada uno de los estados en una promesa.
    extraReducers: {}
});

export default videosSlice.reducer;