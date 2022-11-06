import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popup';
import categoryReducer from './category';
import fetchdataReducer from './fetchdata';
import authReducer from './auth';
import userReducer from './user'

const store = configureStore({
    reducer: {
        popup: popupReducer,
        category: categoryReducer,
        fetchdata: fetchdataReducer,
        auth: authReducer,
        user: userReducer,
    }
});

export default store;