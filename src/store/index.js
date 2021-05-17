import { configureStore } from '@reduxjs/toolkit';

import userSlice from './user';

export const store = configureStore({
    reducer: {
        // Reducer para manejar el estado del usuario.
        userStore: userSlice
    }
});