import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Axios es una libreria para realizar peticiones AJAX.
import Axios from 'axios';

import apiConfig from '../config/api';

const innerLoadVideos = async (path, thunkAPI) => {
    let token;
    try {
        // Recupera el token del store del usuario.
        token = thunkAPI.getState().userStore.user.jwtToken;
    } catch (error) {
        console.error(error);
        return Promise.reject('No existe el token');
    }
    if (!token) return Promise.reject('No existe el token');

    const response = await Axios.get(`${apiConfig.domain}/${path}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

export const loadVideos = createAsyncThunk('videos/loadVideos',
    async (page = 1, thunkAPI) => {
        return await innerLoadVideos(`videos?page=${page}`, thunkAPI);
    }
);

export const loadUserVideos = createAsyncThunk('videos/loadUserVideos',
    async (args, thunkAPI) => {
        return await innerLoadVideos(`users/videos`, thunkAPI);
    }
);

export const uploadVideos = createAsyncThunk('videos/uploadVideos',
    async (videoData, thunkAPI) => {
        let token;
        try {
            // Recupera el token del store del usuario.
            token = thunkAPI.getState().userStore.user.jwtToken;
        } catch (error) {
            console.error(error);
            return Promise.reject('No existe el token');
        }
        if (!token) return Promise.reject('No existe el token');

        const response = await Axios.post(`${apiConfig.domain}/videos`, videoData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    }
);

export const getVideo = createAsyncThunk('videos/getVideo',
    async (id, thunkAPI) => {
        let token;
        try {
            // Recupera el token del store del usuario.
            token = thunkAPI.getState().userStore.user.jwtToken;
        } catch (error) {
            console.error(error);
            return Promise.reject('No existe el token');
        }
        if (!token) return Promise.reject('No existe el token');

        const response = await Axios.get(`${apiConfig.domain}/videos/${id}`, {
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
        currentVideo: null, // Muestra un unico video.
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
        // Reducers para recuperar los videos.
        [loadVideos.fulfilled]: (state, action) => {
            let { videos, nextPage, total } = action.payload;
            state.status = 'success';
            state.data = {
                videos: state.data.videos.concat(videos),
                nextPage,
                total
            }
        },
        // Reducers para recuperar los videos del usuario.
        [loadUserVideos.fulfilled]: (state, action) => {
            state.data.videos = action.payload;
        },
        // Reducers para subir video al api de videos. 
        [uploadVideos.fulfilled]: (state) => {
            state.status = 'success';
        },
        // Reducers para recuperar un video por su id. 
        [getVideo.fulfilled]: (state, action) => {
            state.status = 'success';
            state.currentVideo = action.payload;
        }
    }
});

export default videosSlice.reducer;