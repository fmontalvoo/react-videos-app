import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Axios es una libreria para realizar peticiones AJAX.
import Axios from 'axios';

import apiConfig from '../config/api';

export const likeVideo = createAsyncThunk('',
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

        const likeBody = {
            like: {
                videoId: id
            }
        }

        const response = await Axios.post(`${apiConfig.domain}/likes`, likeBody, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    }
);

let likeSlice = createSlice({
    name: 'like',
    initialState: {
        status: '',
        data: {}
    },
    extraReducers: {
        [likeVideo.fulfilled]: (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        }
    }
});

export default likeSlice.reducer;