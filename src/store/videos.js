import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Axios es una libreria para realizar peticiones AJAX.
import Axios from 'axios';

import apiConfig from '../config/api';

export const loadVideos = createAsyncThunk('videos/loadVideos',
    async (page = 1, thunkAPI) => {
        let token;
        try {
            // Recupera el token del store del usuario.
            token = thunkAPI.getState().userStore.user.jwtToken;
        } catch (error) {
            console.error(error);
            return Promise.reject('No existe el token');
        }
        if (!token) return Promise.reject('No existe el token');

        const response = await Axios.get(`${apiConfig.domain}/videos?page=${page}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    }
);

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
    extraReducers: {
        [loadVideos.fulfilled]: (state, action) => {
            let { videos, nextPage, total } = action.payload;
            state.status = 'success';
            state.data = {
                videos: state.data.videos.concat(videos),
                nextPage,
                total
            }
        }
    }
});

export default videosSlice.reducer;