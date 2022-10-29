import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popup';
import categoryReducer from './category';
import fetchdataReducer from './fetchdata';

const store = configureStore({
    reducer: {
        popup:popupReducer,
        category:categoryReducer,
        fetchdata:fetchdataReducer,
    }
});

export default store;